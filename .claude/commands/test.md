Run the full quality check for shared-styles:

1. `npm run build` — build all packages (Turbo)
2. `npm run lint` — lint all packages
3. `npm run typecheck` — typecheck all packages
4. `npm run test:storybook` — run Storybook visual tests
5. Report all failures with package name and file:line references
6. If all pass, confirm with a one-line summary

Note: visual changes should also be reviewed manually in Storybook (`npm run dev`) before publishing.
