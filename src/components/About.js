import React, { useState } from "react";
import Edit from "./icons/Edit";
import AboutForm from "./forms/AboutForm";

const Card = (props) => {
  return <div className="card vert rounded">{props.children}</div>;
};

export default function About() {
  const [showAbout, setShowAbout] = useState(false);
  const [about, setAbout] = useState(
    "Skilled Problem Solver, with a demonstrated history of developing data pipelines to efficiently track sales data in a multi billion dollar bank. Strong multitasker and communicator, Created a data warehouse to track all loan processes, from application to boarding. Skilled Mathematician, with a long background in training and teaching. "
  );
  const [editAbout, setEditAbout] = useState(
    "Skilled Problem Solver, with a demonstrated history of developing data pipelines to efficiently track sales data in a multi billion dollar bank. Strong multitasker and communicator, Created a data warehouse to track all loan processes, from application to boarding. Skilled Mathematician, with a long background in training and teaching. "
  );
  const toggleEdit = () => {
    setShowAbout(!showAbout);
  };
  const handleChange = (e) => {
    setEditAbout(e.target.value);
  };
  const handleSubmit = () => {
    setAbout(editAbout);
    setShowAbout(false);
  };

  return (
    <div>
      <Card>
        <div className="card-top">
          <h1>About</h1>
          <Edit onClick={toggleEdit} />
        </div>
        <p className="left-indent about">{about}</p>
      </Card>
      {showAbout ? (
        <AboutForm
          about={editAbout}
          onCloseClick={toggleEdit}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
    </div>
  );
}
