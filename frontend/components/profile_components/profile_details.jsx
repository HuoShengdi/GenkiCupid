const React = require('react');
const StringUtils = require('../../util/string_utils');
const ProfileDetailItem = require('./profile_detail_item');
const SessionStore = require('../../stores/session_store');


const ProfileDetails = React.createClass({
  openEditForm(){

  },
  render: function() {
    const keys = Object.keys(this.props.profile);
    const details = keys.map((key)=>{
      if (!["id", "username","avatar_url","postal_code"].includes(key)){
        let fieldName = key;
        let fieldValue = "";

        if (typeof(this.props.profile[key]) === "string"){
          fieldValue = StringUtils.capitalize(this.props.profile[key]);
        } else {
          fieldValue = this.props.profile[key];
        }

        if (fieldName === "rel_status") {
          fieldName = "Relationship Status";
        } else {
          fieldName = StringUtils.capitalize(fieldName);
        }

        return (
          <ProfileDetailItem
            field={fieldName}
            value={fieldValue}
            key={key} />
        );
      }
    });
    return (
      <div className="profile-details">
        <h4>Details
        {(this.props.profile.id === SessionStore.currentUser.id ?
          <span onClick={this.openEditForm}>Edit</span> : "")}</h4>
        {details}
      </div>
    );
  }

});

module.exports = ProfileDetails;
