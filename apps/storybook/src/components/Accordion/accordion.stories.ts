import type { Meta } from '@storybook/html-vite';

import { renderAccordion } from './accordion.render';
import type { AccordionArgs } from './accordion.types';

const meta: Meta<AccordionArgs> = {
    title: 'Components/Accordion',
    tags: ['autodocs'],
    render: renderAccordion,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Accordion built on native details with tokenised spacing, borders, and typography. Icons rotate on open via the summary modifier.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './accordion.playground';
