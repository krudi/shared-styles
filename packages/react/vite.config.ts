import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), dts({ tsconfigPath: './tsconfig.json', entryRoot: 'src', include: ['src'] })],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'react-dom'],
        },
    },
});
