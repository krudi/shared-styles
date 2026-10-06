---
name: retrospective
description: Capture project lessons after corrections, surprises, or substantial shared-styles sessions. Updates AGENTS.md (Lessons or Conventions) or the relevant README.
---

# Session Retrospective

## When to use

- User corrects your work (wrong path, wrong assumption, wrong approach)
- You hit a non-obvious tool limitation or project constraint
- User says "remember this", "add to lessons", or "document that"
- End of a substantial session with reusable project knowledge

## Steps

1. Identify what would have prevented the issue
2. Read `AGENTS.md`
3. Put the lesson where it belongs:
   - Gotchas and traps (breaking changes, browser quirks, Storybook quirks) → `AGENTS.md` `## Lessons` (add the
     section if it does not exist yet)
   - Token, component or workflow conventions → `AGENTS.md` `## Conventions`
   - Package usage and operational facts → `README.md` or `packages/<name>/README.md`
4. Update existing entries instead of duplicating; remove stale or wrong ones
5. Keep it as current fact/invariant, not a narrated history of the session
6. Do not create a new documentation file

## What not to capture

- Trivial typo fixes
- One-off task details
- Information already obvious from the current code or the error message
