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

    // Replace docs.description.component: '...' (possibly multiline) with template literal using backticks
    content = content.replace(
        /(docs:\s*{\s*description:\s*{\s*component:\s*)(['"`])([\s\S]*?)\2/,
        (m, p1, quote, body) => {
            // Escape backticks in body
            const safe = body.replace(/`/g, '\\`');
            // Trim trailing spaces/newlines
            const trimmed = safe.replace(/^\s+|\s+$/g, '');
            return p1 + '`' + trimmed + '`';
        }
    );

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', path.relative(process.cwd(), file));
    }
});

console.log('Fix complete.');
