const React = require('react');
const SearchFilterForm = require('./search_filter_form');
const SessionStore = require('../../stores/session_store');

const MatchHeader = React.createClass({

  render: function() {
    return (
      <div id='match-header'>
        <SearchFilterForm />
      </div>
    );
  }

});

module.exports = MatchHeader;
