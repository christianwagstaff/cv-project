import "./style/reset.css";
import "./style/app.css";
import React from "react";
// import EducationalExperience from "./components/forms/EducationalExperience";
import GeneralInfo from "./components/forms/GeneralInfo";
// import WorkExperience from "./components/forms/WorkExperience";
import GenInfoCard from "./components/GeneralInfoCard.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideGenInfo: true,
    };
  }
  hideComponent(name) {
    switch (name) {
      case "genInfo":
        this.setState({ showHideGenInfo: !this.state.showHideGenInfo });
        break;
      default:
        this.setState({ showHideGenInfo: !this.state.showHideGenInfo });
    }
  }

  render() {
    const defaultGenValues = {
      name: "Christian Wagstaff",
      headline: "A Headline Here",
      school: "CSUCI",
      location: "Ventura, CA",
    };
    return (
      <div className="App">
        <GenInfoCard
          onEditClick={this.hideComponent}
          {...defaultGenValues}
        ></GenInfoCard>
        <GenInfoCard {...defaultGenValues}></GenInfoCard>
        <div>{this.state.showHideGenInfo && <GeneralInfo />}</div>
      </div>
    );
  }
}
