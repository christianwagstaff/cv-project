import React from "react";
import Close from "../icons/Close";

export default function SkillForm(props) {
  function handleClose() {
    props.onCloseClick();
  }
  function handleChange(e) {
    props.onChange(e.target);
  }
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup-top">
          <h1>{props.popupName}</h1>
          <Close onClick={handleClose} />
        </div>
        <form className="about-form" onSubmit={handleSubmit}>
          <label>
            Skill:
            <input
              type="text"
              name="newSkill"
              value={props.skill}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
