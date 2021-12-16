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
          Headline:
          <input
            name="inputHeadline"
            type="email"
            value={this.props.inputHeadline}
            onChange={this.handleChange}
          />
        </label>
        <label>
          School:
          <input
            name="inputSchool"
            type="tel"
            value={this.props.inputSchool}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Location:
          <input
            name="inputLocation"
            type="tel"
            value={this.props.inputLocation}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
