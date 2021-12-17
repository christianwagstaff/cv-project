import "./style/reset.css";
import "./style/app.css";
import React from "react";
// import EducationalExperience from "./components/forms/EducationalExperience";
import GeneralInfoPopup from "./components/forms/GeneralInfoPopup";
// import WorkExperience from "./components/forms/WorkExperience";
import GenInfoCard from "./components/GeneralInfoCard.js";
import About from "./components/About";
import AboutForm from "./components/forms/AboutForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideGenInfo: false,
      showHideAbout: false,
      genInfoName: "Christian Wagstaff",
      genInfoNameEdit: "Christian Wagstaff",
      genInfoHeadline: "A Headline Here",
      genInfoHeadlineEdit: "A Headline Here",
      genInfoSchool: "CSUCI",
      genInfoSchoolEdit: "CSUCI",
      genInfoLocation: "Ventura, CA",
      genInfoLocationEdit: "Ventura, CA",
      about:
        "Skilled Problem Solver, with a demonstrated history of developing data pipelines to efficiently track sales data in a multi billion dollar bank. Strong multitasker and communicator, Created a data warehouse to track all loan processes, from application to boarding. Skilled Mathematician, with a long background in training and teaching. ",
      aboutEdit:
        "Skilled Problem Solver, with a demonstrated history of developing data pipelines to efficiently track sales data in a multi billion dollar bank. Strong multitasker and communicator, Created a data warehouse to track all loan processes, from application to boarding. Skilled Mathematician, with a long background in training and teaching. ",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(value + name);
    this.setState({ [name]: value });
  };

  handleSubmitGenInfo = (e) => {
    e.preventDefault();
    const name = this.state.genInfoNameEdit;
    const headline = this.state.genInfoHeadlineEdit;
    const school = this.state.genInfoSchoolEdit;
    const location = this.state.genInfoLocationEdit;
    this.setState({
      genInfoName: name,
      genInfoHeadline: headline,
      genInfoLocation: location,
      genInfoSchool: school,
    });
    this.hideComponent("genInfo");
  };

  handleSubmitAbout = (e) => {
    e.preventDefault();
    const about = this.state.aboutEdit;
    this.setState({
      about: about,
    });
    this.hideComponent("about");
  };

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "genInfo":
        this.setState({ showHideGenInfo: !this.state.showHideGenInfo });
        break;
      case "about":
        this.setState({ showHideAbout: !this.state.showHideAbout });
        break;
      default:
        alert("HideShow went wrong.");
    }
  }

  render() {
    const defaultGenValues = {
      name: this.state.genInfoName,
      headline: this.state.genInfoHeadline,
      school: this.state.genInfoSchool,
      location: this.state.genInfoLocation,
    };
    const defaultGenEdit = {
      name: this.state.genInfoNameEdit,
      headline: this.state.genInfoHeadlineEdit,
      school: this.state.genInfoSchoolEdit,
      location: this.state.genInfoLocationEdit,
    };
    return (
      <div className="App">
        <GenInfoCard onEditClick={this.hideComponent} {...defaultGenValues} />
        {this.state.showHideGenInfo && (
          <GeneralInfoPopup
            {...defaultGenEdit}
            onCloseClick={this.hideComponent}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitGenInfo}
          />
        )}
        <About onEditClick={this.hideComponent} about={this.state.about} />
        {this.state.showHideAbout && (
          <AboutForm
            about={this.state.aboutEdit}
            onCloseClick={this.hideComponent}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitAbout}
          />
        )}
      </div>
    );
  }
}
