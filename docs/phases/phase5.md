# Phase 5: Questions
## Rails
### Models
* Question
* AnswerOption
* Answer

### Controllers
* QuestionsController - answer options are always rendered with the question
* AnswersController - user's chosen answers to questions - used to build match data

### Views
* questions/show.json.jbuilder

## Flux
### Views (React Components)
* NewQuestion
* QuestionForm
* AnswerList
* AnswerListItem

### Stores
* Questions
* Answers

### Actions
* QuestionActions.fetchNewQuestion
* QuestionActions.receiveNewQuestion
* AnswerActions.fetchAnswers
* AnswerActions.receiveAnswers
* AnswerActions.fetchSingleAnswer
* AnswerActions.receiveSingleAnswer
* AnswerActions.addAnswer
* AnswerActions.updateAnswer
* AnswerActions.destroyAnswer

### ApiUtil


## Gems/Libraries
