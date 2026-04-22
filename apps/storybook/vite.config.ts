import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { UserConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    plugins: [],
    server: {
        fs: {
            allow: [__dirname, '../..'],
        },
    },
} satisfies UserConfig;
