const React = require('react');
const QuestionStore = require('../../stores/question_store');
const AnswerStore = require('../../stores/answer_store');
const QuestionActions = require('../../actions/question_actions');
const AnswerActions = require('../../actions/answer_actions');
const SessionStore = require('../../stores/session_store');

const NewQuestion = require('./new_question');
const AnswerList = require('./answer_list');


const ProfileQuestions = React.createClass({
  getInitialState(){
    return {question: QuestionStore.question(), answers: AnswerStore.answers()};
  },
  onNewQuestion(){
    this.setState({question: QuestionStore.question()});
  },
  onAnswerChange(){
    this.setState({answers: AnswerStore.answers()});
  },
  componentDidMount(){
    this.questionListener = QuestionStore.addListener(this.onNewQuestion);
    this.answerListener = AnswerStore.addListener(this.onAnswerChange);

    document.getElementById('pnav-questions').classList.add('active');
  },
  componentWillUnmount(){
    this.questionListener.remove();
    this.answerListener.remove();
    document.getElementById('pnav-questions').classList.remove('active');
  },

  render () {
    return (
      <div className='questions-box'>
        {(this.props.params.username === SessionStore.currentUser().username) ?
          <NewQuestion question={this.state.question} 
            username={this.props.params.username} /> : ""
        }
        <AnswerList answers={this.state.answers} />
      </div>
    );
  }
});

module.exports = ProfileQuestions;
