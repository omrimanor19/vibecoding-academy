# How to Build a New Challenge

This is the recipe for writing a new challenge detail page. Read it fully before starting. Every decision here was made deliberately, so don't skip sections or improvise the structure.

---

## Who You Are Writing For

The audience is high school students. Most of them have used ChatGPT. Most have not used an AI builder like Lovable, deployed a website, or written a line of code. A few might be more technical. Write for the one who isn't.

**The voice to aim for:** a knowledgeable older sibling, not a textbook. Direct, warm, a little encouraging. No jargon without explanation. No passive voice. No "simply" or "just" (they make things sound easy when they might not be).

---

## The Data Model

Every challenge lives in `src/data/challenges.ts`. A challenge with a full detail page uses this shape:

```typescript
{
  id: string;               // kebab-case, unique. e.g. 'quiz-machine'
  title: string;            // short display name
  level: 'beginner' | 'intermediate' | 'advanced';
  levelLabel: string;       // 'Quick Win' | 'Real Project' | 'Serious Build'
  time: string;             // e.g. '20 min', '1 hr', 'multi-session'
  description: string;      // one-line teaser shown on the card grid
  coreIdea: string;         // short learning concept label. e.g. 'APIs'
  coreIdeaBlurb: string;    // one-sentence explanation of what the learner should understand by the end
  available: boolean;       // set to true when the detail page is ready
  spotlightLabel?: string;  // optional card badge for useful guidance, e.g. 'Start here'
  detail?: ChallengeDetailContent;
}
```

When `available` is false and `detail` is missing, the card shows as "coming soon." Don't add a partial `detail` to an unavailable challenge.

### `coreIdea` and `coreIdeaBlurb` (required)

Every challenge needs a clear teaching thesis, not just a project outcome. This is the core idea the learner should walk away with.

- `coreIdea`: a short label that works on a card, usually 1-3 words. Examples: `APIs`, `Memory`, `Trustworthy UX`.
- `coreIdeaBlurb`: one sentence in plain English that explains the idea in a way a high school student would actually understand.

These fields show up in two places in the app:
- on the challenge card, so learners can scan by what they will learn
- near the top of the detail page, so the challenge opens with the concept, not just the build steps

The core idea is not the same as the project title. "Weather Dashboard" is the project. "APIs" is the concept. "Split the Bill" is the project. "Trustworthy UX" is the concept.

---

## The Detail Page Structure

Every detail page has these sections, in this order. Some are optional.

### 1. `summary` (required)

This is the first thing the learner reads. It should answer three questions in plain language:

1. What is this challenge about?
2. What will I have when I'm done?
3. What can I actually use it for?

Give it real-world stakes. "A live webpage with your own URL you can share with anyone" is better than "a website." "Use it on college applications or in your Instagram bio" is better than "share it online."

Keep it to 3-4 sentences. No bullet points here.

> Note: the summary no longer renders as a big callout box on the page. It is used for context only, not displayed. Write it anyway — it keeps the intent of the challenge clear for content authors.

---

### 2. `outcome` (required)

A concrete description of the finished product. One or two sentences. Be specific about what it includes. End with something that makes the learner feel good about finishing it.

**Example:**
> "A clean, modern homepage with your name, a short bio, links to your projects or socials, and a simple way for people to contact you. Something you're genuinely proud to share."

---

### 3. `setup` (optional, but required for any challenge that introduces a new tool or concept)

Use this section when the learner needs to set something up or learn how a tool works before they can start building. For Level 1 Lovable challenges, include the basic Lovable start guide. For Level 3 challenges, do not repeat the Lovable sign-in or new-project instructions unless the challenge introduces a new workflow the learner has not seen before.

**`setup.intro`:** One or two sentences that explain the setup concept, in plain English. For early challenges, this may explain the tool. For advanced challenges, it should usually explain the new project-specific idea, like shared storage, an API key, or a database.

**`setup.steps`:** An ordered list of setup instructions. Each step has:
- `instruction`: what to do. One action per step. Short sentences.
- `note` (optional): a clarifying detail that supports the instruction but isn't the main point. Use notes for things like "You can sign up with Google" or "This takes about 2 minutes."

Rules for setup steps:
- One action per step. Not "go to the site and sign up and then click New Project." Three steps.
- Write the UI labels exactly as they appear. If the button says "Start building," say "Start building," not "get started."
- If a step involves seeing something on screen for the first time, describe what they will see.

**`setup.ahaMoment`:** An optional flip card placed at the end of the setup section. Use it to teach one core mental model before the learner starts building. The aha moment is not a tip. It is a reframe — something that changes how they think about the whole challenge, not just one step.

The flip card has two sides:
- `front`: a question or hook that creates curiosity. Something the learner actually wonders about.
- `back`: the insight. Concrete and actionable. Not abstract. "Plan before you prompt. Ask for one small thing at a time" is an insight. "Good communication is important" is not.

