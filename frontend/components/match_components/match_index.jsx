const React = require('react');
const MatchList = require('./match_list');

const MatchIndex = React.createClass({
  getInitialState(){
    return {matches: []};
  },
  componentDidMount(){
    
  },
  render: function() {
    return (
      <div>
        <MatchList />
      </div>
    );
  }

});

module.exports = MatchIndex;
