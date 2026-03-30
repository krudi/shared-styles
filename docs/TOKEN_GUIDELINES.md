# Token Guidelines

## When To Add A New Public Token

Add a new public token when a value is expected to vary across projects and it influences one of these:

- Brand expression
- Visual rhythm
- Accessibility states
- Shared component behavior
- Repeated layout decisions

Good examples:

- Component paddings that establish spacing rhythm
- Border radii and shadows that define the design language
- Variant colors or state colors that multiple teams may re-theme
- Minimum sizes that affect usability or responsive behavior

## When Not To Add One

Keep values private when they are one-off implementation details or unlikely to be overridden deliberately.

Avoid promoting:

- Temporary offsets used only to align one decorative detail
- Internal transforms that consumers should not need to think about
- One-off fallback values that do not define system behavior

## Preferred Naming Pattern

Use semantic, scoped names:

- Global: `--body-font-size`, `--grid-spacing`, `--shadow-sm`
- Component: `--tabs-panel-padding`, `--pricing-table-card-price-font-size`

Avoid names tied only to file internals or arbitrary numbers.

## Decision Rule For Old And New Elements

When updating an old element or creating a new one:

1. Reuse existing semantic tokens first.
2. If the component still needs repeated project-level customization, add a scoped component token.
3. If the value is only local implementation detail, keep it private.
4. Document new public tokens in `packages/styles/README.md` when they are part of the customization surface.

## Current Priority Components

These components now expose meaningful customization hooks and should remain consistent with the token policy:

- Cards
- Tabs
- Pricing Table
- Forms
- Buttons
