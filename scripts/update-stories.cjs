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

const tagMap = {
    Button: 'button',
    Modal: 'dialog',
    Alert: 'div role="alert"',
    Input: 'input',
    Checkbox: 'input type="checkbox"',
    Select: 'select',
    Img: 'img',
    Svg: 'svg',
    Card: 'section',
    Tabs: 'nav',
    List: 'ul',
};

const files = walk(root);
console.log('Found', files.length, 'story files.');

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    let comp = titleMatch
        ? titleMatch[1].split('/').pop().trim()
        : path.basename(file).replace(/\.stories\.[^.]+$/, '');

    const tagExample = tagMap[comp] || '';

    const componentDescription = `${comp} — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.${tagExample ? ' Example markup: <code>&lt;' + tagExample + '&gt;…&lt;/' + tagExample.split(' ')[0] + '&gt;</code>.' : ''}`;
    const escapedCompDesc = componentDescription.replace(/'/g, "\\'");

    // Replace component description inside the first docs.description.component occurrence
    content = content.replace(
        /(docs:\s*{\s*description:\s*{\s*component:\s*)(['"`])[\s\S]*?\2/,
        `$1'${escapedCompDesc}'`
    );

    // Replace story-level descriptions where present
    content = content.replace(
        /export const (\w+)[\s\S]*?docs:\s*{\s*description:\s*{\s*story:\s*(['"`])[\s\S]*?\2\s*}\s*}\s*,?\s*}/g,
        (match, storyName) => {
            let storyText = '';
            const lower = storyName.toLowerCase();
            if (lower === 'default') {
                storyText = `Default ${comp} example — demonstrates the canonical appearance, focus and disabled handling.`;
            } else if (lower === 'playground' || lower === 'play') {
                storyText = `Interactive playground — use controls to preview different ${comp} states, content and variants.`;
            } else if (lower === 'variants') {
                storyText = `Variant overview — shows available visual or behavioural variants for ${comp}.`;
            } else if (lower.includes('destructive') || lower.includes('danger')) {
                storyText = `${comp} destructive variant — use for critical or error states; supply actionable guidance where possible.`;
            } else {
                storyText = `${storyName} — example showing ${comp} in a specific configuration.`;
            }
            const esc = storyText.replace(/'/g, "\\'");
            return match.replace(/story:\s*(['"`])[\s\S]*?\1/, `story: '${esc}'`);
        }
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', path.relative(process.cwd(), file));
});

console.log('Done.');
