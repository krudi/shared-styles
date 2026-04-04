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

const exportRegex = /export const\s+([^\s=]+)\s*=\s*{[\s\S]*?};\s*\n?/g;

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    const toRemove = [];
    let m;
    while ((m = exportRegex.exec(content)) !== null) {
        const full = m[0];
        // find variant value
        const varMatch = full.match(/variant:\s*['"`]([^'"`]+)['"`]/);
        if (!varMatch) {
            continue;
        }
        const val = varMatch[1];
        // heuristic: if value contains '{' or '}' or ':' or 'usage' or 'className' or is very long, mark bad
        if (/[{}:]/.test(val) || /usage|className|label\s*[:]/i.test(val) || val.length > 30) {
            toRemove.push(full);
        }
    }

    if (toRemove.length) {
        toRemove.forEach((block) => {
            content = content.replace(block, '');
        });
        // cleanup multiple blank lines
        content = content.replace(/\n{3,}/g, '\n\n');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Cleaned', path.relative(process.cwd(), file), 'removed', toRemove.length, 'blocks');
    }
});

console.log('Cleanup done.');
