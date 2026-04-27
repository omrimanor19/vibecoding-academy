# Event Signup Manager Challenge Design

Date: 2026-04-26
Challenge: `event-signup-manager`
Level: `advanced`

## Goal

Create the next full Level 3 challenge, `Event Signup Manager`, for the Vibe Coding Academy site.

The challenge should teach students how to build a shared app with two connected experiences:

- an organizer dashboard for creating and managing events
- a public signup page where attendees can RSVP

The finished project should feel like a real tool a school club, team, class, or volunteer group could use. It should stay lighter than a full product by avoiding accounts, roles, invites, and permissions.

## Audience

High school students who have already completed a few earlier challenges or are ready for a serious build.

They may understand basic app screens and forms, but many will not yet understand databases, public routes, or how two different users can interact with the same underlying data. The content should explain those ideas in plain English and keep the focus on what the product is doing.

## Product Decision

The challenge will use a lightweight organizer access model.

The organizer gets into the dashboard with an admin link or simple passcode. Attendees do not log in. They open a public event signup link, read the event details, submit their RSVP, and see a confirmation.

The passcode must be labeled as a prototype shortcut, not real security. Students should understand that this version is for learning shared data flows, not for collecting sensitive information or protecting real private records.

The app manages multiple events. Each event has its own public signup link. Signups persist in a shared database and appear back in the organizer dashboard under the correct event.

This challenge should not introduce full authentication. That belongs in a later full-product challenge because it brings identity, roles, invitations, and permission rules into scope.

## Teaching Thesis

Core idea: `Shared Data`

Core idea blurb:

> Learn how one database can power two different views: an organizer dashboard for managing events and a public page where people sign up.

This challenge is not mainly about event planning. It is about understanding that a real app often has multiple screens and multiple users connected by the same shared data.

## Outcome

The learner finishes with a multi-event signup app that:

- lets an organizer create and manage events
- lets an organizer edit basic event details
- gives each event a public signup link
- lets attendees RSVP without accounts
- saves signups in a persistent database
- shows signups grouped under the right event in the organizer dashboard
- lets the organizer close signups for an event
- works clearly on phones for attendees

## Detail Page Content Plan

### Summary

The summary should frame this as a tool for real school coordination. Students should understand that group events usually create messy logistics: texts, spreadsheets, random names in a chat, and no single place to see who is coming.

The challenge should promise a real upgrade: a public signup link people can open from any device and an organizer dashboard where the event owner can see responses in one place.

### Setup

Do not include the beginner Lovable setup flow in this Level 3 challenge. At this point, the learner should already know how to open Lovable, sign in, and start a project.

Keep the database setup guidance. The exact backend may depend on Lovable's current product flow, so the student-facing copy should explain the concept without over-prescribing implementation details.

The setup intro should explain that this challenge needs more than browser memory. If an attendee submits from their phone, the organizer's laptop still needs to see that signup. That means the app needs shared storage.

The setup should include one aha moment.

Suggested front:

> Why does this app need a real database when earlier projects could remember things in the browser?

Suggested back:

> Browser memory only lives on one device. That works for a personal study app, but it fails when someone else signs up from their phone and the organizer needs to see it later. A database is shared storage for the whole app. The public signup page writes to it, and the organizer dashboard reads from it. That shared place is what turns separate screens into one real product.

### Steps

The challenge should use six sessions. Each session should contain smaller mini steps so the learner gives Lovable one focused prompt at a time.

#### Session 1: Plan the App

Purpose:
Teach students to name the two experiences before building screens.

Content:
- organizer dashboard
- public event signup page
- shared database
- event data
- signup data
- simple organizer access model
- Lovable Plan mode before Agent mode

Why:
Students should understand the product map before asking Lovable to build a multi-screen app.

#### Session 2: Build the Dashboard

Purpose:
Create the organizer-facing shell first.

