import "./style/reset.css";
import "./style/app.css";
import React from "react";
import uniqid from "uniqid";
import GenInfoCard from "./components/GeneralInfoCard.js";
import About from "./components/About";
import WorkExperienceCard from "./components/WorkExperienceCard";
import WorkExperienceForm from "./components/forms/WorkExperiencePopup";
import WorkExperienceEditForm from "./components/forms/WorkExperienceEditPopup";
import Skills from "./components/Skills";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideExperience: false,
      showHideEditExperience: false,
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
      editJobTitle: "",
      editJobLocation: "",
      editJobYears: "",
      editJobDescription: "",
      editJobId: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleDeleteJob = (id) => {
    const oldArray = this.state.workExperience;
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    const newArray = [
      ...oldArray.slice(0, selectedIndex),
      ...oldArray.slice(selectedIndex + 1),
    ];
    this.setState({
      workExperience: newArray,
    });
  };

  handleSubmitEditJob = (e) => {
    e.preventDefault();
    const oldArray = this.state.workExperience;
    const title = this.state.editJobTitle;
    const years = this.state.editJobYears;
    const description = this.state.editJobDescription;
    const location = this.state.editJobLocation;
    const id = this.state.editJobId;
    const updatedJob = {
      id: id,
      title: title,
      location: location,
      years: years,
      description: description,
    };
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    this.setState({
      workExperience: replaceAt(oldArray, selectedIndex, updatedJob),
    });
    this.hideComponent("editExperience");
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
    switch (name) {
      case "experience":
        this.setState({ showHideExperience: !this.state.showHideExperience });
        break;
      case "editExperience":
        this.setState({
          showHideEditExperience: !this.state.showHideEditExperience,
        });
        break;
      default:
        Error("HideShow went wrong.");
    }
  }

  editWorkExperience = (id) => {
    const selectedJob = this.state.workExperience.filter(
      (job) => job.id === id
    )[0];
    const title = selectedJob.title;
    const years = selectedJob.years;
    const description = selectedJob.description;
    const location = selectedJob.location;
    this.setState({
      editJobId: id,
      editJobTitle: title,
      editJobLocation: location,
      editJobYears: years,
      editJobDescription: description,
    });
  };

  render() {
    const newJobState = {
      title: this.state.newJobTitle,
      years: this.state.newJobYears,
      description: this.state.newJobDescription,
      location: this.state.newJobLocation,
    };
    const editJobState = {
      title: this.state.editJobTitle,
      years: this.state.editJobYears,
      description: this.state.editJobDescription,
      location: this.state.editJobLocation,
    };
    return (
      <div className="App">
        <GenInfoCard />
        <About />
        <WorkExperienceCard
          onEditClick={this.hideComponent}
          jobList={this.state.workExperience}
          editExperience={this.editWorkExperience}
          deleteExperience={this.handleDeleteJob}
        />
        {this.state.showHideExperience && (
          <WorkExperienceForm
            {...newJobState}
            onCloseClick={this.hideComponent}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitNewJob}
          />
        )}
        {this.state.showHideEditExperience && (
          <WorkExperienceEditForm
            {...editJobState}
            onCloseClick={this.hideComponent}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitEditJob}
          />
        )}
        <Skills />
      </div>
    );
  }
}

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
