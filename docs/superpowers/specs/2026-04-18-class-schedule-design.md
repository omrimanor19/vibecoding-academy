# Class Schedule Challenge Design

Date: 2026-04-18
Challenge: `class-schedule`
Level: `intermediate`

## Goal

Create the next full Level 2 challenge, `Class Schedule`, for the Vibe Coding Academy site.

The challenge should teach students how to turn rough human input into structured information that a product can actually use. The finished project is a phone-friendly weekly class schedule that students can view quickly between classes.

## Audience

High school students with little or no coding experience.

They may have used ChatGPT before. They may not understand terms like structured data, parsing, or responsive layout yet. The content should explain those ideas in plain English and keep the tone direct, warm, and practical.

## Product Decision

The challenge will use a text-first flow.

Students can type or paste their schedule in normal language. The core recipe will use Gemini to interpret that text at runtime, then turn the result into a clean weekly schedule view inside a Lovable-built app.

Printing is not part of the core challenge. It can be suggested as a stretch idea later if needed.

Mobile responsiveness is a core requirement, not a polish detail. Students are likely to use the schedule on their phones during the school day, so the app must work well on smaller screens.

## Teaching Thesis

Core idea: `Structured Data`

Core idea blurb:

> Learn how turning rough information into a clean structure makes it possible to build an app that organizes it, displays it clearly, and makes it useful.

This challenge is not mainly about calendars. It is about transforming flexible human input into a reliable, readable product.

## Outcome

The learner finishes with a mobile-friendly weekly class schedule app that:

- accepts a typed or pasted schedule in normal language
- organizes classes by day and time
- shows a clean weekly view with consistent color-coding
- feels easy to scan on a phone
- can be published and shared

## Detail Page Content Plan

### Summary

The summary should frame this as a real-life student tool, not a toy app. It should explain that students often get their schedules in annoying formats, copied text from a portal, rough notes, or a typed list, and that this challenge helps them turn that rough input into something they can actually use every day from their phone.

### Setup

Include Gemini API setup plus the standard Lovable setup, since the app needs a model call to interpret natural-language schedule text at runtime.

The setup intro should explain that Lovable builds the interface, while Gemini handles the language task inside the app.

The setup should include one aha moment.

Suggested front:

> How can a computer make sense of a schedule written like a normal person would write it?

Suggested back:

> Because the app does not need to understand everything about the sentence. It only needs to pull out a few useful pieces: class name, day, start time, end time, and maybe room or teacher. Gemini can do that extraction, and once the app has those pieces in a clean structure, it can place classes in the right part of the week and keep the layout readable. That is what structured data means.

### Steps

The challenge should use five steps.

#### Step 1: Build the Input and Layout

Purpose:
Create the shell of the app before adding any transformation logic.

Content:
- a large text area for pasting or typing a schedule in plain language
- a button to organize the schedule
- an empty weekly view below it
- a mobile-friendly layout from the start

Why:
Students should learn to build the visible structure first so the product shape is clear before the logic gets more complex.

#### Step 2: Connect Gemini to Parse the Schedule

Purpose:
Teach the main concept of the challenge.

Content:
- connect the app to Gemini with an API key
- send pasted schedule text to Gemini with a specific instruction
- ask Gemini to return class name, day, start time, end time, and optional room or teacher in a structured format
- display the extracted classes in the weekly view
- sort entries into the right day and time order

Why:
This is the moment where rough input becomes structured data.

#### Step 3: Make It Easy to Scan

Purpose:
Turn the raw organized data into a product that feels useful.

Content:
- consistent color for the same class across different days
- clear class blocks
- readable spacing
- fast visual scanning

Why:
A schedule only helps if a student can understand it in a glance while moving between classes.

#### Step 4: Handle Imperfect Input

Purpose:
Teach students to think beyond the happy path.

Content:
- helpful message if input is empty
- helpful message if the app cannot identify any class entries
- graceful handling of partial information
- avoid broken layouts or raw errors

Why:
Real users paste weird, incomplete, or inconsistent text. A good product handles that without falling apart.

This step can also include an in-step aha moment about designing for real users instead of ideal input.

#### Step 5: Polish for Phone Use and Publish

Purpose:
Make the app genuinely usable in context.

Content:
- tighten spacing and typography for smaller screens
- make day sections stack cleanly on mobile
- test with a realistic class schedule
- publish after verifying the schedule is readable on a phone

Why:
Responsiveness is part of the product requirement, not an afterthought.

## Writing Notes for the Challenge Content

- Keep the language non-technical where possible.
- Define `structured data`, `responsive`, and any other needed terms with term chips or inline explanation.
- Prompt tips should be written in first person.
- Not every step needs a prompt tip. UI actions like publish should not get one.
- The challenge should stay inside Level 2 scope. No file upload or screenshot parsing in the core recipe.

## Stretch Ideas

Possible stretch ideas after the core challenge:

- add a teacher or room filter
- add a today view that highlights only the current day
- let the user edit one class block manually after the schedule is organized
- add printing or export as a later extension

## Success Criteria

The final challenge content is ready when:

- `class-schedule` is marked `available: true`
- it includes full detail page content in the same structure as the other completed challenges
- the challenge clearly teaches `Structured Data`
- mobile responsiveness is emphasized in both the steps and tips
- the checklist ends with a shipped milestone
- the tone matches the rest of the challenge library

## Risks to Watch

- Scope creep into upload flows, OCR, or image parsing
- Forgetting that natural-language parsing at runtime requires a model call
- Over-explaining technical concepts instead of keeping them grounded
- Making the app sound like a calendar clone instead of an organizer for rough student input
- Treating mobile support as optional polish instead of core product behavior

## Implementation Notes

This challenge should be implemented as content in `src/data/challenges.ts`. No component changes are expected unless the current detail page fails to support the content cleanly.
