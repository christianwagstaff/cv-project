import React, { useState } from "react";
import Edit from "./icons/Edit";
import GeneralInfoPopup from "./forms/GeneralInfoPopup";

const Card = (props) => {
  return <div className="card rounded">{props.children}</div>;
};

const Name = (props) => {
  return <h1 className="name">{props.name}</h1>;
};

const Headline = (props) => {
  return <div className="headline left-indent">{props.headline}</div>;
};

const School = (props) => {
  return <div className="school left-indent">{props.school}</div>;
};

const Location = (props) => {
  return <div className="location left-indent">{props.location}</div>;
};

export default function GenInfoCard() {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("Christian Wagstaff");
  const [headline, setHeadline] = useState("A Headline Here");
  const [school, setSchool] = useState("CSUCI");
  const [location, setLocation] = useState("Ventura, CA");

  function toggleEdit() {
    setEditHeadline(headline);
    setEditLocation(location);
    setEditName(name);
    setEditSchool(school);
    setShowEdit(!showEdit);
  }
  const [editName, setEditName] = useState("Christian Wagstaff");
  const [editHeadline, setEditHeadline] = useState("A Headline Here");
  const [editSchool, setEditSchool] = useState("CSUCI");
  const [editLocation, setEditLocation] = useState("Ventura, CA");

  const defaultGenEdit = {
    name: editName,
    headline: editHeadline,
    school: editSchool,
    location: editLocation,
  };

  function submitEdit(e) {
    e.preventDefault();
    setName(editName);
    setHeadline(editHeadline);
    setSchool(editSchool);
    setLocation(editLocation);
    setShowEdit(false);
  }

  function editInfo(e) {
    switch (e.name) {
      case "name":
        setEditName(e.value);
        break;
      case "headline":
        setEditHeadline(e.value);
        break;
      case "school":
        setEditSchool(e.value);
        break;
      case "location":
        setEditLocation(e.value);
        break;
      default:
        console.log(e.name);
    }
  }

  return (
    <div>
      <Card>
        <div className="card-content">
          <Name name={name} />
          <Headline headline={headline} />
          <School school={school} />
          <Location location={location} />
        </div>
        <Edit onClick={toggleEdit} />
      </Card>
      {showEdit ? (
        <GeneralInfoPopup
          {...defaultGenEdit}
          onCloseClick={toggleEdit}
          onChange={editInfo}
          onSubmit={submitEdit}
        />
      ) : null}
    </div>
  );
}
