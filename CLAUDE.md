# CLAUDE.md — Vibe Coding Academy Project Context

## What This Project Is

Racheli and her son Omri (high school sophomore) are building a **challenge-based platform that teaches high schoolers how to vibe code** — i.e., how to use AI tools to build real software (websites, apps, games) without traditional coding knowledge.

This is a **school project** (broad prompt: teach/learn/make something) with potential to grow into a **college application project** if Omri chooses to expand it.

## Key People

- **Omri** — the student, primary builder, and face of the project. Likes building things, combinatorics/statistics, tech, teaching/coaching other kids.
- **Racheli** (racheli.manor@gmail.com) — Omri's mom, co-strategist, helping with ideation and technical decisions.

## Core Concept

The platform combines two ideas:
1. **Challenge-based progression** — kids pick a project, get a brief, follow a guided prompting path, and walk away with something real they built.
2. **Prompting cookbook/recipes** — each challenge embeds reusable prompting patterns taught in context (not in the abstract).

### Challenge Structure (every challenge follows this format)
1. **The Brief** -- what you're building, who it's for, what it should do
2. **The Recipe** -- step-by-step prompting guide with actual prompt text and explanations
3. **The Stretch** -- optional extensions for kids who finish early
4. **Freestyle** -- optional open-ended step where kids add their own ideas (not from the stretch list). This is where they go from following a recipe to actually vibe coding on their own.
5. **Show & Tell** -- shareable link + short reflection on what they built, what they added, and what surprised them

### Challenge Levels
- **Level 1 (Quick Wins, 15-30 min):** My Landing Page, Would You Rather, Quiz Machine, Countdown Timer
- **Level 2 (Real Projects, 1-2 hrs):** Weather Dashboard, Study Buddy, Split the Bill, Class Schedule Organizer
- **Level 3 (Serious Builds, multi-session):** Club Manager, Debate Prep Tool, Peer Tutoring Marketplace

## Tech Stack Decisions

| What | Tool | Why |
|---|---|---|
| Kids use (all levels) | **Lovable** | Free tier, browser-based, clean React/TypeScript code, GitHub export, real code ownership |
| Platform built with | **Claude Code / Codex** | Full control, no token limits, works with MCPs and skills |
| Code hosting | **GitHub** | Lovable integrates with GitHub for export |
| Site hosting | **Vercel** (free tier) | Auto-deploys from GitHub, free, zero config for React projects |
| Video content | None (for now) | Written recipes only -- faster to produce, easier to iterate |

### Why these tools?
- **Cost for students is zero** -- Lovable's free tier (5 credits/day, 30/month) is enough for structured challenges designed around 3-5 prompts
- **Lovable over Bolt.new** -- we initially tried Bolt but its "1M tokens" ran out faster than expected, it didn't auto-push to GitHub, and free-tier limitations were frustrating. Lovable's credit system is more predictable and the code quality is better.
- **Lovable over Base44** -- Base44 doesn't give code ownership (code is locked to their platform)
- **Lovable over Replit** -- Replit's free AI credits run out fast and push you to a $20/month plan
- **CC/Codex over Bolt for building the platform** -- after using Bolt, we found that CC gives full control without token anxiety. Bolt was useful for the initial scaffold but CC is better for sustained development.
- **Vercel for hosting** -- free tier, auto-deploys from GitHub on every push, gives a shareable URL immediately

## Timeline

- **Project start:** March 21, 2026
- **First demo:** March 22, 2026 (landing page + one complete challenge walkthrough)
- **Project due:** ~5 weeks from start (late April 2026)
- See `project-guide.md` for the full week-by-week roadmap

## Current Status

- [x] Concept defined and solidified
- [x] Tool stack decided
- [x] Challenge progression designed (Levels 1-3 with example projects)
- [x] Project guide written (`project-guide.md`)
- [ ] Landing page built (tomorrow's demo)
- [ ] First challenge tested end-to-end
- [ ] Beta testing with friends

## Important Design Principles

1. **Zero cost barrier for participants** — kids should never need to pay to use the platform or the tools
2. **Quick wins first** — Level 1 challenges should get kids from zero to "I built that" in 15-30 minutes
3. **Recipes over lectures** — no video content; structured written prompting guides that kids follow hands-on
4. **The meta story matters** — Omri is building a vibe coding platform using vibe coding. That's part of the appeal for school and college apps.
5. **Ship early, iterate** — the first version should be a simple landing page with one challenge. Polish comes later.

## Learnings to Embed in Course Content

We documented practical lessons from this planning session that should be woven into challenge recipes and course material as we build. These cover tool selection tradeoffs, Bolt/Sonnet prompting patterns, workflow tips, and pedagogy notes. See the "Learnings From Building This" section in `project-guide.md` for the full list. Keep adding to it as we learn more during the build.

## Files in This Project

- `project-guide.md` -- Full project guide with concept, challenge details, learnings, tomorrow's demo plan, and 5-week roadmap
- `bolt-prompts.md` -- Step-by-step prompt sequence for building the demo site in Bolt.new
- `CLAUDE.md` -- This file (project context for AI continuity)

## Other instructions
1. Don't use em dashes for content, make it look and sound like a human.
