import React from "react";
import "../../style/popup.css";
import Close from "../icons/Close";

export default class GeneralInfoPopup extends React.Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.props.onCloseClick("genInfo");
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
          <h1>Edit Intro</h1>
          <Close onClick={this.handleClose} />
        </div>
        <form className="general-info-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="genInfoNameEdit"
              type="text"
              value={this.props.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Headline:
            <input
              name="genInfoHeadlineEdit"
              type="text"
              value={this.props.headline}
              onChange={this.handleChange}
            />
          </label>
          <label>
            School:
            <input
              name="genInfoSchoolEdit"
              type="text"
              value={this.props.school}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Location:
            <input
              name="genInfoLocationEdit"
              type="text"
              value={this.props.location}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
