const React = require('react');
const MessageStore = require('../../stores/message_store');
const ThreadStore = require('../../stores/thread_store');
const ThreadActions = require('../../actions/thread_actions');
const MessageActions = require('../../actions/message_actions');
const NewMessageForm =require('./new_message_form');
const Message = require('./message');

const MessageThread = React.createClass({
  getInitialState(){
    return {messages: MessageStore.orderedMessages(),
      thread: ThreadStore.threads()[this.props.params.threadId]};
  },
  updateMessages(){
    this.setState({messages: MessageStore.orderedMessages()});
  },
  updateThread(){
    this.setState({thread: ThreadStore.threads()[this.props.params.threadId]});
  },
  componentDidMount(){
    this.messageListener = MessageStore.addListener(this.updateMessages);
    this.threadListener = ThreadStore.addListener(this.updateThread);
    ThreadActions.fetchThread(this.props.params.threadId);
    MessageActions.fetchMessages(this.props.params.threadId);

  },
  componentWillUnmount(){
    this.threadListener.remove();
    this.messageListener.remove();

  },
  componentWillReceiveProps(props){
    this.setState({thread: ThreadStore.threads()[props.params.threadId]});
    MessageActions.fetchMessages(props.params.threadId);
  },
  render: function() {
    const messageItems = this.state.messages.map((message)=>{

      return <Message message={message} key={message.id}/>;
    });
    const title = this.state.thread ? this.state.thread.username : "";
    return (
      <div className='message-window-wrapper'>
        <div className='messages-title'>{title}</div>
        <div className='thread-display-box'>
          <div className='messages-box'>
            {messageItems}
          </div>
          <NewMessageForm threadId={this.props.params.threadId} />
        </div>
      </div>
    );
  }

});

module.exports = MessageThread;
