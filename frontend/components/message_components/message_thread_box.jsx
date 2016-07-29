const React = require('react');
const ReactDOM = require('react-dom');
const Message = require('./message');

const MessageThreadBox = React.createClass({
  componentDidUpdate(){
    const node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  },
  render () {
    const messageItems = this.props.messages.map((message)=>{

      return <Message message={message} key={message.id}/>;
    });
    return (
      <div className='messages-box-wrapper'>
        <div className='messages-box'>
          {messageItems}
        </div>
      </div>
    );
  }
});

module.exports = MessageThreadBox;
