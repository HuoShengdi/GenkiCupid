# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_url      | string    | not null, default value
visit_history   | string    | array
location        | string    | not null, json
birthdate       | datetime  | not null
gender          | string    | not null
orientation     | string    | not null
rel_status      | string    | not null
search_params   | string    | not null, json

## questions
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
body            | text      | not null

## answers
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key (references questions), indexed
match_params    | string    | not null, json

## userquestions
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed, unique [question_id]
question_id     | integer   | not null, foreign key (references questions), indexed
answer_id       | integer   | not null, foreign key (references answers), indexed

## likes
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
like_id         | integer   | not null, foreign key (references users), indexed
user_id         | integer   | not null, foreign key (references users), indexed, unique[like_id]

## messages
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed, unique [recipient_id]
recipient_id    | integer   | not null, foreign key (references users), indexed
body            | text      | not null