Use at most one aha moment per challenge. Place it after setup, before the steps.

---

### 4. `steps` (required)

The step-by-step building guide. Each step is one discrete action. For a beginner challenge, aim for 3-5 steps. For intermediate, 4-6. For advanced, more is fine but consider splitting into sessions.

Each step has:

**`title`:** "Step N: Short Label." Keep the label to 3-5 words. It should describe what the learner will do, not what will happen to them.

**`description`:** 2-4 sentences explaining what this step does and how to approach it. Give context before the prompt. The learner should understand what they're trying to achieve before they copy anything.

Rules for descriptions:
- Explain the why, not just the what. "Start with the skeleton because it's easier to style something that already has the right shape" is more useful than "start with the HTML."
- Use everyday language. If you must use a technical term, define it immediately or add a term chip (see below).
- Be specific about what they're building. "A section with your name and a one-line intro" is better than "a header."
- If the step involves clicking a button instead of typing a prompt, describe exactly where the button is. "Click the Publish button in the top right corner" not "deploy the project."

**`promptTip`** (optional): The exact prompt text the learner can copy. Only include this for steps where they need to type a message to Lovable. Do not include it for steps that involve clicking UI elements (like publishing), reviewing output, or making personal decisions (like writing their own bio — give them a starting point but let them own it).

When writing prompt tips:
- Write them in first person, as if the learner is typing them.
- Use plain English, not developer language. "Make the page look modern and clean" not "apply a CSS stylesheet."
- Keep them short and focused. One prompt per step. If a prompt is doing more than one thing, it belongs in two steps.

**`miniSteps`** (optional): Use this for advanced or multi-session challenges where one visible session needs several smaller actions. A parent step can explain the session goal, then `miniSteps` can hold the copyable prompts.

Each mini step can have:
- `title`: the small action
- `description`: why this small action comes next
- `promptTip` (optional): the exact Lovable prompt for this one action
- `terms` (optional): term chips for this one action

Rules for mini steps:
- One mini step should ask Lovable for one thing.
- Do not combine planning, UI, database, routing, validation, and polish in one prompt.
- If Lovable would need to make three unrelated decisions from one prompt, split it into smaller mini steps.
- For Level 3 challenges, prefer session-level steps with mini steps over one giant prompt per session.

**`terms`** (optional): A key-value map of technical terms used in this step and their plain-English definitions. Renders as small pill chips below the prompt tip.

When to add terms:
- When a technical word appears in the step description or prompt tip that a high schooler might not know.
- When the word matters enough that not understanding it would make the step confusing.
- When a one-line definition is enough. If the concept needs a paragraph, it belongs in an aha moment or setup note instead.

Format: `{ "Term": "plain English definition starting lowercase" }`

Examples:
- `{ "HTML": "the language that defines the structure of a webpage, like a skeleton" }`
- `{ "CSS": "the language that controls how a page looks: colors, fonts, spacing, and layout" }`
- `{ "API": "a way for two apps to talk to each other and share data" }`

---

### 5. `tips` (required)

3-5 practical tips that help the learner get better results. These are not rules. They are things a more experienced person would tell a friend who's doing this for the first time.

Rules for tips:
- One tip per bullet. One sentence each.
- Practical and specific. "Use plenty of white space — it makes your page easier to read" is a tip. "Design matters" is not.
- Avoid obvious advice. "Make sure it looks good" is not a tip.
- Address common mistakes if you know them. "Test it on your phone — a lot of people will see it on mobile first" is a tip that addresses a mistake beginners often make.

---

### 6. `checklist` (required)

A short list of things the learner can check off to know they're done. 4-6 items. Each item should be something observable and concrete.

Rules for checklists:
- Write in second person: "Your name is prominently displayed" not "Name is displayed."
- Every item should be independently verifiable. The learner should be able to look at their project and say yes or no.
- The last item should typically be the "shipped" milestone: a live URL, a shareable link, something that proves they finished.

---

### 7. `closingTitle` and `closingMessage` (required)

The finishing moment. It appears in a green callout box at the bottom of the steps.

`closingTitle`: a short phrase, not a sentence. "Ready to ship?" or "You built it." Keep it punchy.

`closingMessage`: 1-2 sentences. Acknowledge what they just did and invite them to share it. Reference the Show & Tell section below it if relevant.

---

## Content Principles

**Every challenge should teach one clear idea.** Before writing any steps, decide what the learner is really supposed to understand by the end. That idea becomes `coreIdea` and `coreIdeaBlurb`. If you cannot name the concept cleanly, the challenge is probably trying to teach too much at once.

**Walk through new concepts and processes.** Never assume the learner knows how to use a tool they haven't seen before. If a step involves something they've never done — signing up, clicking a specific button, reading output — describe it. The first challenge does this for Lovable setup. Future challenges that introduce a new tool (APIs, GitHub, Vercel) should do the same.

