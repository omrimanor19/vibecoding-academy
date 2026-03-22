#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_PATH="$ROOT_DIR/scripts/codex-finish-worktree"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

ORIGIN_REPO="$TMP_DIR/origin.git"
git init --bare "$ORIGIN_REPO" >/dev/null

TEST_REPO="$TMP_DIR/repo"
git clone "$ORIGIN_REPO" "$TEST_REPO" >/dev/null 2>&1
cd "$TEST_REPO"

git config user.name "Test User"
git config user.email "test@example.com"
printf '.worktrees/\n' > .gitignore
printf 'base\n' > README.md
git add .gitignore README.md
git commit -m "init" >/dev/null
git push -u origin main >/dev/null 2>&1 || git branch -M main && git push -u origin main >/dev/null

git worktree add .worktrees/demo -b demo >/dev/null
printf 'feature\n' >> .worktrees/demo/README.md
git -C .worktrees/demo add README.md
git -C .worktrees/demo commit -m "feature" >/dev/null
git -C .worktrees/demo push -u origin demo >/dev/null

git checkout main >/dev/null
git merge --no-ff demo -m "merge demo" >/dev/null
git push origin main >/dev/null

OUTPUT="$(CODEX_FINISH_WORKTREE_SKIP_PULL=1 "$SCRIPT_PATH" demo 2>&1)"

test ! -d .worktrees/demo
! git show-ref --verify --quiet refs/heads/demo
! git ls-remote --exit-code --heads origin demo >/dev/null 2>&1
printf '%s' "$OUTPUT" | grep -q "Removed worktree"
printf '%s' "$OUTPUT" | grep -q "Deleted local branch"
