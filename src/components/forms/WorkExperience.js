import React from "react";

export default class WorkExperience extends React.Component {
  render() {
    return (
      <form className="work-experience-form">
        <label>
          Company Name:
          <input
            name="inputWorkName"
            type="text"
            value={this.props.inputWorkName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Position:
          <input
            name="inputWorkPosition"
            type="text"
            value={this.props.inputWorkPosition}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Main Tasks:
          <input
            name="inputWorkName"
            type="text"
            value={this.props.inputWorkTasks}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Date Started Working:
          <input
            name="inputWorkStart"
            type="date"
            value={this.props.inputWorkStart}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Date Ended Working:
          <input
            name="inputWorkEnded"
            type="date"
            value={this.props.inputWorkEnded}
            onChange={this.handleChange}
          />
          Enter Today's Date if this is still your current job.
        </label>
      </form>
    );
  }
}
