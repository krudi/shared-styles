import React from 'react';
import designTokens from 'virtual:krudi-storybook-design-tokens';

import type { DesignTokenGroup, DesignTokenRow, StoryMetaLike } from './types';

export type { DesignTokenGroup, DesignTokenRow, DesignTokensAddonOptions, DesignTokensData } from './types';

type DesignTokensTableProps = {
  rows?: readonly DesignTokenRow[];
  title?: string;
};

type DesignTokenDocsProps = {
  of?: StoryMetaLike;
  title?: string;
};

function normalizeGroupIds(value?: string | string[]): string[] {
  if (!value) {
    return [];
  }

  return (Array.isArray(value) ? value : [value]).flatMap((entry) =>
    entry
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean),
  );
}

function getGroupsFromStoryMeta(of?: StoryMetaLike): string[] {
  const parameter = of?.default?.parameters?.designTokens;

  if (typeof parameter === 'string' || Array.isArray(parameter)) {
    return normalizeGroupIds(parameter);
  }

  return normalizeGroupIds(of?.default?.title);
}

export function DesignTokensTable({ rows, title = 'Design Tokens' }: DesignTokensTableProps) {
  if (!rows?.length) {
    return null;
  }

  return (
    <section style={{ width: '100%' }}>
      <h2>{title}</h2>
      <table style={{ width: '100%', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th align="left">Token</th>
            <th align="left">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <code>{row.name}</code>
              </td>
              <td>
                <code>{row.value}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function DesignTokenDocs({ of, title = 'Design Tokens' }: DesignTokenDocsProps) {
  const groupIds = getGroupsFromStoryMeta(of);

  const matchingGroups = groupIds
    .map((groupId) => designTokens[groupId])
    .filter((entry): entry is DesignTokenGroup => Boolean(entry && entry.rows.length));

  if (!matchingGroups.length) {
    return null;
  }

  if (matchingGroups.length === 1) {
    return <DesignTokensTable rows={matchingGroups[0]!.rows} title={title} />;
  }

  return (
    <>
      {matchingGroups.map((entry) => (
        <DesignTokensTable key={entry.id} rows={entry.rows} title={entry.id} />
      ))}
    </>
  );
}