**Explain technical terms the first time they appear.** Use term chips for one-liners. Use setup notes for anything that needs a sentence. Use aha moments for mental models that change how they approach the whole challenge.

**Use everyday language.** Read every sentence aloud. If it sounds like documentation, rewrite it. "The part of your page that visitors see first" is clearer than "the hero section" for a beginner.

**Give context before instructions.** Before every prompt tip, tell the learner what they're trying to do and why, so they understand the goal rather than just copying text. This is what makes the difference between following a recipe and actually learning.

**Make it personal.** Where possible, push the learner to make the thing their own. "Tell Lovable what colors or vibe you're going for" beats "add a color scheme." The goal is for them to feel like they built it, not followed instructions.

**Use specific real-world uses.** When explaining why something matters, give concrete examples. "You can use it for college applications, internship outreach, or just point people to it when they want to know more about you" is more motivating than "it's useful to have online."

---

## Aha Moment Flip Cards

Aha moments are the most important teaching tool in a challenge. Used well, they create a genuine shift in how the learner thinks. Used poorly, they're just a fancy tip box. Know the difference.

### What an aha moment is

An aha moment teaches a mental model, not a fact. A fact is "you can use Lovable for free." A mental model is "AI builders work best when you plan before you prompt." The mental model changes how the learner approaches every step that follows. The fact doesn't.

Ask yourself: if the learner reads this and actually internalizes it, will they make meaningfully better decisions for the rest of the challenge? If yes, it's an aha moment. If it's just useful to know, it's a tip.

### Placement

Aha moments live inside `setup.ahaMoment`, which places them at the end of the "Before You Start" section, right before the step-by-step guide begins. This is intentional: the learner has just learned how the tool works, and now they get the one mental model they need before they start using it.

Use at most one aha moment per challenge. If you find yourself wanting two, pick the one that matters more for this specific challenge. The other might belong in a later challenge, or as a tip.

### Writing the front

The front of the card is a hook. Its job is to make the learner want to flip it. The best fronts do one of two things:

1. Ask a question the learner actually has: "Why do some people get amazing results from AI builders while others just get a mess?"
2. Create a puzzle: "There's one thing that separates a 10-minute build from a 2-hour mess."

Avoid stating the insight on the front. If the front gives away the answer, flipping feels pointless and the moment loses its impact.

Keep the front to one or two sentences. The learner should be able to read it in three seconds and immediately want to flip.

### Writing the back

The back delivers the insight. It should feel like a payoff — something worth having flipped for.

Rules:
- Lead with the core idea in one sentence. Then support it.
- Make it concrete and actionable. "Plan before you prompt. Ask for one small thing at a time" is actionable. "Think carefully before you type" is not.
- Use plain language. This is not the place for technical vocabulary.
- End on something the learner can do right now, or keep in mind for the next step.
- Keep it to 3-5 sentences. Long backs feel like a lecture and kill the moment.

### The component

The flip card is rendered by `src/components/ui/AhaMoment.tsx`. It takes two props: `front` and `back`. Both are plain strings. The card handles the flip animation, layout, and the "Tap to reveal / Tap to flip back" affordance automatically.

To add one to a challenge:

```typescript
setup: {
  intro: '...',
  steps: [...],
  ahaMoment: {
    front: "Your hook question here",
    back: "Your insight here. Concrete, short, actionable.",
  },
}
```

### What makes a bad aha moment

- **Generic advice dressed up as insight.** "Good prompts get good results" is obvious. It doesn't reframe anything.
- **Too long.** If the back needs more than 5 sentences, it's two ideas. Pick one.
- **A tip in disguise.** "Remember to test on mobile" is a tip. It belongs in the tips array, not a flip card.
- **Front gives away the answer.** "The secret to good results is planning ahead — flip to learn more" defeats the purpose of the flip.

---

## Checklist Before Publishing

Before setting `available: true` on a challenge, verify:

- [ ] The `coreIdea` is short, clear, and different from the project title
- [ ] The `coreIdeaBlurb` explains the concept in plain English, not curriculum language
- [ ] The `outcome` answers: what exactly will they have when they're done?
- [ ] The `summary` answers: why does this matter to a high schooler specifically?
- [ ] Every step description gives context before the instruction
- [ ] Every technical term that appears is either defined with a term chip or explained inline
- [ ] Prompt tips are written in first person and use plain English
- [ ] Steps that don't require a prompt (UI actions, personal decisions) have no `promptTip`
- [ ] Tips are specific and practical, not generic advice
- [ ] The checklist last item is the "shipped" milestone
- [ ] If the challenge introduces a new tool, a `setup` section walks through it from scratch
- [ ] The challenge has been tested end-to-end by someone who hasn't done it before
