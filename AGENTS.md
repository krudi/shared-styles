# Agent instructions

This file is the canonical instruction source for every coding agent. `CLAUDE.md` only imports it, because Claude Code
does not read `AGENTS.md` by itself. Start every agent session at the repository root: Claude Code expands the
`@AGENTS.md` import only for the working directory's `CLAUDE.md`, and Codex started inside a subdirectory loads only
that directory's `AGENTS.md` and none of the repository skills. Skills, adapters and nested instruction files point
here; they never restate rules.

npm workspaces + Turbo monorepo providing shared CSS foundations, design tokens, utilities and early components for
`@krudi/*` projects, with React/Vue wrappers, SVG icons and a Storybook for visual development and review.

## Where knowledge lives

| Question                                           | Source                                                 |
| -------------------------------------------------- | ------------------------------------------------------ |
| Packages, quick start, consuming `@krudi/styles`   | `README.md`                                            |
| A package's entrypoints, API and override guidance | `packages/<name>/README.md`                            |
| Storybook scripts and story coverage               | `apps/storybook/README.md`                             |
| Design-token docs addon                            | `addons/storybook-design-tokens/README.md`             |
| Conventions, verification, release                 | This file                                              |
| Repeatable workflows (commit, PR, test, …)         | `.ai/skills/<name>/SKILL.md` — pick by its description |

Do not create competing documentation; update the owner instead.

## Non-negotiables

- CSS custom properties (`var(--krd-*)`) are the source of truth for color, typography, spacing and animation values —
  never introduce hardcoded values where a token exists.
- Renaming or removing a CSS custom property, class or entrypoint is a breaking change: audit usages in consumers
  (`typo3-template`, `impuls`, `krudi-io`) and coordinate before publishing.
- Never read or print `.env` values or other secrets (including the npm token used by release workflows).
- Do not add explanatory or rationale comments in code or CSS; explain in chat or in the package README instead.

## Conventions

### Workspaces

```
packages/styles/                  # @krudi/styles — palette, theme, tokens (variables.css), base, layout, html,
                                  #   components, forms, utilities (src/styles) and JS helpers (src/scripts)
packages/icons/                   # @krudi/icons — SVG assets, optimised by svgo into dist/
packages/react/                   # @krudi/react — React wrappers for @krudi/styles classes (Vite, Vitest)
packages/vue/                     # @krudi/vue — Vue wrappers for @krudi/styles classes (Vite, Vitest, vue-tsc)
addons/storybook-design-tokens/   # @krudi/storybook-design-tokens — Storybook addon for token docs
apps/storybook/                   # @krudi/storybook (private) — HTML stories, Vitest story tests
turbo.json                        # task pipeline
```

- Every workspace is scoped `@krudi/<name>`. A new package gets its own `package.json`, `tsconfig.json` (TypeScript
  config is local per package, not shared) and, if it builds, a `build` script that Turbo picks up.
- Lint and format with oxlint + oxfmt from the repository root — no per-package lint config.
- New public components or utilities in `@krudi/styles` ship with a Storybook story in the same change; React/Vue
  wrappers stay in step with the CSS class surface.
- Turbo caches on task inputs; never put generated files in inputs. `dist/`, `storybook-static/`, `coverage/` and
  `.turbo/` are Git-ignored and always produced by a fresh build.

### Release

Each publishable package (`styles`, `icons`, `react`, `vue`) is versioned and released independently through its
`Release (@krudi/<name>)` GitHub workflow (`.github/workflows/release-<name>.yaml`, manual `workflow_dispatch` with the
new version). The workflow bumps the version, commits, tags `@krudi/<name>@<version>`, builds and runs
`npm publish --workspace=@krudi/<name>`. Never bump versions or publish locally. Storybook is deployed by
`deploy-storybook.yaml`.

Before triggering a release: review the change in Storybook and confirm existing stories still render correctly.

