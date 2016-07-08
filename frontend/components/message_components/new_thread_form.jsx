const React = require('react');
const PropTypes = React.PropTypes;
const ThreadStore = require('../../stores/thread_store');
const ThreadActions = require('../../actions/thread_actions');
const hashHistory = require('react-router').hashHistory;

const NewThreadForm = React.createClass({
  onChange(){
    if ($.isEmptyObject(ThreadStore.threads())){
      return false;
    } else {
      const threadId = ThreadStore.threadByUsername(this.props.params.username);
      hashHistory.push('/messages/' + threadId);
    }
  },
  componentDidMount(){
    this.listener = ThreadStore.addListener(this.onChange);
    ThreadActions.createThread(this.props.params.username);
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  render: function() {
    return (
      <div/>
    );
  }

});

module.exports = NewThreadForm;
