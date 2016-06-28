# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Users

- `GET /api/users/`
- `POST /api/users`
- `GET /api/users/:id`

### Session

- `GET /api/session/new`
- `POST /api/session`
- `DELETE /api/session`


### Profiles

- `GET /api/profiles/:username`
- `POST /api/profiles`
- `PATCH /api/profile/:username`
- `GET /api/profiles/`
  * accepts query params to filter matches by looking_for

### Questions

- `GET /api/questions` with answer options

### Answers

- `GET api/answers`
- `POST api/profiles/:username/answers`
- `PATCH api/profiles/:username/answers/:id`
- `DELETE api/profiles/:username/answers/:id`

### Messages

- `GET /api/messages`
  * accepts params (user ids) to filter down to conversations between users
- `POST /api/messages`
