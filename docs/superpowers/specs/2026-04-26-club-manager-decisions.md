# Club Manager Challenge Decisions

Date: 2026-04-26
Challenge: `club-manager`
Level: `full product`
Status: decision memo, not final implementation plan

## Purpose

Club Manager should teach students how to think about a full product with roles, shared data, and connected workflows. This is not a private organizer. It is a two-role club operations app for one school club.

The challenge should help students understand that a full product is a system: members, officers, events, signups, announcements, and notifications all affect each other.

## Level Decision

Club Manager belongs in a new Level 4 category: `Full Product`.

This is a bigger jump than the current Level 3 challenges because it combines authentication, roles, invites, permissions, shared data, admin workflows, and member workflows. That is valuable, but it is too much for the first advanced challenge.

Recommended progression:

- Level 2: useful single-user apps
- Level 3: shared apps with one admin flow and one public/member flow
- Level 4: full products with accounts, roles, invites, permissions, and multiple connected workflows

Club Manager should be saved for Level 4. A simpler Level 3 bridge challenge should come before it.

## Core Product Shape

The app is for one club, not a whole school club marketplace.

Core users:

- Admins, also called officers or club managers
- Members

The app should let members see club activity and sign up for events. It should let admins create and manage the club experience.

## Role Decision

A user can become an admin in two ways:

- They sign up and choose to start a new club. This creates a new club and makes them the admin of that club.
- An existing admin invites them as another admin for the same club.

A user cannot declare themselves admin of an existing club during normal signup. That rule protects the club from random users giving themselves officer access.

## Onboarding Flows

### New Admin Flow

1. User signs up or logs in.
2. User chooses "Start a club."
3. User enters club name and basic club info.
4. App creates the club.
5. User becomes admin of that club.
6. Admin lands in an admin dashboard.

Admin dashboard should support:

- creating and editing events
- viewing event signups
- posting announcements
- viewing members
- inviting members
- inviting additional admins

### New Member Flow

1. Member receives an invite link or QR code outside the app.
2. Member opens the invite.
3. Member signs up or logs in.
4. Member joins that specific club as a member.
5. Member lands in the club member view.

Member view should support:

- seeing upcoming events
- signing up for events
- reading announcements
- seeing in-app notifications or recent updates

### Invite Another Admin Flow

1. Existing admin creates or copies an admin invite.
2. Invitee opens the invite.
3. Invitee signs up or logs in.
4. App adds them as an admin for that club.

Admin invites must be separate from member invites.

## Invite Method

The core challenge can use generated invite links.

QR codes are a good product fit because club officers can display them at meetings or send screenshots through the messaging app of their choice. For the core recipe, QR code generation can be included if Lovable can add it cleanly. If it adds too much friction, QR codes should become a stretch feature and invite links should remain core.

The app does not need to send SMS, email, or push notifications in the core challenge. Admins can share invite links or QR codes outside the app.

## Authentication Decision

Admins need full login accounts.

Members should also have full login accounts because the complexity is similar once auth exists, and members need to return later to see their signups, announcements, and club activity.

## Database Decision

This challenge needs a persistent shared database. Browser-only memory is not enough because the app has multiple users and devices.

Local memory would only support a private organizer for one officer. It would fail the chosen product because:

- members need to join from their own devices
- event signups need to persist
- admins need to see signups from other people
- announcements need to appear for all members
- roles need to be enforced across sessions

Lovable should likely use Supabase or its built-in backend/database flow for auth and data persistence.

## Core Data Model

The final schema can be simplified for the student-facing recipe, but the product needs these concepts:

- users: people with login accounts
- clubs: one club record with name and description
- club memberships: connects users to clubs and stores their role, either admin or member
- events: activities created by admins
- event signups: connects members to events
- announcements: posts created by admins and visible to members
- invites: links or codes that let someone join as a member or admin

The core teaching point is that roles are not global. A user is admin or member of a specific club.

## Core Features

Core admin features:

- start a new club
- create event
- edit or cancel event
- view signup list for each event
- post announcement
- invite member
- invite admin
- see member list

Core member features:

- join club from invite
- view club home
- view upcoming events
- sign up for an event
- cancel their own signup
- read announcements
- see in-app updates

Core shared behavior:

- data persists across accounts and devices
- users see the correct view based on their role
- members cannot access admin controls
- admins can see member activity for the club they manage

## Notifications Decision

Notifications should mean in-app updates for the core challenge.

Examples:

- new announcement appears in the member view
- event update appears as a recent update
- cancellation appears as a visible notice

Real outbound notifications, such as email, SMS, or push notifications, should be stretch features because they add setup friction and platform complexity.

## Scope Boundary

Core challenge:

- one-club operations app
- full login for admins and members
- club creation by a new admin
- member and admin invite links
- role-based views
- events and signups
- announcements and in-app updates
- persistent database

Stretch:

- QR code generation if not included in core
- real email notifications
- multiple clubs per user
- school-wide club directory
- officer permissions beyond admin/member
- attendance tracking
- recurring events
- event capacity and waitlist

Out of scope for core:

- users browsing all school clubs without invitation
- anyone self-assigning admin access to an existing club
- SMS, email, or push notifications
- payment collection
- complex permission levels

## Teaching Thesis

Core idea: `Systems Thinking`

Possible core idea blurb:

> Learn how real apps connect roles, shared data, and multiple workflows so each part of the product affects the others.

This challenge is not mainly about club management. It is about designing a system where the same data powers different experiences for different users.

## Challenge Recipe Implications

This should be a multi-session Level 4 challenge. It is too complex for a short 3 to 5 prompt build.

Recommended sessions:

1. Plan the product and data model.
2. Set up auth, roles, and club creation.
3. Build the admin dashboard.
4. Build member invite and member view.
5. Add events and signups.
6. Add announcements and in-app updates.
7. Test permissions and polish.

The recipe should explicitly teach students to ask Lovable to plan before building. The challenge should also teach students to test with two accounts: one admin and one member.

## Implementation Complexity

Student app complexity: very high.

This is the most complex challenge so far because it introduces all of the following at once:

- authentication
- role-based views
- persistent database
- relational data
- invite flows
- admin CRUD workflows
- member-facing workflows
- permission testing

This is appropriate for Level 4 if the recipe breaks the build into clear sessions and keeps each session focused.

Repo implementation complexity: low to medium if this stays content-only.

The current site can render a long challenge detail page from `src/data/challenges.ts`, so adding the challenge as content is straightforward. The complexity rises to medium if we want better Level 3 support in the Vibe Coding Academy site, such as explicit session sections, stretch goals, or separate admin/member flow diagrams. The current data model does not have dedicated fields for sessions or stretch ideas.

## Open Questions

- Should QR codes be core or stretch?
- Should the member invite require an invite code, an invite link, or both?
- Should the first admin be forced through a "Start a club" flow immediately after signup?
- Should admins be called admins, officers, or club managers in student-facing copy?
- Should cancelled events remain visible as cancelled, or disappear from the member view?
- How much database terminology should the recipe expose versus hide behind Lovable prompts?
- What Level 3 challenge should bridge from single-user apps into shared-product thinking before Club Manager?
