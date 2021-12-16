import React from "react";

export default class EducationalExperience extends React.Component {
    render() {
        return (
            <form className="education-form">
                <label>
                    School: 
                    <input
                        name="inputSchoolName"
                        type="tesxt"
                        value={this.props.inputSchoolName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Major: 
                    <input
                        name="inputSchoolMajor"
                        type="text"
                        value={this.props.inputSchoolMajor}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Day Started: 
                    <input
                        name="inputSchoolStart"
                        type="date"
                        value={this.props.inputSchoolStart}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Day Ended: 
                    <input
                        name="inputSchoolEnd"
                        type="date"
                        value={this.props.inputSchoolEnd}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        )
    }
}