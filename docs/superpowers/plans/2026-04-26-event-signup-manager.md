# Event Signup Manager Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the full `Event Signup Manager` challenge detail content and make it available on the site.

**Architecture:** This feature is content-driven. The existing app reads challenge metadata and detail-page content from `src/data/challenges.ts`, then renders it through reusable challenge-detail components. Implementation should add one complete `detail` object for `event-signup-manager`, keep it aligned with the approved design spec, and avoid component changes unless the current UI cannot render the content cleanly.

**Tech Stack:** React 18, TypeScript, Vite, static challenge data in `src/data/challenges.ts`

---

## File Structure

- Modify: `src/data/challenges.ts`
  - Add a new `event-signup-manager` Level 3 challenge entry
  - Add full detail page content
  - Set `available: true`
  - Keep the existing advanced challenge cards after the new entry
- Reference: `docs/superpowers/specs/2026-04-26-event-signup-manager-design.md`
  - Use as the source of truth for scope, teaching thesis, and excluded features
- Verify with: `package.json`
  - Use existing `typecheck`, `build`, and `lint` scripts to confirm the content compiles cleanly

### Task 1: Add Event Signup Manager Challenge Content

**Files:**
- Modify: `src/data/challenges.ts`
- Reference: `docs/superpowers/specs/2026-04-26-event-signup-manager-design.md`
- Reference: `challenge-recipe.md`

- [ ] **Step 1: Review nearby patterns**

Read the completed `class-schedule`, `split-the-bill`, and existing advanced placeholder entries in `src/data/challenges.ts` to match:
- summary and outcome length
- setup structure
- step title style
- prompt tip voice
- tips, checklist, and closing structure

- [ ] **Step 2: Insert the new challenge entry**

Add a new entry before `club-manager`:

```ts
{
  id: 'event-signup-manager',
  title: 'Event Signup Manager',
  level: 'advanced',
  levelLabel: 'Serious Build',
  time: 'multi-session',
  description: 'Public RSVP links with an organizer dashboard',
  coreIdea: 'Shared Data',
  coreIdeaBlurb:
    'Learn how one database can power two different views: an organizer dashboard for managing events and a public page where people sign up.',
  available: true,
  detail: { ... }
}
```

- [ ] **Step 3: Write the detail content**

Add a full `detail` object with:
- `summary`
- `outcome`
- `setup` using the shared `lovableSetupSteps` plus extra database context and one `ahaMoment`
- six session-style `steps`
- `tips`
- `checklist`
- `closingTitle`
- `closingMessage`

Content requirements:
- core teaching idea stays `Shared Data`
- recipe includes organizer dashboard, public signup link, persistent database, event-to-signup relationship, close signups, and phone-friendly public page
- core access model uses simple organizer passcode or admin link
- exclude full login, role-based permissions, invites, member dashboards, notifications, payments, and club membership
- mention QR codes, capacity, CSV export, or custom questions only as optional extension ideas, not core steps

- [ ] **Step 4: Self-review the content against the recipe**

Check the finished challenge against `challenge-recipe.md`:
- `coreIdea` is short, clear, and different from the project title
- `coreIdeaBlurb` explains the concept in plain English
- `outcome` describes the concrete finished product
- every step gives context before the prompt
- technical terms are defined inline or with term chips
- prompt tips are written in first person
- tips are practical and specific
- the checklist ends with a shipped milestone
- the tone sounds like a knowledgeable older sibling, not documentation

### Task 2: Verify the Site Still Builds

**Files:**
- Verify: `src/data/challenges.ts`
- Verify: `docs/superpowers/plans/2026-04-26-event-signup-manager.md`
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

- [ ] **Step 3: Run lint**

Run:

```bash
npm run lint
```

Expected:
- no lint errors introduced by the content change

- [ ] **Step 4: Check prose formatting**

Run:

```bash
git diff -- src/data/challenges.ts | rg "^\+.*(\x{2014}|\s--\s|just|simply)"
```

Expected:
- no prose em dashes
- no accidental double hyphen prose
- no new `just` or `simply` wording in the added challenge content

- [ ] **Step 5: Review final git diff**

Run:

```bash
git diff -- src/data/challenges.ts docs/superpowers/plans/2026-04-26-event-signup-manager.md
```

Expected:
- diff contains only the Event Signup Manager challenge implementation and this implementation plan
- no accidental edits to unrelated challenges or components

- [ ] **Step 6: Commit the implementation branch**

Run:

```bash
git add src/data/challenges.ts docs/superpowers/plans/2026-04-26-event-signup-manager.md
git commit -m "Add Event Signup Manager challenge"
```

Expected:
- commit succeeds on branch `event-signup-manager-challenge`
