const React = require('react');

const EssayStore = require('../../stores/essay_store');
const EssayActions = require('../../actions/essay_actions');
const EssayItem = require('./essay_item');

const ProfileAbout = React.createClass({
  getInitialState(){
    return { essays: {}};
  },
  onChange(){
    this.setState({essays: EssayStore.essays()});
  },
  componentDidMount(){
    this.listener = EssayStore.addListener(this.onChange);
    EssayActions.fetchEssays(this.props.params.username);
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  componentWillReceiveProps(props){
    EssayActions.fetchEssays(props.params.username);
  },
  render () {
    const keys = Object.keys(this.state.essays);
    const essayItems = keys.map((key)=>{
      return (
        <EssayItem key={key}
          essay={this.state.essays[key]}
          username={this.props.params.username}/>
      );
    });
    return (
      <div className='profile-about'>
        <ul id='essay-list'>{essayItems}</ul>
      </div>
    );
  }
});

module.exports = ProfileAbout;
