import React from "react";
import Edit from "./icons/Edit";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const Name = (props) => {
  return <h1 className="name">{props.name}</h1>;
};

const Headline = (props) => {
  return <div className="headline">{props.headline}</div>;
};

const School = (props) => {
  return <div className="school">{props.school}</div>;
};

const Location = (props) => {
  return <div className="location">{props.location}</div>;
};
export default class GenInfoCard extends React.Component {
  render() {
    return (
      <Card className="rounded">
        <div className="card-content">
          <Name name={this.props.name} />
          <Headline headline={this.props.headline} />
          <School school={this.props.school} />
          <Location location={this.props.location} />
        </div>
        <Edit />
      </Card>
    );
  }
}
