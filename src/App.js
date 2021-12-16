import "./style/reset.css";
import "./style/app.css";
import React from "react";
// import EducationalExperience from "./components/forms/EducationalExperience";
import GeneralInfoPopup from "./components/forms/GeneralInfoPopup";
// import WorkExperience from "./components/forms/WorkExperience";
import GenInfoCard from "./components/GeneralInfoCard.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideGenInfo: false,
      genInfo: {
        name: "Christian Wagstaff",
        headline: "A Headline Here",
        school: "CSUCI",
        location: "Ventura, CA",
      },
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
    const defaultGenValues = { ...this.state.genInfo };
    return (
      <div className="App">
        <GenInfoCard
          onEditClick={this.hideComponent}
          {...defaultGenValues}
        ></GenInfoCard>
        <GenInfoCard {...defaultGenValues}></GenInfoCard>
        {this.state.showHideGenInfo && (
          <GeneralInfoPopup
            {...defaultGenValues}
            onCloseClick={this.hideComponent}
          />
        )}
      </div>
    );
  }
}
