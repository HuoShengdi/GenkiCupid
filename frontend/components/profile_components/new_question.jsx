const React = require('react');

const NewQuestion = React.createClass({

  render() {
    return (
      <div>
        <span>{this.props.question.body}</span>
      </div>
    );
  }

});

module.exports = NewQuestion;
