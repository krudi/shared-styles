# Agent instructions

Start agent sessions at the repository root.

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
| Third-party skills                                 | `skills-lock.json` (`npx skills`)                      |

Do not create competing documentation; update the owner instead.

## Non-negotiables

- CSS custom properties (`var(--krd-*)`) are the source of truth for color, typography, spacing and animation values —
  never introduce hardcoded values where a token exists.
- Renaming or removing a CSS custom property, class or entrypoint is a breaking change: audit usages in consumers
  (projects whose `package.json` depends on `@krudi/*`: `grep -rl '"@krudi/' --include=package.json` across the owner's
  projects) and coordinate before publishing.
- Never read or print `.env` values or other secrets (including the npm token used by release workflows).
- Do not add explanatory or rationale comments in code or CSS; explain in chat or in the package README instead.

## Conventions

### Workspaces

```
packages/styles/                  # @krudi/styles — palette, theme, tokens (variables.css), base, layout, html,
                                  #   components, forms, utilities (src/styles) and JS helpers (src/scripts)
packages/icons/                   # @krudi/icons — SVG assets, optimised by svgo into dist/
packages/react/                   # @krudi/react — React wrappers for @krudi/styles classes (Vite)
packages/vue/                     # @krudi/vue — Vue wrappers for @krudi/styles classes (Vite, vue-tsc)
addons/storybook-design-tokens/   # @krudi/storybook-design-tokens — Storybook addon for token docs
apps/storybook/                   # @krudi/storybook (private) — HTML stories, Vitest story tests
turbo.json                        # task pipeline
```

- Every workspace is scoped `@krudi/<name>`. A new package gets its own `package.json`, `tsconfig.json` (TypeScript
  config is local per package, not shared) and, if it builds, a `build` script that Turbo picks up.
- Lint and format with oxlint + oxfmt from the repository root — no per-package lint config.
- New public components or utilities in `@krudi/styles` ship with a Storybook story in the same change; React/Vue
  wrappers stay in step with the CSS class surface.
- Turbo caches on task inputs; never put generated files in inputs.

### Release

Each publishable package (`styles`, `icons`, `react`, `vue`) is released independently by its `Release (@krudi/<name>)`
GitHub workflow (`.github/workflows/release-<name>.yaml`, manual dispatch on `main`); Storybook is deployed by
`deploy-storybook.yaml`. Never bump versions or publish locally. Before triggering a release, review the change in
Storybook and confirm existing stories still render correctly.

## Working rules

- Run commands from the repository root; use the root npm scripts (Turbo) or `--workspace @krudi/<name>`, not
  package-local tools.
- Never commit, amend or push unless asked. Stage only files that belong to the task; leave unrelated dirty files,
  owner-local files and untracked scratch exactly as found — never restore, reset or stash them to make a task easier.
- Git hooks come from `lefthook.yml` (`npm run install:lefthook` once per clone); never bypass them with `--no-verify`.
  When a hook fails, fix the staged files or report the failure — do not work around the hook.
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
| `packages/react`                 | `npm run typecheck --workspace @krudi/react`                                             | `npm run build --workspace @krudi/react`                                  |
| `packages/vue`                   | `npm run typecheck --workspace @krudi/vue`                                               | `npm run build --workspace @krudi/vue`                                    |
| `apps/storybook`, `addons/*`     | `npm run typecheck --workspace <name>`                                                   | `npm run build -- --filter=@krudi/storybook...`; `npm run test:storybook` |
| cross-cutting, tooling, markdown | `npm run verify:static` (typecheck, lint, knip)                                          | `npm run verify:static && npm run build && npm run test:storybook`        |

`npm run test:storybook` needs Playwright Chromium (`npm exec -- playwright install chromium`); if it is missing, report
that rather than skipping the check. `@krudi/react` and `@krudi/vue` have no unit tests and no test runner; Storybook
covers only the HTML/CSS surface, so typecheck and build are what verify them.
