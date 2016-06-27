# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Match Cycles

### Match API Request Actions

* `fetchMatches`
  0. invoked from `MatchList` `didMount`/`willReceiveProps`
  0. invoked from `Suggestions` `didMount`/`willReceiveProps`
  0. `GET /api/profiles` is called
  0. user `looking_for` is passed into parameters
  0. `receiveMatches` is set as the callback

### Match API Response Actions

* `receiveMatches`
  0. invoked from an API callback.
  0. `Match` store updates `_matches` and emits change.

### Store Listeners
  * `MatchList` listens to `Match` store
  * `Suggestions` listens to `Match` store

## Visit Cycles

### Visit API Request Actions

* `fetchVisited`
  0. invoked from `Visits` `didMount`
  0. `GET /api/profiles` is called
  0. user `visit_history` (array of user ids) is passed into parameters
  0. `receiveVisited` is set as the callback

### Visit API Response Actions

* `receiveVisited`
  0. invoked from API callback.
  0. `Visit` store updates `_visits` and emits change.

## Question Cycles

### Question API Request Actions

* `fetchNewQuestion`
  0. invoked from `NewQuestion`
  0. `GET /api/questions` is called, retrieves single question + associated answers
  0. `receiveQuestion` is set as the callback

### Question API Response Actions

* `receiveNewQuestion`
  0. invoked from API callback
  0. `Question` store updates `_newQuestion` and emits change.

## Answer Cycles

### Answer API Request Actions

* `fetchAnswers`
  0. invoked from `QuestionList`
  0. `GET /api/profiles/:username/answers` is called
  0. `receiveAnswers` is set as the callback

* `addAnswer`
  0. invoked from `QuestionForm` submit button `onClick`
  0. `POST /api/profiles/:username/answers` is called
  0. `receiveSingleAnswer` is set as the callback

* `updateAnswer`
  0. invoked from `QuestionForm` submit button `onClick`
  0. `PATCH /api/profiles/:username/answer/:id` is called
  0. `receiveSingleAnswer` is set as the callback

* `destroyAnswer`
  0. invoked from `QuestionListItem` delete button `onClick`
  0. `DELETE /api/profiles/:username/answer/:id` is called
  0. `removeAnswer` is set as the callback

### Answer API Response Actions

* `receiveAnswers`
  0. invoked from API callback
  0. `Question` store updates `_questions` and emits change

* `receiveSingleAnswer`
  0. invoked from API callback
  0. `Question` store updates `_questions[id]` and emits change

* `destroyAnswer`
  0. invoked from API callback
  0. `Question` store removes `_questions[id]` and emits change

### Store Listeners
  * `NewQuestion` component listens to `Question` store
  * `QuestionList` component listens to `Question` store


## Message Cycles

### Message API Request Actions

* `fetchConversation`
  0. invoked from `ConversationDetail`
  0. `GET /api/messages` is called
  0. `receiveConversation` is set as the callback

* `addMessage`
  0. invoked from `MessageForm` submit button `onClick`
  0. `POST /api/messages` is called
  0. `receiveSingleMessage` is set as the callback

* `destroyMessage`
  0. invoked from `MessageItem` delete button `onClick`
  0. `DELETE /api/message/:id` is called
  0. `removeMessage` is set as the callback

### Message API Response Actions

* `receiveConversation`
  0. invoked from API callback
  0. `Message` store updates `_messages` and emits change

* `receiveSingleMessage`
  0. invoked from API callback
  0. `Message` store updates `_messages[id]` and emits change

* `removeMessage`
  0. invoked from API callback
  0. `Message` store removes `_messages[id]` and emits change

### Store Listeners
  * `ConversationDetail` component listens to `Message` store
