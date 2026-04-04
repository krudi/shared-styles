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

function sanitizeName(s) {
    if (!s) {
        return '';
    }
    // remove quotes
    s = s.replace(/^['"`]|['"`]$/g, '');
    // split on non-alphanumeric
    const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) {
        return 'Variant';
    }
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

const files = walk(root);
console.log('Found', files.length, 'story files.');

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    const regex = /export const\s+([^\s=]+)\s*=\s*{[\s\S]*?};/g;
    const existingNames = new Set();
    let match;
    while ((match = regex.exec(content)) !== null) {
        existingNames.add(match[1]);
    }

    // Find blocks again to sanitize
    regex.lastIndex = 0;
    const replacements = [];
    while ((match = regex.exec(content)) !== null) {
        const fullMatch = match[0];
        const oldName = match[1];
        if (/^[A-Za-z0-9_]+$/.test(oldName)) {
            continue;
        } // valid

        // attempt to extract variant value
        const variantMatch = fullMatch.match(/variant:\s*['"`]([^'"`]+)['"`]/);
        const argVariant = variantMatch ? variantMatch[1] : null;
        let newName = sanitizeName(argVariant || oldName);
        // ensure unique
        let idx = 1;
        while (existingNames.has(newName)) {
            newName = sanitizeName(argVariant || oldName) + idx;
            idx++;
        }
        existingNames.add(newName);

        const newBlock = fullMatch
            .replace(new RegExp('export const\\s+' + oldName), 'export const ' + newName)
            .replace(/docs:\s*{\s*description:\s*{\s*story:\s*(['"`])[\s\S]*?\1\s*}\s*}/, (m) => {
                const storyText = `${newName} variant — shows the ${argVariant || newName} appearance.`;
                return `docs: { description: { story: '${storyText}' } }`;
            });

        replacements.push({ old: fullMatch, neu: newBlock });
    }

    for (const r of replacements) {
        content = content.replace(r.old, r.neu);
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Sanitized', path.relative(process.cwd(), file));
    }
});

console.log('Sanitization complete.');
