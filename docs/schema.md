# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## visits
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
visitor_id      | integer   | not null, foreign key (references users)
profile_id      | integer   | not null, foreign key (references profiles)

## profiles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
avatar_url      | string    | not null, default value
location        | string    | not null
visit_history   | string    | array
location        | string    | not null, json
birthdate       | datetime  | not null
gender          | string    | not null
orientation     | string    | not null
rel_status      | string    | not null
looking_for     | json      |

## essays
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
profile_id      | integer   | not null, foreign key (references profiles)
title           | string    | not null
body            | text      | not null

## questions
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
body            | text      | not null

## answeroptions

column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key (references questions), indexed
match_params    | string    | not null, json {attribute: points}

## answers
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
profile_id      | integer   | not null, foreign key (references profiles), indexed, unique [question_id]
question_id     | integer   | not null, foreign key (references questions), indexed
option_id       | integer   | not null, foreign key (references answeroptions), indexed

## messages
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed, unique [recipient_id]
recipient_id    | integer   | not null, foreign key (references users), indexed
body            | text      | not null

<!-- ## likes
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
like_id         | integer   | not null, foreign key (references users), indexed
user_id         | integer   | not null, foreign key (references users), indexed, unique[like_id] -->
