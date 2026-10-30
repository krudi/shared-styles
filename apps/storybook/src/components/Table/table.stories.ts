import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TableArgs } from './table.types';

const rows = [
    ['Resident parking permit', '12 months', '€ 30.00'],
    ['Visitor parking card', '30 days', '€ 5.00'],
    ['Business parking permit', '12 months', '€ 120.00'],
    ['Replacement card', 'once', '€ 10.00'],
];

const meta = {
    title: 'Components/Table',
    render: ({ caption, striped, bordered, footer }: TableArgs): string => `
        <div class="table-responsive">
            <table class="table${striped ? ' table-striped' : ''}${bordered ? ' table-bordered' : ''}">
                ${caption ? `<caption>${caption}</caption>` : ''}
                <thead>
                    <tr>
                        <th scope="col">Permit</th>
                        <th scope="col">Validity</th>
                        <th scope="col">Fee</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows
                        .map(
                            ([permit, validity, fee]) => `
                                <tr>
                                    <th scope="row">${permit}</th>
                                    <td>${validity}</td>
                                    <td>${fee}</td>
                                </tr>
                            `
                        )
                        .join('')}
                </tbody>
                ${
                    footer
                        ? `
                            <tfoot>
                                <tr>
                                    <td colspan="3">Fees include VAT. Last updated 1 January 2026.</td>
                                </tr>
                            </tfoot>
                        `
                        : ''
                }
            </table>
        </div>
    `,
    args: {
        caption: 'Parking permit fees',
        striped: true,
        bordered: false,
        footer: true,
    },
    argTypes: {
        caption: { control: 'text' },
        striped: { control: 'boolean' },
        bordered: { control: 'boolean' },
        footer: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Table — tabular data with a caption, column headers and optional row headers. Give every table a \`caption\`, use \`th scope="col"\` and \`th scope="row"\` so screen readers can announce the headers for each cell, and wrap the table in \`table-responsive\` so narrow screens scroll horizontally instead of breaking the layout. Stripes and borders are purely visual aids.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<TableArgs>;

export default meta;

type Story = StoryObj<TableArgs>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Striped rows with a caption and footer note.',
            },
        },
    },
};

export const Bordered: Story = {
    args: { striped: false, bordered: true, footer: false },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Full cell borders for dense data.',
            },
        },
    },
};

export const Plain: Story = {
    args: { striped: false, bordered: false, footer: false, caption: '' },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Row dividers only.',
            },
        },
    },
};
