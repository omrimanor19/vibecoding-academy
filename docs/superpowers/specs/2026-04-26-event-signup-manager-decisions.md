# Event Signup Manager Challenge Decisions

Date: 2026-04-26
Challenge: `event-signup-manager`
Level: `advanced`
Level label: `Serious Build`
Status: decision memo, not final implementation plan

## Purpose

Event Signup Manager is the next Level 3 challenge for Vibe Coding Academy.

It should teach students how to build a shared app with two different experiences powered by the same database:

- an organizer view for creating and managing events
- a public attendee view for signing up

The challenge should feel like a real product, but it should avoid full user accounts, role systems, invites, and permissions. Those belong in a later full-product challenge.

## Core Product Shape

The app manages multiple events.

The organizer uses a lightweight admin link or passcode instead of a full login account. From the organizer dashboard, they can create events, edit event details, close signups, copy public signup links, and see attendee lists.

Attendees use public signup links. They do not create accounts. They open an event link, read the details, and RSVP with basic information such as name and email.

The app needs a persistent shared database because signups must appear for the organizer even when attendees submit them from different devices.

## Teaching Thesis

Core idea: `Shared Data`

Possible core idea blurb:

> Learn how one app can show different views of the same database: an organizer view for managing events and a public view where people sign up.

The main lesson is that a real app is often not one screen. It is multiple views connected by the same underlying data.

## Core User Flows

### Organizer Flow

1. Organizer opens the admin link or enters the organizer passcode.
2. Organizer sees a dashboard with all events.
3. Organizer creates a new event with title, date, time, location, description, and optional signup questions.
4. App saves the event in the database.
5. Organizer copies the public signup link for that event.
6. Organizer shares the link outside the app.
7. Organizer returns to the dashboard to see signups grouped by event.
8. Organizer can edit event details or close signups.

### Attendee Flow

1. Attendee opens a public signup link.
2. Attendee sees event details.
3. Attendee enters their name, email, and any optional fields.
4. Attendee submits the RSVP.
5. App saves the signup in the database.
6. Attendee sees a confirmation screen.

## Core Features

Organizer features:

- create multiple events
- view all events
- edit event details
- close signups for an event
- copy public signup link for each event
- view attendee list for each event
- see signup counts per event

Attendee features:

- open a public event signup page
- read event details
- RSVP with name and email
- submit optional information if included
- see confirmation after signing up
- see a closed message if signups are closed

Shared behavior:

- event data persists in a database
- signup data persists in a database
- each signup is connected to the correct event
- organizer dashboard updates from attendee submissions
- public pages stay simple and phone-friendly

## Access Model

Use a lightweight organizer passcode or admin link for the core challenge.

Do not include full authentication in the core challenge.

Reason:

- full login adds identity complexity too early
- this challenge should focus on shared data and public/private flows
- the organizer only needs a simple protected way to access the dashboard
- attendees should not need accounts to RSVP

## Data Model

The student-facing recipe can keep this simple, but the app needs these concepts:

- events: title, date, time, location, description, status, public signup link or event ID
- signups: event ID, attendee name, attendee email, optional note or custom answer, created time

Optional fields:

- event capacity
- waitlist status
- attendee grade
- dietary restrictions
- phone number

The core teaching point is that every signup belongs to one event. That relationship is what lets the organizer view signups grouped under the right event.

## Recipe Structure

This should be a multi-session Level 3 challenge, lighter than a full product.

Recommended sessions:

1. Plan the app.
   Define the organizer dashboard, public signup page, and shared data.

2. Build the organizer dashboard.
   Create the visible dashboard first: event list, create event form, and signup list area. No database yet.

3. Add the database.
   Store events and signups persistently. This is the main learning moment.

4. Create public signup links.
   Each event gets its own public signup page or route where attendees can RSVP.

5. Connect signups back to the dashboard.
   Organizer sees signups grouped under the right event. Add close signups and simple duplicate handling.

6. Polish and test both flows.
   Test organizer view and attendee view, including phone layout and imperfect input.

## Stretch Ideas

- generate a QR code for each event
- add event capacity
- add a waitlist when capacity is full
- export signups as CSV
- send a confirmation email
- let attendees edit or cancel their signup
- add custom signup questions per event
- add a public landing page that lists all open events

## Scope Boundary

Core challenge includes:

- multiple events
- organizer dashboard
- public signup link per event
- attendee RSVP form
- shared persistent database
- signup list per event
- close signups behavior
- confirmation screen
- phone-friendly public signup page

Core challenge excludes:

- full user accounts
- role-based permissions
- member dashboards
- club membership
- admin invites
- SMS, email, or push notifications
- school-wide directory
- payment collection

## Implementation Complexity

Student app complexity: medium high.

This is a good Level 3 challenge because it introduces a persistent database and shared public/private flows without adding full authentication or permissions.

Repo implementation complexity: low to medium.

If this becomes content only, implementation mostly means adding a new challenge entry to `src/data/challenges.ts`. If the site needs better support for Level 3 multi-session recipes, the data model and `ChallengeDetail` component may need small additions for sessions and stretch goals.

## Open Questions

- Should the core use an organizer passcode, an unlisted admin link, or both?
- Should QR code generation be core or stretch?
- Should duplicate signups be blocked by email, warned about, or allowed?
- Should event capacity be core or stretch?
- What should the exact challenge title be: `Event Signup Manager`, `Activity Signup Manager`, or `Signup Link Builder`?
