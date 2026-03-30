# @krudi/storybook

Storybook workspace for `@krudi/styles` with HTML stories. Used for visual checks, regression coverage, and documenting
components, forms, utilities, and token guidance.

This workspace should stay in sync with the package surface in `packages/styles`. New public components or utilities
should generally ship with a Storybook story in the same change.

## Scripts

| Command                           | Description                   |
| --------------------------------- | ----------------------------- |
| `npm run dev`                     | Start Storybook locally       |
| `npm run build`                   | Build static Storybook docs   |
| `npm run preview`                 | Serve the built Storybook     |
| `npm run test:storybook`          | Run Vitest story tests        |
| `npm run test:storybook:coverage` | Run story tests with coverage |
| `npm run lint:eslint`             | Lint JS/TS                    |
| `npm run lint:prettier`           | Check formatting              |
| `npm run typecheck`               | TypeScript type checks        |

## Coverage

- Theme docs: token and color stories
- Layout docs: grid and container stories
- HTML docs: image and SVG defaults
- Forms docs: controls, utilities, and validation examples
- Component docs: all bundled components should have a story

The explicit coverage tracker lives in [../../docs/COMPONENT_COVERAGE.md](../../docs/COMPONENT_COVERAGE.md).
