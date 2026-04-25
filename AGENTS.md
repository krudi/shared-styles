# Shared Styles

npm workspaces monorepo providing shared CSS foundations, design tokens, utilities, and early components for `@krudi/*` projects. Includes a Storybook for visual development and review.

## Stack

- npm workspaces, Turbo
- Storybook for component development and visual testing
- CSS custom properties (design tokens)

---

## Onboarding

**Prerequisites:** Node.js ≥ 20.

1. `npm install`
2. `npm run build` — build all packages
3. `npm run dev` — start Storybook for local development
4. Verify: Storybook opens and all stories render without errors

---

## Commands

```bash
npm run build            # build all packages (Turbo)
npm run dev              # watch mode + Storybook
npm run lint             # lint all packages
npm run typecheck        # typecheck all packages
npm run test:storybook   # run Storybook tests (visual regression)
npm run clean            # clean dist/ and .turbo/
```

---

## Project structure

```
packages/               # publishable @krudi/* packages
  tokens/               # CSS custom property design tokens (source of truth)
  reset/                # CSS reset
  layout/               # layout utilities
  components/           # early shared CSS components
addons/                 # additional workspace packages
apps/
  storybook/            # Storybook app for visual development
turbo.json              # build pipeline
```

---

## Architecture

Design tokens in `packages/tokens/` are CSS custom properties — the authoritative source for all color, typography, spacing, and animation values. Consumer projects reference these via `var(--krudi-*)`.

**Consumers:** `impuls`, `krudi-io`

**Design token workflow:**
1. Token change in `packages/tokens/`
2. Build: `npm run build`
3. Visual review in Storybook
4. Publish updated packages

---

## Testing

- Visual review: always open Storybook before publishing — visual regressions are caught here
- Run before every PR: `npm run build && npm run lint && npm run typecheck`
- Run Storybook tests: `npm run test:storybook`
- **Required before publishing:** verify visually in Storybook that existing stories still render correctly

---

## Release & publishing

1. Make changes to tokens or packages
2. Review changes in Storybook
3. Bump package versions (keep all in sync)
4. Run `npm run build`
5. Publish: `npm publish --workspaces`

**Token rename warning:** renaming a CSS custom property is a breaking change — audit all `var(--krudi-*)` usages in consumers before renaming.

---

## Cross-project context

- **Depends on:** `shared-configs` for ESLint, TypeScript, Prettier, Stylelint configs
- **Consumed by:** `impuls`, `krudi-io`
- Breaking token changes require consumer updates — coordinate before publishing

---

## Notes

- CSS custom properties are the source of truth for design tokens — avoid hardcoded values anywhere
- **Breaking changes propagate everywhere** — test visually in Storybook before publishing
- Use Storybook for developing and reviewing components in isolation

---

## Rules

@.ai/rules/npm-monorepo.md
