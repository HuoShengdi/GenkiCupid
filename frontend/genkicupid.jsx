const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
  const Router = ReactRouter.Router;
  const Route = ReactRouter.Route;
  const IndexRoute = ReactRouter.IndexRoute;
  const hashHistory = ReactRouter.hashHistory;
const Modal = require('react-modal');

const Home = require('./components/home');
const SignupForm = require('./components/signup_form');
const LoginForm = require('./components/login_form');
const Profile = require('./components/profile');
const ProfileAbout = require('./components/profile_components/profile_about');
const ProfileQuestions = require('./components/profile_components/profile_questions');
const NavBar = require('./components/nav_bar');
const MatchIndex = require('./components/match_components/match_index');
const MessageInbox = require('./components/message_components/message_inbox');
const MessageThread = require('./components/message_components/message_thread');
const NewThreadForm = require('./components/message_components/new_thread_form');

const MessageActions = require('./actions/message_actions');
const ThreadActions = require('./actions/thread_actions');

const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const App = React.createClass({

  render () {
    return (
      <div className="app">
        <NavBar />
        <div className="app-main">
          {this.props.children}
        </div>

      </div>
    );
  }
});

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={_ensureLoggedIn}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/match" component={MatchIndex} onEnter={_ensureLoggedIn}/>
      <Route path="/profiles/:username" component={Profile} onEnter={_ensureLoggedIn}>
        <IndexRoute component={ProfileAbout}/>
        <Route path="/profiles/:username/about" component={ProfileAbout}/>
        <Route path="/profiles/:username/questions" component={ProfileQuestions}/>
      </Route>
      <Route path="/messages" component={MessageInbox} onEnter={_ensureLoggedIn}>
        <Route path="/messages/:threadId" component={MessageThread}/>
        <Route path="/messages/new/:username" component={NewThreadForm}/>
      </Route>

    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  window.messageActions = MessageActions;
  window.threadActions = ThreadActions;
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
