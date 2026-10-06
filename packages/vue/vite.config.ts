import vue from '@vitejs/plugin-vue';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: './tsconfig.json',
            entryRoot: 'src',
            include: ['src'],
            processor: 'vue',
            beforeWriteFile: (filePath, content) => ({
                filePath,
                content: content.replaceAll(/(from '\.{1,2}\/[^']+\.vue)'/g, "$1.js'"),
            }),
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['vue'],
        },
    },
});
