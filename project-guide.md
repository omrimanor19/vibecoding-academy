# Vibe Coding Academy — Project Guide

*A project by Omri (and Racheli) — March 2026*

---

## Part 1: What Are We Building?

### The One-Liner

A free, challenge-based platform that teaches high schoolers how to build real things using AI — no coding experience required.

### The Concept

Kids today know how to *talk* to AI. They use ChatGPT for homework, they generate images for fun. But almost none of them know how to use AI to **build software** — websites, apps, games, tools. That skill is called vibe coding, and it's going to matter a lot more than traditional coding for most people.

Vibe Coding Academy is a series of guided challenges where students pick a project, follow a structured prompting path, and walk away with something real they built — a live website, a working game, an app they can show their friends. Each challenge teaches prompting patterns (we call them "recipes") in context, so kids learn *why* a prompting technique works by using it to build something they care about.

### Why This Works as a School Project

This project hits every requirement: Omri is **teaching** other students a genuinely useful skill, he's **building** the platform himself (using the same tools he's teaching — very meta), and there's a clear **community impact** angle. For a college application, this becomes a story about initiative, technical fluency, and the ability to see where the world is heading and help peers get there.

### The Tool Progression

Students use **Lovable** for all challenges -- it's free (5 credits/day, 30/month), browser-based, and generates clean React/TypeScript code they actually own. No cost barrier, no setup, no credit card needed.

We originally planned a Bolt.new-to-Lovable progression, but after testing Bolt ourselves we found its free tier burned through faster than expected and its GitHub integration was unreliable. Lovable's credit system is more predictable, the code quality is better, and one consistent tool is simpler for students than learning two platforms.

The challenges are designed to fit within 3-5 prompts each, so even free-tier students can complete them without running out of credits.

### Challenge Structure

Every challenge follows the same format:

