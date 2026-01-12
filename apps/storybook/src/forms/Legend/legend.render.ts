import type { LegendArgs } from './legend.types';

export const renderLegend = ({ text }: LegendArgs): string => `
    <fieldset class="fieldset">
        <legend class="legend">${text}</legend>
        <span class="form-text">Legend labels the group of fields inside a fieldset.</span>
    </fieldset>
`;

export const renderLegendPlayground = (args: LegendArgs): string => renderLegend(args);
