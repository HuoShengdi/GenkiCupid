# GenkiCupid

[Heroku link][heroku]

[heroku]: http://genkicupid.herokuapp.com

## Minimum Viable Product

GenkiCupid is a web application inspired by OKCupid that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Browse and search other users by location and ‘looking for’
    - [x] Smooth, bug-free navigation
    - [x] Adequate seed data to demonstrate the site's features
    - [x] Adequate CSS styling
- [x] Messaging
  - [x] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Personality questions   
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Match percentages based on question answers
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Profile Model, dependent models, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** A single user's profile information can be created, read, and edited through the API

- [x] create `Profile` React components
- [x] create `Profile` store
- [x] set up API utils to fetch to store and update components
- [x] build profile API actions
- [x] jbuilder views for profile
- [x] build Essay model and jbuilder views

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Essays belong to a profile and Visits belong to a user
Essays can be read and edited on profile page, recent Visits are displayed on user Home page

- [x] be able to fetch a user's essays
- [x] build basic router path
- [x] build `Home` page stub, set as root path
- [x] complete `EssayItem` components

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Style components into readable state

- [x] Use CSS to style all components

### Phase 5: Questions (1 day, W2 Tu 12pm)

**Objective:** Questions and their answers are required to generate a user's match profile

- [x] create `Question`, `AnswerOption`, and `Answer` models
- [x] Build API, Flux loop, and components for CRUD on Answers
- [x] have basic set of seed data for Questions and AnswerOptions
- [x] be able to generate match relation between users (`Match` model)

### Phase 6: Matches (1.5 days, W2 W 6pm)

**Objective:** Matches are simply other users' profiles, matching the user's `looking_for` parameters and sorted by match %

- [ ] be able to view and edit user's "looking for" through profile
- [x] search other profiles by "looking for"
- [x] create `Match` store, storing basic profile information
- [x] jbuilder view for profiles found through match search
- [x] `MatchesIndex` component displays set number of found matches
- [x] sort matches by comparing match profiles from Answer data and sort descending

### Phase 7: Messaging (1.5 days, W2 F 12pm)

**Objective:** Users can send messages to each other

- [x] create `Message` model
- [ ] Build API, Flux loop, and components for CRUD on Messages
- [ ] Messages are sorted into conversations, sorted by id of other party in each message and ordered by timestamps
- [ ] *Bonus* Attempt to integrate Sendbird API for real time chat windows

### Phase 8: Styling Cleanup and Seeding (0.5 days, W2 F 6pm)

**Objective:** Improve UX with good styling and seed data

- [ ] generate at least 20 profiles and 20 questions to be answered on the profiles
- [x] pleasing color scheme
- [x] guest login
- [ ] seed guest account with message history

### Bonus:
- [ ] Sendbird API real time chat
- [ ] friendly_ids gem to access profiles by profiles/:username instead of profiles/:id
- [ ] Ability to see profiles you have recently visited and profiles of those who have visited you

[phase-one]: docs/phases/phase1.md
[phase-two through phase-4]: docs/phases/phase2-4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docs/phases/phase6.md
[phase-seven]: docs/phases/phase7.md
