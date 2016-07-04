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
        <div id='no-questions-message'>
          <span>You've answered all available questions!</span>
        </div>
      );
    }else if(!this.state.answering){
    return (
      <div className='inner-question-box'>
        <div className='question-text'>{this.props.question.body}</div>
        <a href="#" className='question-button'
          onClick={this.openForm}>Answer</a>
        <a href="#" className='question-button'
          onClick={this.skipQuestion}>Skip</a>
      </div>
    );
  }else {
    return (
      <div className='inner-question-box'>
        <span className='question-text'>{this.props.question.body}</span>
        <QuestionForm username={this.props.username} question={this.props.question} closeForm={this.closeForm}/>
      </div>
    );
  }
}
});

module.exports = NewQuestion;
