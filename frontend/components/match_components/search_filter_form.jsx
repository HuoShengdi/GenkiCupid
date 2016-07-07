const React = require('react');
const MatchStore = require('../../stores/match_store');
const MatchActions = require('../../actions/match_actions');


const SearchFilterForm = React.createClass({
  getInitialState(){
    return MatchStore.searchFilter();
  },
  onChange(){
    this.setState(MatchStore.searchFilter());
  },
  updateFilter(){
    MatchActions.setFilter(this.state);
  },
  componentDidMount(){
    this.listener = MatchStore.addListener(this.onChange);
    MatchActions.getFilter();
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  render: function() {
    const genderStr = (this.state.gender === "male" ? "Men" : "Women");
    const ageStr = `ages ${this.state.min_age}-${this.state.max_age}`;
    return (
      <div id='search-filter-form'>
        <span className='filter-wrapper'>
          <button className='search-filter-button'>{genderStr}</button>
          <div id='gender-popover' className='filter-popover'>

          </div>
        </span>
        <span> who are </span>
        <span className='filter-wrapper'>
          <button className='search-filter-button'>{ageStr}</button>
          <div id='age-popover' className='filter-popover'>

          </div>
        </span>


      </div>
    );
  }

});

module.exports = SearchFilterForm;
