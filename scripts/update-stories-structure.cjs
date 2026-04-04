#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = [];
    for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            files.push(...walk(full));
        } else if (/\.stories\.(ts|tsx|js|jsx)$/.test(name)) {
            files.push(full);
        }
    }
    return files;
}

const root = path.join(process.cwd(), 'apps', 'storybook', 'src');
if (!fs.existsSync(root)) {
    console.error('storybook src not found at', root);
    process.exit(1);
}

const files = walk(root);
console.log('Found', files.length, 'story files.');

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // Remove Playground exports
    content = content.replace(/export const Playground[\s\S]*?};\s*/g, '');

    // Ensure Variants story exists
    if (!/export const Variants/.test(content)) {
        const variantsBlock = `\nexport const Variants = {\n    parameters: {\n        controls: { disable: true },\n        docs: { description: { story: 'Variant overview — shows available visual or behavioural variants for this component.' } },\n    },\n};\n`;
        content = content + variantsBlock;
    }

    // Append Design tokens note to component description (docs.description.component)
    content = content.replace(
        /(docs:\s*{\s*description:\s*{\s*component:\s*)(['"`])([\s\S]*?)\2/,
        (m, p1, quote, body) => {
            const note =
                '\n\nDesign tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.';
            // Avoid duplicating note
            if (body.includes('Design tokens:')) {
                return m;
            }
            const newBody = body.trim() + note;
            const escaped = newBody.replace(/'/g, "\\'");
            return p1 + quote + escaped + quote;
        }
    );

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Patched', path.relative(process.cwd(), file));
    }
});

console.log('Structure update done.');
