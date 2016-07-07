const React = require("react");

const UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button className="upload-button" onClick={this.upload}>Add</button>
      </div>
    );
  }
});

module.exports = UploadButton;
