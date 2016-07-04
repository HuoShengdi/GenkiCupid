const React = require('react');
const AnswerListItem = require('./answer_list_item');

const AnswerList = React.createClass({


  render: function() {
    const keys = Object.keys(this.props.answers);
    const answerItems = keys.map((key)=>{
      return <AnswerListItem answer={this.props.answers[key]} key={key}/>;
    });
    return (
      <div id='profile-answer-list'>
        <h3 id='answer-list-title'>Answered Questions:</h3>
        {answerItems}
      </div>
    );
  }

});

module.exports = AnswerList;
