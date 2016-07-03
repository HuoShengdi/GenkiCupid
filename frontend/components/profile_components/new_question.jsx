const React = require('react');
const QuestionActions = require('../../actions/question_actions');

const NewQuestion = React.createClass({
  skipQuestion(){
    QuestionActions.fetchRandomQuestion(this.props.username);
  },
  render() {
    if ($.isEmptyObject(this.props.question)) {
      return (
        <div>
          <span>You've answered all available questions!</span>
        </div>
      )
    }else {
    return (
      <div>
        <span>{this.props.question.body}</span>
        <a href="#" onClick={this.skipQuestion}>Skip</a>
      </div>
    );
  }
}
});

module.exports = NewQuestion;
