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
  * **MatchesIndex**
    * MatchList
      * MatchListItem
  * **Profile**
    * ProfileHeader
    * ProfileTabs
    * ProfileContent
      * ProfileAbout
      * ProfileQuestions
        * QuestionList
          * QuestionListItem
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
