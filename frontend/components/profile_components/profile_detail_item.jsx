const React = require('react');
const StringUtils = require('../../util/string_utils');


const ProfileDetailItem = React.createClass({


  render: function() {
    return (
      <dl className="detail-item">
        <dt>{this.props.field}</dt>
        <dd>{this.props.value}</dd>
      </dl>
    );
  }

});

module.exports = ProfileDetailItem;
