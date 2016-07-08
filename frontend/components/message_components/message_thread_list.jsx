const React = require('react');
const ThreadStore = require('../../stores/thread_store');
const ThreadActions = require('../../actions/thread_actions');
const MessageStore = require('../../stores/message_store');
const ThreadListItem = require('./thread_list_item');

const MessageThreadList = React.createClass({
  getInitialState(){
    return {threads: ThreadStore.sortedThreads(), active: this.props.checkActive()};
  },

  onChange(){
    this.setState({threads: ThreadStore.sortedThreads()});
  },

  componentDidMount(){
    this.listener = ThreadStore.addListener(this.onChange);
    ThreadActions.fetchThreads();
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  componentWillReceiveProps(props){
    this.setState({active: this.props.checkActive()});
  },
  render: function() {
    const threadItems = this.state.threads.map((thread)=>{
      return (
        <ThreadListItem thread={thread} key={thread.id} active={this.state.active === thread.id.toString()}/>
      );
    });
    return (
      <div className='thread-list'>
        {threadItems}
      </div>
    );
  }

});

module.exports = MessageThreadList;
