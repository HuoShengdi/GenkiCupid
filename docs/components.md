## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Home**
    * Suggestions
    * Visits
      * VisitItem
    * NewQuestion
      * QuestionForm
  * **MatchesIndex**
    * MatchList
      * MatchListItem
  * **Profile**
    * ProfileHeader
    * ProfileDetails
    * ProfileTabs
    * ProfileContent
      * ProfileAbout
        * EssayItem
      * **ProfileQuestions**
        * AnswerList
          * AnswerListItem
        * NewQuestion
          * QuestionForm
  * **Messages**
    * ConversationList
      * ConversationListItem
    * ConversationDetail
      * MessageList
        * MessageItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Home` **path:** index
  * **component:** `Home` **path:** `home`
  * **component:** `MatchesIndex` **path:** `matches`
  * **component:** `Profile` **path:** `profiles/:username`
    * **component:** `Questions` **path:** `/questions`
  * **component:** `Messages` **path:** `messages`
