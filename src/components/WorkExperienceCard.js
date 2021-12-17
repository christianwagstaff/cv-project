import React from "react";
import Edit from "./icons/Edit";
import Plus from "./icons/Plus";

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
      <Edit onClick={props.editExperience} />
    </div>
  );
};

export default class GenInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.addNewExperience = this.addNewExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
  }
  addNewExperience() {
    this.props.onEditClick("experience");
  }

  editExperience(id) {
    this.props.editExperience(id);
  }

  render() {
    return (
      <Card>
        <div className="card-top">
          <h1>Experience</h1>
          <div className="button-list">
            <Plus onClick={this.addNewExperience} />
          </div>
        </div>
        <div className="experienceList left-indent">
          {[...this.props.jobList].map((job) => {
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
                editExperience={() => this.editExperience(key)}
              />
            );
          })}
        </div>
      </Card>
    );
  }
}
