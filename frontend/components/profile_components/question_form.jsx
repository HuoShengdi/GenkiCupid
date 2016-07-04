const React = require('react');
const QuestionActions = require('../../actions/question_actions');
const StringUtils = require('../../util/string_utils');
const AnswerActions = require('../../actions/answer_actions');

const QuestionForm = React.createClass({
  getInitialState(){
    return {selected: 0}
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      username: this.props.username,
      question_id: this.props.question.id,
      option_id: this.state.selected
    }
    AnswerActions.createAnswer(formData);
  },
  componentWillReceiveProps(props){
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
      (el)=>{return (
        <input type="radio"
          value={el.id}
          onChange={this.optionChange}
          checked={this.state.selected === el.id}
          key={el.id}>
          {StringUtils.capitalize(el.body)}
        </input>
      );}
    )
    console.log(options);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.question.body}
        {options}
        <a href="#" onClick={this.handleSubmit}>Save Answer</a>
        <a href="#" onClick={this.skipQuestion}>Skip</a>
      </form>
    )
  }
})

module.exports = QuestionForm;
