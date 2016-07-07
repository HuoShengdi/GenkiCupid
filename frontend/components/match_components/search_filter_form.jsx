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
  genderChange(e){
    this.setState({gender: e.target.value});
  },
  updateFilter(){
    MatchActions.setFilter(this.state);
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  componentDidMount(){
    this.listener = MatchStore.addListener(this.onChange);
    MatchActions.getFilter();
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  render: function() {
    let genderStr = "People";
    if (this.state.gender && this.state.gender !== "everyone"){
      genderStr = (this.state.gender === "male" ? "Men" : "Women")
    }
    const ageStr = `ages ${this.state.min_age}-${this.state.max_age}`;
    return (
      <div id='search-filter-form'>
        <span className='filter-wrapper'>
          <button className='search-filter-button'>{genderStr}</button>
          <div id='gender-popover' className='popover filter-popover'>
            <input type="radio"
              value="male"
              onChange={this.genderChange}
              checked={this.state.gender === "male"} />
            <label>Men</label>
            <input type="radio"
              value="female"
              onChange={this.genderChange}
              checked={this.state.gender === "female"} />
            <label>Women</label>
            <input type="radio"
              value={"everyone"}
              onChange={this.genderChange}
              checked={this.state.gender === "everyone"} />
            <label>Everyone</label>
          </div>
        </span>
        <span> who are </span>
        <span className='filter-wrapper'>
          <button className='search-filter-button'>{ageStr}</button>
          <div id='age-popover' className='popover filter-popover'>
            <input type="text"
              value={this.state.min_age}
              onChange={this.update('min_age')}
              className='age-filter-input'/>
            <span>-</span>
            <input type="text"
              value={this.state.max_age}
              onChange={this.update('max_age')}
              className='age-filter-input'/>
          </div>
        </span>


      </div>
    );
  }

});

module.exports = SearchFilterForm;
