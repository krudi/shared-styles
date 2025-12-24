import storybook from '@krudi/eslint-config/storybook';

import base from '@krudi/eslint-config/base';
import prettier from '@krudi/eslint-config/prettier';
import turbo from '@krudi/eslint-config/turbo';

import storybook from '@krudi/eslint-config/storybook';
export default [...base, ...prettier, ...turbo, ...storybook];
