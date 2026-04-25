# Shared Styles

npm workspaces monorepo — CSS design tokens, reset, layout utilities, early components. Storybook for visual review.

@AGENTS.md

## For Claude Code

### Slash commands

| Command | What it does |
|---------|---|
| `/test` | Build, lint, typecheck, and run Storybook tests |

### Rules loaded automatically

| Rule file | Applied to |
|-----------|---|
| `.ai/rules/npm-monorepo.md` | `package.json`, `turbo.json`, `**/*.ts` |

### Constraints

- CSS custom properties (`var(--krudi-*)`) are the source of truth — never suggest hardcoded color/spacing values
- Renaming a token is a breaking change — check usages in `impuls` and `krudi-io` first
- Always verify changes visually in Storybook before publishing
- This monorepo depends on `shared-configs` — do not duplicate linting rules here
