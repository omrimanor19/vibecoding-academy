# Codex Worktree Finish Helper Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a repo-local helper that safely cleans up a merged Codex worktree branch locally and remotely.

**Architecture:** Implement a small Bash script under `scripts/` that validates merge state against `main`, updates `main` from `origin/main`, removes `.worktrees/<name>`, deletes the local branch, and best-effort deletes the remote branch. Keep the script self-documenting and add a shell test covering the merged cleanup path.

**Tech Stack:** Bash, git

---

### Task 1: Add the failing regression test

**Files:**
- Create: `tests/codex-finish-worktree.test.sh`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run it to verify it fails because the script does not exist yet**
- [ ] **Step 3: Implement the script**
- [ ] **Step 4: Re-run the test and syntax checks**

### Task 2: Add the helper script

**Files:**
- Create: `scripts/codex-finish-worktree`

- [ ] **Step 1: Add usage comments and workflow guidance**
- [ ] **Step 2: Implement merge and worktree safety checks**
- [ ] **Step 3: Implement local cleanup**
- [ ] **Step 4: Implement best-effort remote branch deletion**
