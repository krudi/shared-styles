# shared-styles monorepo

Workspace for reusable styling packages. Currently ships `@krudi/styles` under `packages/styles` (CSS variables, base styles, components, utilities).

## Developing

```sh
npm install
npm run build
```

Package entry: `packages/styles` (see its README for usage).

### Storybook (HTML)

Storybook lives in `apps/storybook` and imports `packages/styles`:

```sh
npm run storybook
# build static storybook:
npm run storybook:build
```

Stories live in `apps/storybook/stories/` and the global preview imports `packages/styles/src/styles.css`.
