const React = require('react');
const MessageActions = require('../../actions/message_actions');
const SessionStore = require('../../stores/session_store');
const PropTypes = React.PropTypes;

const NewMessageForm = React.createClass({
  getInitialState (){
    return {body: ""};
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
        author_id: SessionStore.currentUser().id,
        body: this.state.body,
        threadId: this.props.threadId
      };
    MessageActions.createMessage(formData);
    this.setState({body: ""});
  },

  render: function() {
    return (
      <div className='message-form-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.body} onChange={this.update("body")} placeholder='Type your message here'/>
          <button onClick={this.handleSubmit}>Post</button>
        </form>
      </div>
    );
  }

});

module.exports = NewMessageForm;
