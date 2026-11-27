# shared-styles

Shared CSS foundations, tokens, components and icons, with React and Vue wrappers, for reuse across personal projects.

## Quick start

Requires Node.js 26.13.0 (`.nvmrc`).

1. Clone this repository and navigate into the project directory
2. Install the dependencies: `npm install`
3. Run the development server: `npm run dev`

## Commands for linting/fixing files

- `npm run verify:static`: typecheck, lint and Knip
- `npm run lint`: runs the shared Oxlint and Oxfmt checks
- `npm run lint:ox`: lints JavaScript and TypeScript
- `npm run lint:ox:fix`: fixes supported Oxlint findings
- `npm run format:ox`: formats supported repository files
- `npm run format:ox:check`: checks formatting without writing files
- `npm run typecheck`: type-checks all workspaces
- `npm run knip`: reports unused files, exports and dependencies
- `npm run test:storybook`: runs the Storybook-based tests
