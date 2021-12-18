import React from "react";
import Plus from "./icons/Plus";
import Delete from "./icons/Delete";
import Edit from "./icons/Edit";

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

export default class Skills extends React.Component {
  constructor() {
    super();
    this.editSkill = this.editSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  editSkill(id) {
    this.props.editSkill(id);
  }

  deleteSkill(id) {
    this.props.deleteSkill(id);
  }

  render() {
    return (
      <Card>
        <div className="card-top">
          <h1>Skills</h1>
          <div className="button-list">
            <Plus />
          </div>
        </div>
        <div className="experienceList">
          {[...this.props.skillList].map((skill) => {
            let key = skill.id;
            let title = skill.skill;
            return (
              <Skill
                key={key}
                skill={title}
                deleteSkill={() => this.deleteSkill(key)}
                editSkill={() => this.editSkill(key)}
              />
            );
          })}
        </div>
      </Card>
    );
  }
}
