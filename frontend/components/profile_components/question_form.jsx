const React = require('react');
const QuestionActions = require('../../actions/question_actions');
const StringUtils = require('../../util/string_utils');
const AnswerActions = require('../../actions/answer_actions');

const QuestionForm = React.createClass({
  getInitialState(){
    return {selected: 0};
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      username: this.props.username,
      question_id: this.props.question.id,
      option_id: this.state.selected
    };
    AnswerActions.createAnswer(formData);
    QuestionActions.fetchRandomQuestion(this.props.username);
  },
  componentWillReceiveProps(){
    this.setState({selected: 0});
  },
  optionChange(e){
    this.setState({selected: e.target.value});
  },
  skipQuestion(e){
    e.preventDefault();
    QuestionActions.fetchRandomQuestion(this.props.username);
  },
  render () {
    const options = this.props.question.answer_options.map(
      (el)=>{
        return (
        <div className='option-radio' key={el.id}>
          <input type="radio"
            value={el.id}
            onChange={this.optionChange}
            checked={this.state.selected === el.id.toString()} />
          <label>{StringUtils.capitalize(el.body)}</label>
        </div>
      );}
    );
    return (
      <form onSubmit={this.handleSubmit}>
        {options}
        <a href="#" className='question-button'
          onClick={this.handleSubmit}>Save Answer</a>
        <a href="#" className='question-button'
          onClick={this.skipQuestion}>Skip</a>
      </form>
    );
  }
});

module.exports = QuestionForm;