1. **The Brief** -- What you're building, who it's for, and what it should do (written like a real product brief, because that's a skill too)
2. **The Recipe** -- Step-by-step prompting guide: what to ask the AI, in what order, and why each prompt is structured the way it is
3. **The Stretch** -- Optional extensions for kids who finish early ("now add dark mode" / "make it multiplayer" / "add a leaderboard")
4. **Freestyle** -- An open-ended step where kids add something they came up with themselves, not from the stretch list. This is the moment they go from following instructions to actually vibe coding independently. Could be a feature, a design choice, a whole new twist on the project.
5. **Show & Tell** -- A shareable link to what you built, plus a short reflection: what worked, what you added on your own, what surprised you, what you'd do differently

### Example Challenges

#### Level 1 — Quick Wins (15–30 minutes each)
These are designed to get kids from zero to "holy crap I built that" as fast as possible.

- **My Landing Page** — Build a personal homepage with your name, a bio, your interests, and links to your socials. *Recipe teaches: basic prompting structure, how to describe visual layout to AI.*

- **Would You Rather** — A game that shows two options and tracks votes. *Recipe teaches: how to prompt for interactivity, basic state management through prompting.*

- **Quiz Machine** — A trivia quiz on any topic the student picks. Multiple choice, score tracking, results screen. *Recipe teaches: how to prompt for multi-step flows, how to provide content/data in a prompt.*

- **Countdown Timer** — A customizable countdown to any event (birthday, summer break, prom). *Recipe teaches: how to prompt for real-time behavior, working with dates/time.*

#### Level 2 — Real Projects (1–2 hours each)
These feel like things you'd actually use or show someone.

- **Weather Dashboard** — Enter a city, see the weather with a clean visual display. *Recipe teaches: how to prompt for API integration, handling external data.*

- **Study Buddy** — A flashcard app where you input your own material. Tracks which cards you've mastered. *Recipe teaches: how to prompt for data persistence, iterative prompting (building feature by feature).*

- **Split the Bill** — A restaurant bill splitter that handles tax, tip, and uneven splits. *Recipe teaches: how to prompt for math logic, edge case thinking, UI polish.*

- **Class Schedule Organizer** — Input your classes and see a clean weekly view. Color-coded, printable. *Recipe teaches: how to prompt for complex layouts, working with structured data.*

#### Level 3 — Serious Builds (multi-session, Lovable recommended)
These are portfolio-worthy projects that require planning and iteration.

- **Club Manager** — A tool for running a school club: member list, event calendar, announcements, sign-up forms. *Recipe teaches: multi-page apps, authentication basics, prompting for database-like features.*

- **Debate Prep Tool** — Enter a topic, get arguments for both sides, save your notes, build an argument outline. *Recipe teaches: integrating AI within an AI-built app (meta!), content generation, structured data.*

- **Peer Tutoring Marketplace** — Students post what they can teach and what they need help with. Matching and scheduling. *Recipe teaches: two-sided platforms, user flows, thinking like a product manager.*

---

## Part 2: What to Build for Tomorrow

### The Goal
A single-page landing site that communicates the idea clearly and includes one complete challenge walkthrough. This proves the concept is real and shows your teacher (and yourself) that this is buildable.

### What the Page Should Have

**Hero Section**
- Name/logo (even if it's just text for now)
- A one-line tagline: something like "Learn to build real things with AI. No coding required."
- A CTA button: "Start Your First Challenge"

**What Is This? Section**
- 3–4 sentences explaining what vibe coding is and why it matters
- A simple "How It Works" in three steps: Pick a challenge → Follow the recipe → Ship something real

**Challenge Preview Section**
- Show 4–6 challenge cards with titles, difficulty badges, and estimated times
- One challenge should be fully clickable/expanded — this is the complete walkthrough

**The First Complete Challenge: "My Landing Page"**
This is the one to build out fully for the demo. It should include:
- The brief (what you're building)
- The recipe (3–5 prompting steps, each with the actual prompt text and an explanation of why it works)
- A screenshot or embed of a finished example
- The stretch goals

**About / Footer**
- Who built this (Omri + a line about the school project)
- "More challenges coming soon"

### How to Build It

1. Open Bolt.new
2. Prompt it with the content above — describe the landing page structure, paste in the challenge content, and let Bolt generate v1
3. Iterate 2–3 times to polish layout and styling
4. If Bolt gets stuck on something, push to GitHub, pull into CC, fix, push back
5. Share the live Bolt URL as the demo

### Realistic Scope
This should take 2–4 hours. Don't try to make it perfect. The point is a working URL that communicates the idea. Polish comes in weeks 2–5.

---

## Part 3: Next Steps — 5-Week Roadmap

### Week 1 (now → next weekend)
- [x] Define the concept and challenge progression ← you're here
- [ ] Build the landing page with one complete challenge (tomorrow's demo)
- [ ] Test the first challenge yourself: actually follow your own recipe in Bolt and see if it works
- [ ] Get feedback from teacher, adjust if needed

### Week 2
- [ ] Build out 3–4 Level 1 challenges (full recipes)
- [ ] Add navigation — the site becomes multi-page (challenge list → individual challenge pages)
- [ ] Recruit 2–3 friends to beta test the first challenges and give feedback
- [ ] Refine the prompting recipes based on where beta testers got stuck

### Week 3
- [ ] Build 2–3 Level 2 challenges
- [ ] Add a "What You'll Learn" skill tag system (so kids can see what prompting patterns each challenge teaches)
- [ ] Consider adding a "Gallery" page where kids can submit links to what they built
- [ ] Start writing the Level 3 challenge briefs (they don't need full recipes yet — just the concept and brief)

### Week 4
- [ ] Complete Level 3 challenge recipes (at least 1–2 fully written)
- [ ] Polish the site: consistent design, mobile-friendly, clear navigation
- [ ] Run a real session — get 5–10 kids to try it, observe what works and what doesn't
- [ ] Document the results (screenshots, quotes, completion rates) — this is gold for the school presentation and future college app

### Week 5
- [ ] Final polish and bug fixes
- [ ] Write a short "About This Project" section with what you learned
- [ ] Prepare presentation for school
- [ ] Optional: set up a simple feedback form so users can rate challenges

### Beyond (if Omri wants to grow it)
- Add community features (gallery, comments, upvotes on projects)
- Create a "Build Your Own Challenge" tool where students can submit challenge ideas
- Partner with other schools or coding clubs
- Add video walkthroughs for the trickiest parts
- Explore whether this could become a workshop Omri runs at other schools

---

## Learnings From Building This (Teach These in the Challenges)

We picked up a bunch of practical lessons while planning this project that should be woven directly into the challenge recipes and course content. These aren't abstract tips -- they came from real decisions and tradeoffs we made.

### Tool Selection and Ownership
- **Base44 doesn't give you your code.** We nearly chose it because it's fast and easy, but everything you build is locked to their platform. We went with Bolt.new instead because it exports to GitHub. Lesson for students: before you pick a tool, ask "do I own what I make?" This is worth mentioning in the Level 3 intro when students move to Lovable.
- **Free tiers vary wildly.** Bolt gives 1M tokens/month. Lovable gives 30 credits/month (roughly 15-30 interactions). Replit's free AI credits run out fast. Lesson: always check what "free" actually means before you commit to a tool.
- **Bolt.new's "1M tokens" is misleading.** Sounds generous, but complex prompts eat through it fast. We ran out of tokens after just a few prompts (plan + one build + one design pass). Connecting to GitHub didn't auto-push, so we almost lost our work. Lesson: always test a tool's free tier yourself before recommending it to students. We switched to Lovable for students as a result.
- **One consistent tool beats a tool progression.** We originally planned Bolt for beginners and Lovable for advanced. But asking students to learn two different platforms adds unnecessary friction. Lovable works for all levels, so we simplified.

### Prompting Patterns (from Bolt/Sonnet 4.5 experience)
- **Front-load your first prompt.** Give the AI the whole picture upfront: what it is, what's in it, how it should look. A big, clear first prompt beats 10 tiny incremental ones. This should be Recipe Step 1 in every challenge.
- **One change per follow-up.** After the initial build, keep each prompt focused on a single feature or fix. Piling on multiple changes causes compounding errors. Teach this in Level 2 when projects get more complex.
- **Plan before you build.** Bolt has a Plan mode that outlines the approach without writing code. It costs almost no tokens and catches misunderstandings early. This is a great general principle: describe what you want before asking AI to make it.
- **Don't burn tokens debugging.** If the AI loops on an error more than twice, stop. Pull the code out, fix it elsewhere, bring it back. This is a real skill -- knowing when to switch tools. Mention this in the "If Bolt Gets Stuck" section of recipes.
- **Be specific about design details.** Colors (hex codes), fonts, layout structure, tone. The more concrete you are, the less the AI guesses wrong. Teach this in the "My Landing Page" recipe when kids customize their site.
- **The "Enhance Prompt" button is useful but over-engineers.** Bolt has a feature that rewrites your prompt to be "better." In practice, it turns a simple conversational prompt into a formal technical spec -- adding things like "component hierarchy," "state management approach," and "deliverables" that you didn't ask for. This can over-constrain the AI and produce bloated results. Teach students to use it selectively: skip it for initial builds (where conversational prompts work better), try it for specific technical changes where precision helps. Always review what it changed before sending.

### Workflow and Process
- **Connect to GitHub AND push before you start iterating.** Connecting your GitHub account in Bolt doesn't auto-push your code. You have to manually trigger a push after each build step. We learned this the hard way -- ran out of tokens with code sitting in Bolt that never made it to GitHub. Always verify the push actually happened. Teach this in every challenge: "Before you move on, push to GitHub."
- **Download your code as a ZIP as a backup.** Bolt lets you export your project as a ZIP without spending tokens. Do this periodically, especially before you're low on tokens. It's your escape hatch.
- **Use version history to roll back for free.** In Bolt, restoring a previous version doesn't cost tokens. This is better than prompting the AI to "undo" something.
- **The Bolt + Claude Code combo is powerful.** Bolt for speed, CC for precision. When Bolt gets stuck in a loop, push to GitHub, fix in CC, push back. This workflow should be taught explicitly in Level 2 or 3.

### Content and Pedagogy
- **"Dogfooding" is the best teacher.** We're building this platform with the same tools we're teaching students to use. Every frustration and workaround we hit becomes material for the course. Keep noting these as we build.
- **Daily token caps are actually good for learning.** Bolt's daily limit forces kids to think before they prompt. Design challenges to fit within 3-5 prompts so students learn to be intentional, not spammy.
- **Freestyle is where real learning happens.** The stretch goals are guided. Freestyle is where students go from following instructions to actually vibe coding. Always leave room for it.

---

## Decisions Made

| Question | Decision | Why |
|---|---|---|
| What tool do kids use? | Lovable (all levels) | Free tier (5 credits/day), browser-based, code ownership, GitHub export |
| What tool do we build with? | Claude Code / Codex | Full control, no token limits, works with MCPs and skills |
| Hosting? | Vercel (free tier) | Auto-deploys from GitHub, free, zero config |
| Code ownership? | Yes -- GitHub integration | Full export from Lovable |
| Video content? | No (for now) | Project-based with written recipes; faster to produce, easier to update |
| Payment required for students? | No | Lovable free tier only |

---

*This is a living document. Update it as decisions evolve.*
