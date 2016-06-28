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
* Essays

### Actions
* ProfileActions.fetchProfile
* ProfileActions.receiveProfile
* ProfileActions.createProfile
* ProfileActions.updateProfile
* ProfileActions.destroyProfile



### ApiUtil
* ApiUtil.fetchProfile
* ApiUtil.createProfile
* ApiUtil.editProfile
* ApiUtil.destroyProfile

## Gems/Libraries
* Flux Dispatcher (npm)
* React Router (npm)
* Twitter Bootstrap
