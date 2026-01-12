import type { AccordionArgs } from './accordion.types';

export const renderAccordion = (): string => `
    <div class="accordion">
        <details class="accordion-details" open>
            <summary class="accordion-summary">
                <span class="accordion-summary-title">What is included?</span>
                <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
            </summary>
            <div class="accordion-content">
                <p class="accordion-content-text">Token-based spacing, borders, and typography. Extend with your own content inside the content block.</p>
            </div>
        </details>
        <details class="accordion-details">
            <summary class="accordion-summary">
                <span class="accordion-summary-title">Is it accessible?</span>
                <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
            </summary>
            <div class="accordion-content">
                <p class="accordion-content-text">Uses native <code>&lt;details&gt;</code> for built-in keyboard support. Summary icon rotates on open.</p>
            </div>
        </details>
        <details class="accordion-details">
            <summary class="accordion-summary">
                <span class="accordion-summary-title">How do I customise?</span>
                <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
            </summary>
            <div class="accordion-content">
                <p class="accordion-content-text">Override tokens like <code>--accordion-summary-padding-block</code> in your layer to tweak sizing without increasing specificity.</p>
            </div>
        </details>
    </div>
`;

export const renderAccordionPlayground = ({ title, content, open }: AccordionArgs): string => `
    <div class="accordion">
        <details class="accordion-details" ${open ? 'open' : ''}>
            <summary class="accordion-summary">
                <span class="accordion-summary-title">${title}</span>
                <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
            </summary>
            <div class="accordion-content">
                <p class="accordion-content-text">${content}</p>
            </div>
        </details>
    </div>
`;
