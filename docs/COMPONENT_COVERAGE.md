# Component Coverage

## Components

| CSS file                | Bundled in `components/index.css` | Storybook story | Package README mention |
| ----------------------- | --------------------------------- | --------------- | ---------------------- |
| `_accordion.css`        | Yes                               | Yes             | Yes                    |
| `_alert.css`            | Yes                               | Yes             | Yes                    |
| `_badge.css`            | Yes                               | Yes             | Yes                    |
| `_block-navigation.css` | Yes                               | Yes             | Yes                    |
| `_blockquote.css`       | Yes                               | Yes             | Yes                    |
| `_button-group.css`     | Yes                               | Yes             | Yes                    |
| `_button.css`           | Yes                               | Yes             | Yes                    |
| `_card.css`             | Yes                               | Yes             | Yes                    |
| `_dropdown.css`         | Yes                               | Yes             | Yes                    |
| `_horizontal-line.css`  | Yes                               | Yes             | Yes                    |
| `_list.css`             | Yes                               | Yes             | Yes                    |
| `_modal.css`            | Yes                               | Yes             | Yes                    |
| `_pagination.css`       | Yes                               | Yes             | Yes                    |
| `_pricing-table.css`    | Yes                               | Yes             | Yes                    |
| `_tabs.css`             | Yes                               | Yes             | Yes                    |
| `_theme-switch.css`     | Yes                               | Yes             | Yes                    |

## Forms

| CSS file           | Bundled in `forms/index.css` | Storybook story                                 |
| ------------------ | ---------------------------- | ----------------------------------------------- |
| `_block.css`       | Yes                          | Covered via `Forms/Utilities`                   |
| `_checkbox.css`    | Yes                          | Yes                                             |
| `_fieldset.css`    | Yes                          | Yes                                             |
| `_input-group.css` | Yes                          | Yes                                             |
| `_input.css`       | Yes                          | Yes                                             |
| `_label.css`       | Yes                          | Yes                                             |
| `_legend.css`      | Yes                          | Yes                                             |
| `_navigation.css`  | Yes                          | Yes                                             |
| `_radio.css`       | Yes                          | Yes                                             |
| `_required.css`    | Yes                          | Covered via `Forms/Utilities` and `Forms/Label` |
| `_select.css`      | Yes                          | Yes                                             |
| `_text.css`        | Yes                          | Yes                                             |

## Utilities

| CSS file                 | Bundled in `utilities/index.css` | Storybook story                    |
| ------------------------ | -------------------------------- | ---------------------------------- |
| `_background-colors.css` | Yes                              | Yes                                |
| `_border-radius.css`     | Yes                              | Yes                                |
| `_color.css`             | Yes                              | Covered via `Utilities/TextColors` |
| `_display.css`           | Yes                              | Yes                                |
| `_font-size.css`         | Yes                              | Yes                                |
| `_font-weight.css`       | Yes                              | Yes                                |
| `_gap.css`               | Yes                              | Yes                                |
| `_line-clamp.css`        | Yes                              | Yes                                |
| `_margin.css`            | Yes                              | Yes                                |
| `_padding.css`           | Yes                              | Yes                                |
| `_text-align.css`        | Yes                              | Yes                                |
| `_text-decoration.css`   | Yes                              | Yes                                |
| `_visibility.css`        | Yes                              | Yes                                |

## Maintenance Checklist

When adding a new public style surface:

1. Add the CSS file to the matching bundle index.
2. Add or update Storybook coverage.
3. Add new public tokens only when they are intended customization hooks.
4. Update `packages/styles/README.md` if the package surface changed.
5. Update this coverage document so drift is visible in review.