## Working rules

- Run commands from the repository root with the Node version in `.nvmrc`; use the root npm scripts (Turbo) or
  `--workspace @krudi/<name>`, not package-local tools.
- Never commit, amend or push unless asked. Stage only files that belong to the task; leave unrelated dirty files,
  owner-local files and untracked scratch exactly as found — never restore, reset or stash them to make a task easier.
- Git hooks come from `lefthook.yml` (`npm run install:lefthook` once per clone); never bypass them with `--no-verify`.
  When a hook fails, fix the staged files or report the failure — do not work around the hook.
- Generated output (`dist/`, `storybook-static/`, `coverage/`, `.turbo/`, `.cache/`) is never committed.
- Never start, stop or restart the owner's dev servers: `npm run dev` (Turbo watch + Storybook on port 44877) and the
  addon's Storybook (port 44878). Reuse a running one; if it is missing, report the exact command for the owner and stop
  that step. Only terminate processes started by the current workflow, by their exact PID — never by process name or
  port.
- Do not modify unrelated files solely to make a repository-wide check pass, and never silently skip a failing check:
  report the exact command, the failure, and whether it looks related.

## Verification

Verification is proportional to the change. While iterating, run the row(s) that match the files you touched; before
declaring a change complete, widen to every area it crosses. CI runs `lint:ox`, `format:ox:check`, `build`, `typecheck`,
`knip` and `test:storybook`.

| Changed area                     | While iterating                                                                          | Before completion, when applicable                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `packages/styles`                | `npm run typecheck --workspace @krudi/styles && npm run build --workspace @krudi/styles` | `npm run test:storybook`; visual review in Storybook                      |
| `packages/icons`                 | `npm run build --workspace @krudi/icons`                                                 | —                                                                         |
| `packages/react`                 | `npm run typecheck --workspace @krudi/react && npm run test --workspace @krudi/react`    | `npm run build --workspace @krudi/react`                                  |
| `packages/vue`                   | `npm run typecheck --workspace @krudi/vue && npm run test --workspace @krudi/vue`        | `npm run build --workspace @krudi/vue`                                    |
| `apps/storybook`, `addons/*`     | `npm run typecheck --workspace <name>`                                                   | `npm run build -- --filter=@krudi/storybook...`; `npm run test:storybook` |
| cross-cutting, tooling, markdown | `npm run verify:static` (typecheck, lint, knip)                                          | `npm run verify:static && npm run build && npm run test:storybook`        |

`npm run test:storybook` needs Playwright Chromium (`npm exec -- playwright install chromium`); if it is missing, report
that rather than skipping the check.

## AI workflow layout

| Path                                          | Holds                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.ai/skills/<name>/`                          | Project skills — the only copy of each; generated files go to the skill's own `output/`, ignored by a skill-local `.gitignore` |
| `.agents/skills/`                             | Third-party skills managed by `npx skills` (`skills-lock.json`), plus a symlink per project skill so Codex discovers it        |
| `.claude/skills/`                             | Symlinks only — Claude Code's discovery path into both of the above                                                            |
| `.claude/settings.json`, `.codex/config.toml` | Per-agent settings only; keep their environment policy in sync                                                                 |
| `.ai/audits/<YYYY-MM-DD>-<slug>/README.md`    | An audit lives here only while it holds unresolved work                                                                        |

## Project skills

All shared-styles-owned skills live canonically under `.ai/skills/`.

Agent-specific skill directories such as `.claude/skills/` and `.agents/skills/` must contain only adapters or symlinks
to those project skills when required for tool discovery (`ln -s ../../.ai/skills/<name>` in both).

Never maintain duplicate copies of a shared-styles-owned `SKILL.md`.

When an audit is done, move its durable conclusions into `AGENTS.md` or the relevant README, carry any open item to a
tracked place, and delete the folder — git history is the archive. Audits carry no screenshots or raw dumps.
