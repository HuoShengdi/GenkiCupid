const React = require('react');
const StringUtils = require('../../util/string_utils');

const AnswerListItem = React.createClass({
  getInitialState(){
    return {selected: this.props.answer.option_id};
  },

  render: function() {
    console.log(typeof(this.state.selected));
    const keys = Object.keys(this.props.answer.question_options);
    const options = keys.map(
      (key)=>{
        return (
        <div className='option-radio' key={key}>
          <input type="radio"
            value={key}
            onChange={this.optionChange}
            checked={this.state.selected.toString() === key}
            disabled='true'/>
          <label>
            {StringUtils.capitalize(this.props.answer.question_options[key])}
          </label>
        </div>
      );}
    );
    return (
      <div className='answer-list-item'>
        <span className='question-text'>{this.props.answer.question_text}</span>
        {options}
      </div>
    );
  }

});

module.exports = AnswerListItem;
