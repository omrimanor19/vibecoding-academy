# Codex Worktree Helper Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a repo-local helper that creates a Codex-specific git worktree and launches `codex` inside it.

**Architecture:** Implement a small Bash script under `scripts/` that wraps `git worktree add`, optional `npm install`, and a final `codex` launch. Keep the script self-documenting with usage comments and add a shell test that verifies the non-interactive path with launch skipped.

**Tech Stack:** Bash, git, npm

---

### Task 1: Add the failing regression test

**Files:**
- Create: `tests/codex-start-worktree.test.sh`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run it to verify it fails because the script does not exist yet**
- [ ] **Step 3: Implement the script**
- [ ] **Step 4: Re-run the test and syntax checks**

### Task 2: Add the helper script

**Files:**
- Create: `scripts/codex-start-worktree`

- [ ] **Step 1: Add usage comments and a Codex-specific note**
- [ ] **Step 2: Implement argument validation and repo-root checks**
- [ ] **Step 3: Implement worktree and branch creation**
- [ ] **Step 4: Add dependency setup and Codex launch**
- [ ] **Step 5: Support a non-interactive skip-launch mode for verification**
