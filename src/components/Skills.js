import React, { useState } from "react";
import Plus from "./icons/Plus";
import Delete from "./icons/Delete";
import Edit from "./icons/Edit";
import uniqid from "uniqid";
import SkillForm from "./forms/SkillPopup";

const Card = (props) => {
  return <div className="card vert rounded">{props.children}</div>;
};

const Skill = (props) => {
  return (
    <div className="horizontal job skill left-indent">
      <h2>{props.skill}</h2>
      <div className="button-list">
        <Delete onClick={props.deleteSkill} />
        <Edit onClick={props.editSkill} />
      </div>
    </div>
  );
};

export default function Skills() {
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showEditSkill, setShowEditSkill] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [skillId, setSkillId] = useState("");
  const [skillList, setSkillList] = useState([
    { skill: "Skill1", id: uniqid() },
    { skill: "Skill2", id: uniqid() },
    { skill: "Skill3", id: uniqid() },
  ]);

  function editSkill(id) {
    const selected = skillList.filter((skill) => skill.id === id)[0];
    const skill = selected.skill;
    setNewSkill(skill);
    setSkillId(id);
    toggleSkill("edit");
  }
  function deleteSkill(id) {
    const oldArray = skillList;
    const selectedIndex = oldArray.findIndex((skill) => skill.id === id);
    const newArray = [
      ...oldArray.slice(0, selectedIndex),
      ...oldArray.slice(selectedIndex + 1),
    ];
    setSkillList(newArray);
  }
  function handleSubmitNewSkill(e) {
    e.preventDefault();
    const skill = { skill: newSkill, id: uniqid() };
    setSkillList([...skillList, skill]);
    clearNewSkill();
    setShowAddSkill(false);
  }
  function clearNewSkill() {
    setNewSkill("");
  }
  function toggleSkill(type) {
    switch (type) {
      case "new":
        setShowAddSkill(!showAddSkill);
        break;
      case "edit":
        setShowEditSkill(!showEditSkill);
        break;
      default:
        console.log("Error Toggle Skill");
    }
  }
  function handleChange(e) {
    setNewSkill(e.value);
  }
  function handleSubmitEditSkill(e) {
    e.preventDefault();
    const oldArray = skillList;
    const id = skillId;
    const updated = { skill: newSkill, id: id };
    const selectedIndex = oldArray.findIndex((job) => job.id === id);
    setSkillList(replaceAt(oldArray, selectedIndex, updated));
    setShowEditSkill(false);
  }

  return (
    <div>
      <Card>
        <div className="card-top">
          <h1>Skills</h1>
          <div className="button-list">
            <Plus onClick={() => toggleSkill("new")} />
          </div>
        </div>
        <div className="experienceList">
          {[...skillList].map((skill) => {
            let key = skill.id;
            let title = skill.skill;
            return (
              <Skill
                key={key}
                skill={title}
                deleteSkill={() => deleteSkill(key)}
                editSkill={() => editSkill(key)}
              />
            );
          })}
        </div>
      </Card>
      {showAddSkill ? (
        <SkillForm
          onCloseClick={() => toggleSkill("new")}
          popupName="New Skill"
          onChange={handleChange}
          onSubmit={handleSubmitNewSkill}
        />
      ) : null}
      {showEditSkill ? (
        <SkillForm
          onCloseClick={() => toggleSkill("edit")}
          popupName="Edit Skill"
          onChange={handleChange}
          onSubmit={handleSubmitEditSkill}
        />
      ) : null}
    </div>
  );
}

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
