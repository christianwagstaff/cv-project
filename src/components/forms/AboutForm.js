import React from "react";
import Close from "../icons/Close";

export default class AboutForm extends React.Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.props.onCloseClick("about");
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
          <h1>Edit About</h1>
          <Close onClick={this.handleClose} />
        </div>
        <form className="about-form" onSubmit={this.handleSubmit}>
          <label>
            About:
            <textarea
              rows="10"
              name="aboutEdit"
              value={this.props.about}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
