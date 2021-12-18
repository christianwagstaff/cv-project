import React from "react";
import Close from "../icons/Close";

export default class SkillForm extends React.Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.props.onCloseClick("skill");
  }
  handleChange(e) {
    this.props.onChange(e);
  }
  handleSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (
      <div className="popup-wrapper">
        <div className="popup">
          <div className="popup-top">
            <h1>Skill</h1>
            <Close onClick={this.handleClose} />
          </div>
          <form className="about-form" onSubmit={this.handleSubmit}>
            <label>
              Skill:
              <input
                type="text"
                name="newSkill"
                value={this.props.skill}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
