const React = require('react');
const EssayForm = require('./essay_form');
const SessionStore = require('../../stores/session_store');


const EssayItem = React.createClass({
  getInitialState(){
    return {editing: false};
  },
  openEdit(){
    this.setState({editing: true});
  },
  closeEdit(){
    this.setState({editing: false});
  },
  render: function() {
    const bodyText = this.props.essay.body;
    const body = <p className="essay-body">{bodyText}</p>;
    const editPane = (<EssayForm
                        close={this.closeEdit}
                        essay={this.props.essay}
                        username={this.props.username}/>);
    const editButton = (<button onClick={this.openEdit}>Edit</button>);
    return (
      <li className="essay">
        <h3>{this.props.essay.title}
          {(this.state.editing ||
            this.props.username !== SessionStore.currentUser().username) ?
            "" : editButton}</h3>
        {this.state.editing ? editPane : body}
      </li>
    );
  }

});

module.exports = EssayItem;
