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

function toExportName(option) {
    return option
        .replace(/^['"`]|['"`]$/g, '')
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^./, (c) => c.toUpperCase());
}

const files = walk(root);
console.log('Found', files.length, 'story files.');

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // Remove the generic Variants export block we added earlier
    content = content.replace(/export const Variants\s*=\s*{[\s\S]*?};\s*/g, '');

    // Find existing export names to avoid duplicates
    const existingExports = new Set();
    const exportMatches = content.matchAll(/export const (\w+)/g);
    for (const m of exportMatches) {
        existingExports.add(m[1]);
    }

    // Find argTypes.variant options
    const variantMatch = content.match(/variant:\s*{[\s\S]*?options:\s*\[([\s\S]*?)\]/);
    if (variantMatch) {
        const optionsRaw = variantMatch[1];
        // If optionsRaw contains non-literal code (objects, map, arrow functions), skip this file
        if (/[\{\(=>]|\bmap\b|className|usage|label\s*:/i.test(optionsRaw)) {
            // skip creating per-option stories for this file
        } else {
            // split by commas that are not inside quotes (simple split)
            const opts = optionsRaw
                .split(/,(?=(?:[^'`"\\]*['`"]|[^'`"\\]*$))/)
                .map((s) => s.trim())
                .filter(Boolean);
            // For each option, if not already an export, add a named story
            const storiesToAdd = [];
            for (const opt of opts) {
                // clean option
                const clean = opt.replace(/['"`]/g, '');
                const name = toExportName(clean);
                if (existingExports.has(name)) {
                    continue;
                }
                // create a story block with args
                const storyText = `\nexport const ${name} = {\n    args: { variant: '${clean}' },\n    parameters: {\n        controls: { disable: true },\n        docs: { description: { story: '${name} variant — shows the ${clean} appearance.' } },\n    },\n};\n`;
                storiesToAdd.push(storyText);
                existingExports.add(name);
            }

            if (storiesToAdd.length) {
                content = content + '\n' + storiesToAdd.join('\n');
            }
        }
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', path.relative(process.cwd(), file));
    }
});

console.log('Split variants complete.');
