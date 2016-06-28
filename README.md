# GenkiCupid

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

GenkiCupid is a web application inspired by OKCupid that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Browse and search other users by location and ‘looking for’
    - [ ] Smooth, bug-free navigation
    - [ ] Adequate seed data to demonstrate the site's features
    - [ ] Adequate CSS styling
- [ ] Messaging
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Personality questions   
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Match percentages based on question answers
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling


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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- [ ] create `Profile` model

### Phase 2: Profile Model, dependent models, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** A single user's profile information can be created, read, edited, and destroyed through the API

- [ ] create `Profile` React components
- [ ] create `Profile` store
- [ ] set up API utils to fetch to store and update components
- [ ] build profile API actions
- [ ] jbuilder views for profile
- [ ] build Essay and Visit models and jbuilder views

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Essays belong to a profile and Visits belong to a user
Essays can be read and edited on profile page, recent Visits are displayed on user Home page

- [ ] attach profile pic and username to Visit list items
- [ ] attach essays by user to fetch data of user's profile
- [ ] create `Visit` store
- [ ] build `Visit` API actions and requests
- [ ] build basic router path
- [ ] build `Home` page stub, set as root path
- [ ] complete `EssayItem` and `Visit` components

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Style components into readable state

- [ ] Use CSS to style all components

### Phase 5: Questions (1 day, W2 Tu 12pm)

**Objective:** Questions and their answers are required to generate a user's match profile

- [ ] create `Question`, `AnswerOption`, and `Answer` models
- [ ] Build API, Flux loop, and components for CRUD on Answers
- [ ] have basic set of seed data for Questions and AnswerOptions
- [ ] be able to generate a match profile object to compare with other users' profiles

### Phase 6: Matches (1.5 days, W2 W 6pm)

**Objective:** Matches are simply other users' profiles, matching the user's `looking_for` parameters and sorted by match %

- [ ] be able to view and edit user's "looking for" through profile
- [ ] search other profiles by "looking for"
- [ ] create `Match` store, storing basic profile information
- [ ] jbuilder view for profiles found through match search
- [ ] `MatchesIndex` component displays set number of found matches
- [ ] sort matches by comparing match profiles from Answer data and sort descending

### Phase 7: Messaging (1.5 days, W2 F 12pm)

**Objective:** Users can send messages to each other

- [ ] create `Message` model
- [ ] Build API, Flux loop, and components for CRUD on Messages
- [ ] Messages are sorted into conversations, sorted by id of other party in each message and ordered by timestamps
- [ ] *Bonus* Attempt to integrate Sendbird API for real time chat windows

### Phase 8: Styling Cleanup and Seeding (0.5 days, W2 F 6pm)

**Objective:** Improve UX with good styling and seed data

- [ ] generate at least 20 profiles and 20 questions to be answered on the profiles
- [ ] pleasing color scheme
- [ ] guest login
- [ ] seed guest account with message history

[phase-one]: docs/phases/phase1.md
[phase-two through phase-4]: docs/phases/phase2-4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docs/phases/phase6.md
[phase-seven]: docs/phases/phase7.md
