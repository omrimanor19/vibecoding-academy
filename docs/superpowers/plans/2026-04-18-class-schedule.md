# Class Schedule Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the full `Class Schedule` challenge detail content and make it available on the site.

**Architecture:** This feature is content-driven. The existing app reads challenge metadata and detail-page content from `src/data/challenges.ts`, then renders it through reusable challenge-detail components. Implementation should follow that pattern exactly: add one complete `detail` object for `class-schedule`, keep the content aligned with the approved spec, and verify the existing UI renders it without component changes.

**Tech Stack:** React 18, TypeScript, Vite, static challenge data in `src/data/challenges.ts`

---

## File Structure

- Modify: `src/data/challenges.ts`
  - Add full `detail` content for `class-schedule`
  - Set `available: true`
  - Keep structure consistent with the other finished Level 2 challenges
- Reference: `docs/superpowers/specs/2026-04-18-class-schedule-design.md`
  - Use as the source of truth for scope, teaching thesis, and mobile-first framing
- Verify with: `package.json`
  - Use existing `build`, `lint`, and `typecheck` scripts to confirm the content compiles cleanly

### Task 1: Add Class Schedule Challenge Content

**Files:**
- Modify: `src/data/challenges.ts`
- Reference: `docs/superpowers/specs/2026-04-18-class-schedule-design.md`

- [ ] **Step 1: Review nearby Level 2 challenge patterns**

Read the `weather-dashboard`, `study-buddy`, and `split-the-bill` entries in `src/data/challenges.ts` to match:
- summary and outcome length
- setup intro and Lovable setup reuse
- step count and title style
- prompt tip voice
- tips, checklist, and closing structure

- [ ] **Step 2: Write the `Class Schedule` detail content**

Add a full `detail` object with:
- `summary`
- `outcome`
- `setup` using `lovableSetupSteps` plus one `ahaMoment`
- five `steps`
- `tips`
- `checklist`
- `closingTitle`
- `closingMessage`

Content requirements:
- core idea remains `Structured Data`
- core flow is typed or pasted natural-language schedule input
- mobile responsiveness is described as a product requirement, not optional polish
- no file upload, screenshot parsing, OCR, or printing in the core challenge
- prompt tips are in first person
- UI-only actions do not get prompt tips

- [ ] **Step 3: Mark the challenge as available**

Change:

```ts
available: false
```

to:

```ts
available: true
```

Do not add `featured`.

- [ ] **Step 4: Self-review the content against the recipe**

Check the finished challenge against `challenge-recipe.md`:
- `coreIdea` is distinct from the project title
- `coreIdeaBlurb` is plain English
- each step gives context before the prompt
- technical terms are defined inline or with term chips
- the last checklist item is the shipped milestone
- the tone sounds like a knowledgeable older sibling, not product documentation

### Task 2: Verify the Site Still Builds

**Files:**
- Verify: `src/data/challenges.ts`
- Run: `package.json` scripts

- [ ] **Step 1: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected:
- command exits successfully
- no TypeScript errors from the new challenge content

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected:
- Vite build completes successfully
- no runtime-facing compile issues from the new data shape

- [ ] **Step 3: Run lint if typecheck and build pass**

Run:

```bash
npm run lint
```

Expected:
- no new lint errors introduced by the content change

- [ ] **Step 4: Review final git diff**

Run:

```bash
git diff -- src/data/challenges.ts
```

Expected:
- diff only contains the `Class Schedule` challenge implementation
- no accidental edits to other challenges

- [ ] **Step 5: Commit if the user wants a commit**

Suggested command:

```bash
git add src/data/challenges.ts
git commit -m "Add Class Schedule challenge"
```

Only do this if the user asks for a commit.
