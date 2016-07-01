const React = require('react');
const EssayActions = require('../../actions/essay_actions');

const EssayForm = React.createClass({
  getInitialState(){
    let essay = this.props.essay;
    return essay;
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      id: this.state.id,
      username: this.props.username,
      essay:{
        title: this.state.title,
        body: this.state.body
      }
    };
    EssayActions.editEssay(formData);
    this.props.close();
  },
  render() {
    return (
      <form className="essay-body">
        <textarea value={this.state.body} onChange={this.update("body")}></textarea>
        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={this.props.close}>Cancel</button>
      </form>
    );
  }

});

module.exports = EssayForm;
