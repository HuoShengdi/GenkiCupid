# Phase 7: Messaging  1.5 days

# Rails
### Models
* Message

### Controllers
* MessagesController

### Views
messages/show.json.jbuilder

## Flux
### Views (React Components)
* ConversationList
* ConversationListItem
* ConversationDetail

### Stores
* Conversations (store messages containing user's ID indexed by other party's user_id)

### Actions
* MessageActions.fetchMessages - passes in current user's id and matches vs author & recipient
* MessageActions.receiveMessages
* MessageActions.postMessage
* MessageActions.receiveSingleMessage
* MessageActions.destroyMessage
* MessageActions.removeMessage

### ApiUtil
* ApiUtil.fetchMessages
* ApiUtil.postMessage
* ApiUtil.destroyMessage

## Gems/Libraries
Sendbird chat API
