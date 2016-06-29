# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_url      | string    | default: placeholder image
postal_code     | string    | not null, indexed
birthdate       | datetime  | not null, indexed
gender          | string    | not null, indexed
orientation     | string    | not null, indexed
rel_status      | string    | not null, indexed

## visits
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
visitor_id      | integer   | not null, foreign key (references users)
user_id         | integer   | not null, foreign key (references users)

## searchparams
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
gender          | string    | not null
orientation     | string    | not null
min_age         | integer   | not null, default: 18 (minimum: 15)
max_age         | integer   | not null, default: 49
rel_status      | string    | not null
postal_code     | string    | not null
distance        | integer   | not null

## matches
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
match_id        | integer   | not null, foreign key


## essays
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
title           | string    | not null
body            | text      | 

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


## answers
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed, unique [question_id]
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
