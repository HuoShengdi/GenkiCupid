const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
  const Router = ReactRouter.Router;
  const Route = ReactRouter.Route;
  const IndexRoute = ReactRouter.IndexRoute;
  const hashHistory = ReactRouter.hashHistory;

const Home = require('./components/home');
const SignupForm = require('./components/signup_form');
const LoginForm = require('./components/login_form');
const Profile = require('./components/profile');
const NavBar = require('./components/nav_bar');

const SessionStore = require('./stores/session_store');

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
      <IndexRoute component={Home}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/profiles" component={Profile}>

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
    const root = document.getElementById('content');
    ReactDOM.render(appRouter, root);
  });