Content:
- event list
- create event form
- fields for title, date, time, location, description, and optional question
- placeholder signup list area
- signup count per event
- prototype passcode labeled as not real security

Why:
The organizer view defines what data the app needs to manage.

#### Session 3: Add the Database

Purpose:
Teach the main concept of persistent shared data.

Content:
- database tables or collections for events and signups
- event fields: title, date, time, location, description, status
- signup fields: event ID, name, email, optional answer, created time
- every signup belongs to one event
- edit event details after real events load

Why:
This is the learning moment where students see that data relationships power the whole app.

#### Session 4: Create Signup Links

Purpose:
Add the public attendee experience.

Content:
- each event gets a public signup page or route
- organizer can copy a public signup link
- attendee page shows event details
- attendee form asks for name, email, and optional note or custom answer

Why:
Students learn that one app can show a different screen based on which link someone opens.

#### Session 5: Connect Signups

Purpose:
Make the attendee flow and organizer flow meet in the database.

Content:
- submitted RSVP saves as a signup connected to the event ID
- confirmation screen appears only after the RSVP saves successfully
- dashboard shows signups grouped under the correct event
- signup counts update
- organizer can close signups
- closed events show a clear message on the public page
- basic duplicate handling by email

Why:
This step turns two separate screens into one connected product.

#### Session 6: Polish and Test

Purpose:
Verify the app works across both roles and devices.

Content:
- test organizer flow
- test public attendee flow
- test phone layout
- test closed signup behavior
- test missing or invalid input
- publish after both flows work

Why:
Shared apps fail in the gaps between screens. The student should learn to test the full path, not only the page they are looking at.

## Writing Notes for the Challenge Content

- Keep the language student-facing and practical.
- Use `Shared Data` as the core idea.
- Explain `database`, `public link`, `event ID`, and `duplicate signup` with term chips or inline definitions.
- Use `Session N` titles to make the multi-session nature clear.
- Use mini steps inside each session so prompts stay narrow and Lovable does not try to build too much at once.
- Use Lovable's current flow: Plan mode for planning, then approve the plan so Lovable switches into Agent mode for code edits.
- Mention that Plan mode still uses credits, so planning prompts should stay focused.
- Prompt tips should be in first person.
- Do not include full login accounts, role-based permissions, admin invites, member dashboards, notifications, payments, or club membership.
- If a demo passcode appears in the core flow, label it clearly as not real security.
- QR codes, capacity, waitlists, CSV export, confirmation email, and custom questions can appear as stretch ideas or tips, but not as core steps.

## Stretch Ideas

Possible stretch ideas after the core challenge:

- generate a QR code for each public signup link
- add event capacity
- add a waitlist when capacity is full
- export signups as CSV
- send a confirmation email
- let attendees edit or cancel their signup
- add custom signup questions per event
- add a public landing page that lists all open events

## Success Criteria

The final challenge content is ready when:

- `event-signup-manager` exists in `src/data/challenges.ts`
- it is marked `available: true`
- it includes full detail page content in the same structure as the other completed challenges
- the challenge clearly teaches `Shared Data`
- the core recipe includes organizer and attendee flows connected by a persistent database
- the core recipe excludes full authentication and role systems
- the public signup flow is phone-friendly
- the checklist ends with a shipped milestone
- the tone matches the rest of the challenge library

## Risks to Watch

- Scope creep into full Club Manager behavior
- Accidentally adding accounts, roles, invites, or permissions
- Presenting a demo passcode as real security
- Treating the database as an implementation detail instead of the main learning point
- Making QR codes, capacity, or emails core before the basic signup loop works
- Forgetting to test the public page and organizer dashboard as separate experiences
- Making the public signup page feel desktop-first

## Implementation Notes

This challenge should be implemented as content in `src/data/challenges.ts`.

The challenge detail renderer should support optional `miniSteps` inside a session so advanced challenges can show one visible session with multiple focused Lovable prompts.
