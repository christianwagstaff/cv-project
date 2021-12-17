import "./style/reset.css";
import "./style/app.css";
import React from "react";
import uniqid from "uniqid";
// import EducationalExperience from "./components/forms/EducationalExperience";
import GeneralInfoPopup from "./components/forms/GeneralInfoPopup";
import GenInfoCard from "./components/GeneralInfoCard.js";
import About from "./components/About";
import AboutForm from "./components/forms/AboutForm";
import WorkExperienceCard from "./components/WorkExperienceCard";
import WorkExperienceForm from "./components/forms/WorkExperiencePopup";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideGenInfo: false,
      showHideAbout: false,
      showHideExperience: false,
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
      workExperience: [
        {
          id: uniqid(),
          title: "Bartender",
          location: "Black Angus Steakhouses",
          years: "Aug 2017 - Oct 2021",
          description: "Make Drinks nightly for many customers",
        },
        {
          id: uniqid(),
          title: "Credit Assistant",
          location: "Bank of the Sierra",
          years: "Aug 2017 - Oct 2021",
          description: "Pulled Credit Reports and created Spreadsheets",
        },
      ],
      newJobTitle: "",
      newJobLocation: "",
      newJobYears: "",
      newJobDescription: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
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

  handleSubmitNewJob = (e) => {
    e.preventDefault();
    const title = this.state.newJobTitle;
    const years = this.state.newJobYears;
    const description = this.state.newJobDescription;
    const location = this.state.newJobLocation;
    const newJob = {
      id: uniqid(),
      title: title,
      location: location,
      years: years,
      description: description,
    };
    this.setState({
      workExperience: [...this.state.workExperience, newJob],
    });
    this.hideComponent("experience");
    this.clearNewJob();
  };
  clearNewJob() {
    this.setState({
      newJobTitle: "",
      newJobLocation: "",
      newJobYears: "",
      newJobDescription: "",
    });
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "genInfo":
        this.setState({ showHideGenInfo: !this.state.showHideGenInfo });
        break;
      case "about":
        this.setState({ showHideAbout: !this.state.showHideAbout });
        break;
      case "experience":
        this.setState({ showHideExperience: !this.state.showHideExperience });
        break;
      default:
        Error("HideShow went wrong.");
    }
  }

  editWorkExperience = (id) => {
    console.log(id);
  };

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
    const newJobState = {
      title: this.state.newJobTitle,
      years: this.state.newJobYears,
      description: this.state.newJobDescription,
      location: this.state.newJobLocation,
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
        <WorkExperienceCard
          onEditClick={this.hideComponent}
          jobList={this.state.workExperience}
          editExperience={this.editWorkExperience}
        />
        {this.state.showHideExperience && (
          <WorkExperienceForm
            {...newJobState}
            onCloseClick={this.hideComponent}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitNewJob}
          />
        )}
      </div>
    );
  }
}
