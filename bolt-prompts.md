# Bolt Prompt Sequence -- Building the Demo Site

## Before You Start

- **Use Plan mode first** -- before each Build prompt, switch to Plan mode and describe what you want. Bolt will outline its approach without writing code. This costs way fewer tokens and catches misunderstandings early. Once the plan looks right, switch to Build mode and say "go ahead."
- **Use the Enhance Prompt button** -- bottom-left of the chat box, click the + icon, then "Enhance prompt." It rewrites your prompt to be clearer for the AI. Double-check it didn't drop any details.
- **One feature per follow-up** -- don't pile multiple changes into one prompt. Sonnet 4.5 does better with focused, specific requests.
- **Connect to GitHub before you start building** so nothing gets lost.
- **If something breaks**, don't spam the auto-fix button. Read the error, describe the problem clearly in your next prompt, or bail to CC.

---

## Prompt 0: Plan First (use Plan mode)

Start in **Plan mode** (not Build mode) to save tokens.

```
I'm building a single-page website called "Vibe Coding Academy." It teaches high schoolers how to build real software using AI tools -- no coding experience needed.

The site needs these sections:
1. Hero with headline, subheading, and CTA button
2. "How It Works" -- 3-step overview
3. Challenge card grid -- 12 challenges across 3 difficulty levels
4. One fully built-out challenge detail page (for "My Landing Page")
5. About section and footer

Target audience is teenagers. Design should be modern, bold, energetic -- not corporate.

Tech: React, Tailwind CSS. No backend, no auth, no database. Static content site.

Walk me through how you'd structure this.
```

Review the plan. If it makes sense, move to Build mode for Prompt 1.

---

## Prompt 1: Landing Page (use Build mode)

```
Build "Vibe Coding Academy" -- a single-page site for high schoolers.

HERO:
- Headline: "Build real apps. No code required."
- Subheading: "Learn to use AI to create websites, games, and tools -- one challenge at a time."
- CTA button: "Try Your First Challenge" (scrolls to challenge section)

HOW IT WORKS (3 cards with icons):
- "Pick a Challenge" -- Choose a project like a quiz game, weather app, or personal site
- "Follow the Recipe" -- Step-by-step prompting guide shows you what to tell the AI and why
- "Ship It" -- You walk away with something real, hosted and shareable

CHALLENGE GRID:
Cards with title, difficulty badge, time estimate, one-line description.

Level 1 / green badge / "Quick Win":
- "My Landing Page" / 20 min / Build your own personal homepage
- "Would You Rather" / 20 min / A voting game with two choices
- "Quiz Machine" / 30 min / Trivia quiz on any topic
- "Countdown Timer" / 15 min / Stylish countdown to any event

Level 2 / blue badge / "Real Project":
- "Weather Dashboard" / 1 hr / Look up weather for any city
- "Study Buddy" / 1.5 hrs / Flashcards that track progress
- "Split the Bill" / 1 hr / Bill splitter with tax and tip
- "Class Schedule" / 1.5 hrs / Color-coded weekly class view

Level 3 / purple badge / "Serious Build":
- "Club Manager" / multi-session / Members, events, signups for school clubs
- "Debate Prep Tool" / multi-session / Both sides of any argument
- "Peer Tutoring Market" / multi-session / Connect student tutors with learners

Only "My Landing Page" gets a "Start Challenge" button. All others say "Coming Soon" and are visually dimmed.

ABOUT:
"Created by Omri, a high school sophomore who believes every student should know how to build with AI. This platform is itself built using vibe coding -- the same tools and techniques taught in the challenges."

FOOTER:
Left: "Built with AI by Omri" / Right: "More challenges coming soon"

DESIGN:
- Mobile-first, responsive
- Modern sans-serif font
- White or light background, bold accent colors
- Smooth scroll navigation
- No login, no signup. Public content site.
```

---

## Prompt 2: Challenge Detail Page (separate prompt, one feature)

```
Add a challenge detail page for "My Landing Page." Clicking "Start Challenge" navigates to this page. Include a "Back to Challenges" link.

Layout the page with these sections, in order:

THE BRIEF:
Title: "My Landing Page"
Level: 1 (Quick Win) | Time: 20 min | Tool: Bolt.new (free)
Description: "Build a personal homepage that introduces you to the world. Your name, a short bio, your interests, and links to your socials. Your corner of the internet."

THE RECIPE:
4 numbered steps. Each step has a title, the actual prompt text (displayed in a styled code block or highlighted box), and a short tip explaining the technique.

Step 1: "Start with the big picture"
Prompt: "Build me a personal landing page. I want my name [YOUR NAME] as a big headline, a short bio section, a list of my interests, and links to my social media. Modern and clean, dark background, bright accent colors."
Tip: Give the AI the full picture in your first prompt -- what it is, what's in it, how it looks. Fewer round trips = better results.

Step 2: "Make it yours"
Prompt: "Change the bio to: [your 2-3 sentences]. Update interests to: [your list]. Add links to my [your socials]."
Tip: AI scaffolds fast, but you fill in what makes it yours. Replace placeholder content early.

Step 3: "Level up the design"
Prompt: "Add a fade-in animation on the headline. Add a 'What I'm Working On' section at the bottom with 2-3 bullet points."
Tip: Rough draft first, then layer in polish. That's how real building works.

Step 4: "Ship it"
Prompt: "Make sure it looks good on mobile. Fix any spacing issues."
Tip: The last step is always polish. This is the difference between a project and a product.

THE STRETCH (optional bonus challenges):
- Add dark mode / light mode toggle
- Include a photo or avatar
- Add a "Contact Me" form
- Custom cursor or hover effects

FREESTYLE:
"Add something that's totally your idea. A feature, a section, a whole new vibe. This is where you stop following the recipe and start cooking."

SHOW & TELL:
"Share what you built. Reflect: What was easier than expected? What surprised you? If you had another hour, what would you add?"

Add a progress indicator (Step 1 of 4) on the recipe section.
```

---

## Prompt 3: Polish (one focused cleanup pass)

```
Clean up pass:

1. Challenge detail page should match the landing page design -- same fonts, colors, spacing
2. Recipe steps: make the prompt code blocks visually distinct from the tip text. Use cards or accordion layout.
3. Challenge cards on landing page: add subtle hover effect on active cards, keep "Coming Soon" ones dimmed
4. Verify mobile layout -- cards and recipe steps should stack cleanly on phone screens
5. "Start Challenge" and "Back to Challenges" navigation both work correctly
```

---

## Prompt 4: Final Touches (optional, skip if low on tokens)

```
Final touches:
- Smooth scroll animations between sections
- Emoji or icon on each level badge (lightning bolt for Quick Win, rocket for Real Project, star for Serious Build)
- Subtle fade-in animations as sections scroll into view
```

---

## Token-Saving Tips

- **Plan mode before Build mode.** Always. It's almost free and prevents expensive rebuilds.
- **Don't spam the fix button.** If Bolt auto-fix loops more than twice, stop. Read the error and describe the real problem.
- **Point Bolt to specific files.** If you need a change in one component, say "in the ChallengeDetail component, change X" instead of describing the change broadly.
- **Use version history.** If a prompt makes things worse, restore the previous version (free, no tokens) instead of prompting to undo.
- **Bail to Claude Code for bugs.** Push to GitHub, fix in CC, push back. Don't burn Bolt tokens debugging.
