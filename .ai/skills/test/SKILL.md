---
name: test
description: Run the project's full verification suite (lint, typecheck, build, and tests where present). Use when asked to verify, check, or test the project before a commit or PR.
---

# Test

AGENTS.md is the single source for which checks to run:

1. Pick the rows of its verification table that match the changed workspaces (`git status`, `git diff HEAD`).
2. For cross-cutting changes or a final handoff, run its cross-cutting row in full.

Report failures with package name, file:line references and the exact command; if all pass, confirm with a one-line
summary. Visual changes also need a manual review in Storybook before publishing.
