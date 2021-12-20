import React, { useState } from "react";
import Edit from "./icons/Edit";
import Plus from "./icons/Plus";
import Delete from "./icons/Delete";
import uniqid from "uniqid";
import WorkExperienceForm from "./forms/WorkExperiencePopup";

export default function GenInfoCard(props) {
  const [showAddJob, setShowAddJob] = useState(false);
  const [showEditJob, setShowEditJob] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobYears, setJobYears] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobList, setJobList] = useState([
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
  ]);

  function handleSubmitNewJob(e) {
    e.preventDefault();
    const title = jobTitle;
    const years = jobYears;
    const description = jobDescription;
    const location = jobLocation;
    const newJob = {
      id: uniqid(),
      title: title,
      location: location,
      years: years,
      description: description,
    };
    setJobList([...jobList, newJob]);
    setShowAddJob(false);
    clearJobInfo();
  }

  function togglePopup(type) {
    switch (type) {
      case "new":
        setShowAddJob(!showAddJob);
        break;
      case "edit":
        setShowEditJob(!showEditJob);
        break;
      default:
        Error("Error Toggle Popup");
    }
  }
  function editExperience(id) {
    togglePopup("edit");
    editWorkExperience(id);
  }

  const editWorkExperience = (id) => {
    const selectedJob = jobList.filter((job) => job.id === id)[0];
    const title = selectedJob.title;
    const years = selectedJob.years;
    const description = selectedJob.description;
    const location = selectedJob.location;
    setJobDescription(description);
    setJobId(id);
    setJobTitle(title);
    setJobLocation(location);
    setJobYears(years);
  };

  const handleSubmitEditJob = (e) => {
    e.preventDefault();
    const oldArray = jobList;
    const title = jobTitle;
    const years = jobYears;
    const description = jobDescription;
    const location = jobLocation;
    const id = jobId;
    const updatedJob = {
      id: id,
      title: title,
      location: location,
      years: years,
      description: description,
    };
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    setJobList(replaceAt(oldArray, selectedIndex, updatedJob));
    setShowEditJob(false);
    clearJobInfo();
  };

  function clearJobInfo() {
    setJobDescription("");
    setJobId("");
    setJobLocation("");
    setJobTitle("");
    setJobYears("");
  }

  const handleDeleteJob = (id) => {
    const oldArray = jobList;
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    const newArray = [
      ...oldArray.slice(0, selectedIndex),
      ...oldArray.slice(selectedIndex + 1),
    ];
    setJobList(newArray);
  };

  function handleChange(e) {
    const value = e.target.value;
    switch (e.target.name) {
      case "title":
        setJobTitle(value);
        break;
      case "location":
        setJobLocation(value);
        break;
      case "description":
        setJobDescription(value);
        break;
      case "years":
        setJobYears(value);
        break;
      default:
        Error("Name Not Defined!");
    }
  }

  const jobInfo = {
    title: jobTitle,
    description: jobDescription,
    id: jobId,
    location: jobLocation,
    years: jobYears,
  };

  return (
    <div>
      <Card>
        <div className="card-top">
          <h1>Experience</h1>
          <div className="button-list">
            <Plus
              onClick={() => {
                togglePopup("new");
              }}
            />
          </div>
        </div>
        <div className="experienceList left-indent">
          {[...jobList].map((job) => {
            let key = job.id;
            let title = job.title;
            let location = job.location;
            let years = job.years;
            let description = job.description;
            return (
              <CardContent
                key={key}
                title={title}
                location={location}
                years={years}
                description={description}
                editExperience={() => editExperience(key)}
                deleteExperience={() => handleDeleteJob(key)}
              />
            );
          })}
        </div>
      </Card>
      {showAddJob ? (
        <WorkExperienceForm
          {...jobInfo}
          popupTitle="Add New Work Experience"
          onSubmit={handleSubmitNewJob}
          onChange={handleChange}
          onCloseClick={() => togglePopup("new")}
        />
      ) : null}
      {showEditJob ? (
        <WorkExperienceForm
          {...jobInfo}
          popupTitle="Edit Work Experience"
          onSubmit={handleSubmitEditJob}
          onChange={handleChange}
          onCloseClick={() => togglePopup("edit")}
        />
      ) : null}
    </div>
  );
}

const Card = (props) => {
  return <div className="card vert rounded">{props.children}</div>;
};

const Name = (props) => {
  return <h2 className="name bold">{props.name}</h2>;
};

const Years = (props) => {
  return <div className="years font-small">{props.years}</div>;
};

const Description = (props) => {
  return <div className="description">{props.description}</div>;
};

const Location = (props) => {
  return <div className="location">{props.location}</div>;
};

const CardContent = (props) => {
  return (
    <div className="card-content job">
      <div>
        <Name name={props.title} />
        <Location location={props.location} />
        <Years years={props.years} />
        <Description description={props.description} />
      </div>
      <div className="button-list">
        <Delete onClick={props.deleteExperience} />
        <Edit onClick={props.editExperience} />
      </div>
    </div>
  );
};

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
