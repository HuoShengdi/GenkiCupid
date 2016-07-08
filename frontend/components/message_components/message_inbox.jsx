const React = require('react');
const MessageThreadList = require('./message_thread_list');

const MessageInbox = React.createClass({
  getInitialState(){
    if (this.props){
      return {active: this.props.params.threadId};
    } else {
      return {active: null};
    }
  },
  componentWillReceiveProps(props){
    this.setState({active: props.params.threadId});
  },
  checkActive(){
    return this.state.active;
  },
  render: function() {
    return (
      <div className='inbox-pane'>
        <div className='inbox-title'>
          <h2>Messages</h2>
        </div>
        <div className='thread-list-wrapper'>
          <MessageThreadList checkActive={this.checkActive}/>
        </div>
        <div className='thread-pane'>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = MessageInbox;
