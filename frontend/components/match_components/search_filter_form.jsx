const React = require('react');
const OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
const Popover = require('react-bootstrap/lib/Popover');
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
    MatchActions.updateFilter(this.state);
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
      genderStr = (this.state.gender === "male" ? "Men" : "Women");
    }
    const ageStr = `ages ${this.state.min_age}-${this.state.max_age}`;

    const distStr = (this.state.distance ? ` within ${this.state.distance} miles` : `anywhere`);

    const genderPopover = (
      <Popover id='gender-popover' className='filter-popover' title="Show me">
        <div className='content-wrapper'>
          <label className='filter-label'>
          <input type="radio"
            value="male"
            onChange={this.update('gender')}
            checked={this.state.gender === "male"} />
            Men
          </label>
          <label className='filter-label'>
          <input type="radio"
            value="female"
            onChange={this.update('gender')}
            checked={this.state.gender === "female"} />
            Women
          </label>
          <label className='filter-label'>
          <input type="radio"
            value={"everyone"}
            onChange={this.update('gender')}
            checked={this.state.gender === "everyone"} />
            Everyone
          </label>
        </div>
      </Popover>
  );

    const agePopover = (
      <Popover id='age-popover' className='filter-popover' title="Ages">
        <div className='content-wrapper'>
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
      </Popover>
    );

    const distPopover = (
      <Popover id='dist-popover' className='filter-popover' title='Distance'>
        <div className='content-wrapper'>
          <input type="text"
            value={this.state.distance ? this.state.distance : ""}
            onChange={this.update('distance')}
            className='dist-filter-input'/>
          <span>miles away</span>
        </div>
      </Popover>
    );

    return (
      <div id='search-filter-form'>
        <span className='filter-wrapper'>
          <OverlayTrigger trigger="click" rootClose
            placement="bottom"
            overlay={genderPopover}
            onExiting={this.updateFilter}>
            <button className='search-filter-button'>{genderStr}</button>
          </OverlayTrigger>
        </span>
        <span> who are </span>
        <span className='filter-wrapper'>
          <OverlayTrigger trigger="click" rootClose
            placement="bottom"
            overlay={agePopover}
            onExiting={this.updateFilter}>
            <button className='search-filter-button'>{ageStr}</button>
          </OverlayTrigger>
        </span>
        <span className='filter-wrapper'>
          <OverlayTrigger trigger="click" rootClose
            placement="bottom"
            overlay={distPopover}
            onExiting={this.updateFilter}>
            <button className='search-filter-button'>{distStr}</button>
          </OverlayTrigger>
        </span>


      </div>
    );
  }

});

module.exports = SearchFilterForm;
