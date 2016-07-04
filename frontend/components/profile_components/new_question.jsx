const React = require('react');
const QuestionActions = require('../../actions/question_actions');
const QuestionForm = require('./question_form')

const NewQuestion = React.createClass({
  getInitialState(){
    return {answering: false}
  },
  openForm(e){
    e.preventDefault();
    this.setState({answering:true});
    return false;
  },
  closeForm(e){
    e.preventDefault();
    this.setState({answering:false});
    return false;
  },
  skipQuestion(e){
    e.preventDefault();
    QuestionActions.fetchRandomQuestion(this.props.username);
    return false;
  },
  render() {
    if ($.isEmptyObject(this.props.question)) {
      return (
        <div>
          <span>You've answered all available questions!</span>
        </div>
      );
    }else if(!this.state.answering){
    return (
      <div>
        <span>{this.props.question.body}</span>
        <a href="#" onClick={this.openForm}>Answer</a>
        <a href="#" onClick={this.skipQuestion}>Skip</a>
      </div>
    );
  }else {
    return (
      <div>
        <span>{this.props.question.body}</span>
        <QuestionForm username={this.props.username} question={this.props.question} closeForm={this.closeForm}/>
      </div>
    );
  }
}
});

module.exports = NewQuestion;
