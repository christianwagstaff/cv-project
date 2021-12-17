import React from "react";
import "../../style/popup.css";
import Close from "../icons/Close";

export default class WorkExperienceEditForm extends React.Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.props.onCloseClick("editExperience");
  }
  handleChange(e) {
    this.props.onChange(e);
  }
  handleSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup-top">
          <h1>Edit Work Experience</h1>
          <Close onClick={this.handleClose} />
        </div>
        <form className="general-info-form" onSubmit={this.handleSubmit}>
          <label>
            Job Title:
            <input
              name="newJobTitle"
              type="text"
              value={this.props.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Business:
            <input
              name="newJobLocation"
              type="text"
              value={this.props.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Years Worked:
            <input
              name="newJobYears"
              type="text"
              value={this.props.years}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Describe Basic Job Duties:
            <input
              name="newJobDescription"
              type="text"
              value={this.props.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
