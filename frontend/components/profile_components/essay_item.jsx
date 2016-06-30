const React = require('react');


const EssayItem = React.createClass({

  render: function() {
    return (
      <li>
        <h3>{this.props.essay.title}</h3>
        <p>{this.props.essay.body}</p>
      </li>
    );
  }

});

module.exports = EssayItem;
