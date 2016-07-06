const React = require('react');
const MatchItem = require('./match_item');

const MatchList = React.createClass({

  render: function() {

    const matchItems = this.props.matches.map((match)=>{
      return <MatchItem key={match.id} match={match}/>;
    });
    return (
      <div id='match-list'>
        {matchItems}
      </div>
    );
  }

});

module.exports = MatchList;
