#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_PATH="$ROOT_DIR/scripts/codex-start-worktree"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

TEST_REPO="$TMP_DIR/repo"
mkdir -p "$TEST_REPO"
cd "$TEST_REPO"

git init >/dev/null
git config user.name "Test User"
git config user.email "test@example.com"
printf '.worktrees/\n' > .gitignore
printf '{\n  "name": "tmp",\n  "private": true\n}\n' > package.json
git add .gitignore package.json
git commit -m "init" >/dev/null

OUTPUT="$(CODEX_START_WORKTREE_SKIP_CODEX=1 "$SCRIPT_PATH" demo 2>&1)"

test -d .worktrees/demo
test "$(git branch --show-current)" = "main"
test "$(git -C .worktrees/demo branch --show-current)" = "demo"
printf '%s' "$OUTPUT" | grep -q "Worktree ready at"
printf '%s' "$OUTPUT" | grep -q "Skipping codex launch"
