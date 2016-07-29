const React = require('react');
const Modal = require('react-modal');

const StringUtils = require('../../util/string_utils');
const ProfileDetailItem = require('./profile_detail_item');
const ProfileDetailsForm = require('./profile_details_form');
const SessionStore = require('../../stores/session_store');

const ProfileDetails = React.createClass({
  getInitialState(){
    return {modalOpen: false};
  },
  closeModal: function(){
    this.setState({ modalOpen: false });
  },
  openModal: function(){
    this.setState({ modalOpen: true });
  },
  render: function() {
    const keys = Object.keys(this.props.profile);
    const details = keys.map((key)=>{
      if (!["id", "username","avatar_url","postal_code",
        "birthdate","orientation","rel_status"].includes(key)){
        let fieldName = key;
        let fieldValue = "";
        if (typeof(this.props.profile[key]) === "string"){
          fieldValue = StringUtils.capitalize(this.props.profile[key]);
        } else {
          fieldValue = this.props.profile[key];
        }

        return (
          <ProfileDetailItem
            field={fieldName}
            value={fieldValue}
            key={key} />
        );
      }
    });
    let shadeName = "windowshade";
    let klassName = "modal profile_modal";
    if (this.state.modalOpen){
      klassName += " show";
      shadeName += " show";
    }
    return (

      <div className="profile-details">
        <span id="details-title" className="details-top">Details</span>
        {(this.props.profile.id === SessionStore.currentUser().id ?
            <span id='details-edit-open' className="details-top" onClick={this.openModal}>Edit</span> : "")}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className={klassName}
          overlayClassName={shadeName}>
          <ProfileDetailsForm profile={this.props.profile} close={this.closeModal} />
        </Modal>
        {details}
      </div>
    );
  }

});

module.exports = ProfileDetails;
