import base from '@krudi/eslint-config/base';
import prettier from '@krudi/eslint-config/prettier';
import storybook from 'eslint-plugin-storybook';

export default [
    ...base,
    ...prettier,
    {
        ignores: ['!.storybook'],
    },
    ...storybook.configs['flat/recommended'],
];
