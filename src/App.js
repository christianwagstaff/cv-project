import "./style/reset.css";
import "./style/app.css";
import React from "react";
import uniqid from "uniqid";
import GeneralInfoPopup from "./components/forms/GeneralInfoPopup";
import GenInfoCard from "./components/GeneralInfoCard.js";
import About from "./components/About";
import WorkExperienceCard from "./components/WorkExperienceCard";
import WorkExperienceForm from "./components/forms/WorkExperiencePopup";
import WorkExperienceEditForm from "./components/forms/WorkExperienceEditPopup";
import Skills from "./components/Skills";
import SkillForm from "./components/forms/SkillPopup";

export default class App extends React.Component {
  constructor() {
    super();
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showHideGenInfo: false,
      showHideExperience: false,
      showHideEditExperience: false,
      showHideAddSkill: false,
      showHideEditSkill: false,
      genInfoName: "Christian Wagstaff",
      genInfoNameEdit: "Christian Wagstaff",
      genInfoHeadline: "A Headline Here",
      genInfoHeadlineEdit: "A Headline Here",
      genInfoSchool: "CSUCI",
      genInfoSchoolEdit: "CSUCI",
      genInfoLocation: "Ventura, CA",
      genInfoLocationEdit: "Ventura, CA",
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
      skillList: [
        { skill: "Skill1", id: uniqid() },
        { skill: "Skill2", id: uniqid() },
        { skill: "Skill3", id: uniqid() },
      ],
      newSkill: "",
      editSkillId: "",
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

  handleSubmitNewSkill = (e) => {
    e.preventDefault();
    const newSkill = { skill: this.state.newSkill, id: uniqid() };
    this.setState({
      skillList: [...this.state.skillList, newSkill],
    });
    this.clearNewJob();
    this.hideComponent("skill");
  };

  handleSubmitEditSkill = (e) => {
    e.preventDefault();
    const oldArray = this.state.skillList;
    const id = this.state.editSkillId;
    const updated = { skill: this.state.newSkill, id: id };
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    this.setState({
      skillList: replaceAt(oldArray, selectedIndex, updated),
    });
    this.hideComponent("editSkill");
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

  clearNewSkill() {
    this.setState({
      newSkill: "",
    });
  }

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
      case "genInfo":
        this.setState({ showHideGenInfo: !this.state.showHideGenInfo });
        break;
      case "about":
        this.setState({ showHideAbout: !this.state.showHideAbout });
        break;
      case "experience":
        this.setState({ showHideExperience: !this.state.showHideExperience });
        break;
      case "editExperience":
        this.setState({
          showHideEditExperience: !this.state.showHideEditExperience,
        });
        break;
      case "skill":
        this.setState({ showHideAddSkill: !this.state.showHideAddSkill });
        break;
      case "editSkill":
        this.setState({ showHideEditSkill: !this.state.showHideEditSkill });
        break;
      default:
        Error("HideShow went wrong.");
    }
  }

  editSkill = (id) => {
    const selected = this.state.skillList.filter((skill) => skill.id === id)[0];
    console.log(selected);
    const skill = selected.skill;
    this.setState({
      newSkill: skill,
      editSkillId: id,
    });
  };

  deleteSkill = (id) => {
    const oldArray = this.state.skillList;
    const selectedIndex = oldArray.findIndex((skill) => skill.id === id);
    const newArray = [
      ...oldArray.slice(0, selectedIndex),
      ...oldArray.slice(selectedIndex + 1),
    ];
    this.setState({
      skillList: newArray,
    });
  };

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
    const editJobState = {
      title: this.state.editJobTitle,
      years: this.state.editJobYears,
      description: this.state.editJobDescription,
      location: this.state.editJobLocation,
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
        <Skills
          skillList={this.state.skillList}
          editSkill={this.editSkill}
          deleteSkill={this.deleteSkill}
          addSkill={this.hideComponent}
        />
        {this.state.showHideAddSkill && (
          <SkillForm
            onCloseClick={this.hideComponent}
            popupName="skill"
            onChange={this.handleChange}
            onSubmit={this.handleSubmitNewSkill}
          />
        )}
        {this.state.showHideEditSkill && (
          <SkillForm
            skill={this.state.newSkill}
            onCloseClick={this.hideComponent}
            popupName="editSkill"
            onChange={this.handleChange}
            onSubmit={this.handleSubmitEditSkill}
          />
        )}
      </div>
    );
  }
}

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
