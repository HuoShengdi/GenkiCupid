# Phase 2: Flux Architecture and Profile CRUD (2 days)

## Rails
### Models
 * Essay
 * Visit
### Controllers
  Api::EssaysController
  Api::VisitsController
### Views
  * essays/show.json.jbuilder
  * visits/show.json.jbuilder
## Flux
### Views (React Components)

* Profile
* ProfileHeader
* ProfileTabs
* ProfileContent
* ProfileAbout
* ProfileQuestions(stub)
* ProfileDetails
* EssayItem
* Visits
  * VisitItem

### Stores
* Profile
* Visits

### Actions
* ProfileActions.fetchProfile - essays packaged with profile
* ProfileActions.receiveProfile
* ProfileActions.createProfile
* ProfileActions.updateProfile
* ProfileActions.destroyProfile
* ProfileActions.removeProfile
* VisitActions.fetchVisited
* VisitActions.receiveVisited


### ApiUtil
* ApiUtil.fetchProfile
* ApiUtil.createProfile
* ApiUtil.editProfile
* ApiUtil.destroyProfile
* ApiUtil.fetchVisited

## Gems/Libraries
* Flux Dispatcher (npm)
* React Router (npm)
* Twitter Bootstrap
