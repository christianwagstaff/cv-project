import React from "react";

export default class GeneralInfo extends React.Component {
  render() {
    return (
      <form className="general-info-form">
        <label>
          Name:
          <input
            name="inputName"
            type="text"
            value={this.props.inputName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          E-Mail:
          <input
            name="inputEmail"
            type="email"
            value={this.props.inputEmail}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            name="inputPhoneNumber"
            type="tel"
            value={this.props.inputPhoneNumber}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
