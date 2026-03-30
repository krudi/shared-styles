# Architecture

## Layer Order

The design system is intentionally layered:

1. `palette`
2. `variables`
3. `theme`
4. `base`
5. `layout`
6. `html`
7. `components`
8. `forms`
9. `utilities`

The package-level aggregate import in `packages/styles/src/styles/index.css` is the source of truth for this order.

## Token Model

Use the layers for different kinds of changes:

- `palette` contains low-level color primitives such as `--color-neutral-*`
- `theme` maps those primitives into semantic UI tokens such as `--background`, `--border`, `--primary`
- `variables` defines reusable spacing, type, motion, radius, shadow, and component customization hooks

In practice:

- Re-theme the system in `theme` first
- Override shared spacing/typography/component hooks in `variables`
- Touch `palette` only when you want to rebuild the default color system itself

## Authoring Rules

- Prefer semantic tokens over raw hardcoded values in component CSS
- Keep component CSS depending on shared tokens instead of redefining new ad hoc scales
- Promote a hardcoded value to a public token only when it affects repeated branding, spacing rhythm, or expected
  project-level customization
- If a CSS file is intended to be public, make sure it is imported by the matching bundle index

## Public Entrypoints

Current CSS exports:

- `@krudi/styles/css`
- `@krudi/styles/css/palette`
- `@krudi/styles/css/variables`
- `@krudi/styles/css/theme`
- `@krudi/styles/css/base`
- `@krudi/styles/css/layout`
- `@krudi/styles/css/html`
- `@krudi/styles/css/components`
- `@krudi/styles/css/forms`
- `@krudi/styles/css/utilities`

Current JS exports:

- `@krudi/styles/js`
- `@krudi/styles/js/modal`
- `@krudi/styles/js/theme-switch`

## Documentation Sources

Keep these surfaces aligned:

- Root README for workspace-level usage
- `packages/styles/README.md` for package entrypoints and customization
- Storybook for visual/component docs
- `docs/COMPONENT_COVERAGE.md` for implementation coverage
- `docs/TOKEN_GUIDELINES.md` for token decisions
