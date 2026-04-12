import fs from 'node:fs';
import path from 'node:path';

import { mergeConfig, type PluginOption } from 'vite';

import type { DesignTokenGroup, DesignTokensAddonOptions, DesignTokensData } from './types';

const PACKAGE_NAME = '@krudi/storybook-design-tokens';
const VIRTUAL_MODULE_ID = 'virtual:krudi-storybook-design-tokens';
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;

type PresetConfig = {
  configDir?: string;
  presetsList?: Array<{
    name?: string;
    options?: DesignTokensAddonOptions;
  }>;
};

function getAddonOptions(options: PresetConfig): DesignTokensAddonOptions {
  const matchedPreset = options.presetsList?.find((preset) => {
    const presetName = preset.name ?? '';

    return presetName.includes(PACKAGE_NAME) || path.basename(presetName).includes('storybook-design-tokens');
  });

  return (
    matchedPreset?.options ?? options.presetsList?.find((preset) => preset.options?.sources?.length)?.options ?? {}
  );
}

function cleanCommentLine(line: string): string {
  return line
    .replace(/^\s*\/?\*+\s?/, '')
    .replace(/\*\/$/, '')
    .trim();
}

function createGroup(id: string, presenter?: string): DesignTokenGroup {
  return {
    id,
    presenter,
    rows: [],
  };
}

function addRowsToGroups(
  groups: DesignTokensData,
  groupIds: string[],
  presenter: string | undefined,
  rows: DesignTokenGroup['rows'],
) {
  for (const groupId of groupIds) {
    const group = groups[groupId] ?? createGroup(groupId, presenter);

    group.presenter = group.presenter ?? presenter;

    for (const row of rows) {
      if (!group.rows.some((existingRow) => existingRow.name === row.name)) {
        group.rows.push(row);
      }
    }

    groups[groupId] = group;
  }
}

function parseAnnotatedCss(source: string): DesignTokensData {
  const groups: DesignTokensData = {};
  const lines = source.split(/\r?\n/);

  let pendingGroupIds: string[] = [];
  let pendingPresenter: string | undefined;
  let inAnnotationBlock = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('/**')) {
      inAnnotationBlock = true;
      pendingGroupIds = [];
      pendingPresenter = undefined;
      continue;
    }

    if (inAnnotationBlock) {
      if (trimmedLine.includes('@tokens')) {
        const value = cleanCommentLine(trimmedLine).replace('@tokens', '').trim();
        pendingGroupIds = value
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean);
      }

      if (trimmedLine.includes('@presenter')) {
        pendingPresenter = cleanCommentLine(trimmedLine).replace('@presenter', '').trim() || undefined;
      }

      if (trimmedLine.endsWith('*/')) {
        inAnnotationBlock = false;
      }

      continue;
    }

    if (!pendingGroupIds.length) {
      continue;
    }

    const tokenMatch = line.match(/^\s*(--krd-[a-z0-9-]+)\s*:\s*([^;]+);/i);

    if (tokenMatch?.[1] && tokenMatch[2]) {
      const name = tokenMatch[1];
      const value = tokenMatch[2];

      addRowsToGroups(groups, pendingGroupIds, pendingPresenter, [
        {
          name,
          value: value.trim(),
        },
      ]);
      continue;
    }

    if (
      trimmedLine.startsWith('/*') ||
      trimmedLine.startsWith('/**') ||
      trimmedLine === '' ||
      trimmedLine === ':root {' ||
      trimmedLine === '}'
    ) {
      continue;
    }

    pendingGroupIds = [];
    pendingPresenter = undefined;
  }

  return groups;
}

function resolveSourceFiles(options: DesignTokensAddonOptions, configDir: string): string[] {
  return (options.sources ?? [])
    .map((entry) => path.resolve(configDir, entry))
    .filter((filePath, index, all) => all.indexOf(filePath) === index)
    .filter((filePath) => fs.existsSync(filePath));
}

function loadDesignTokens(options: DesignTokensAddonOptions, configDir: string): DesignTokensData {
  const files = resolveSourceFiles(options, configDir);
  const groups: DesignTokensData = {};

  for (const filePath of files) {
    const parsed = parseAnnotatedCss(fs.readFileSync(filePath, 'utf8'));

    for (const [groupId, group] of Object.entries(parsed)) {
      addRowsToGroups(groups, [groupId], group.presenter, group.rows);
    }
  }

  return groups;
}

function createVirtualModulePlugin(options: DesignTokensAddonOptions, configDir: string): PluginOption {
  return {
    name: 'krudi-storybook-design-tokens',
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID;
      }

      return null;
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
        return null;
      }

      const data = loadDesignTokens(options, configDir);

      return `export const designTokens = ${JSON.stringify(data, null, 4)};\nexport default designTokens;\n`;
    },
  };
}

export const viteFinal = async (config: unknown, options: PresetConfig) => {
  const addonOptions = getAddonOptions(options);
  const configDir = path.resolve(options.configDir ?? process.cwd());

  return mergeConfig(config as Record<string, unknown>, {
    plugins: [createVirtualModulePlugin(addonOptions, configDir)],
  });
};
