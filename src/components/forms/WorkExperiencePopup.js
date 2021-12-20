import React from "react";
import "../../style/popup.css";
import Close from "../icons/Close";

export default function WorkExperienceForm(props) {
  function handleClose() {
    props.onCloseClick();
  }
  function handleChange(e) {
    props.onChange(e);
  }
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup-top">
          <h1>{props.popupTitle}</h1>
          <Close onClick={handleClose} />
        </div>
        <form className="general-info-form" onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              name="title"
              type="text"
              value={props.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Business:
            <input
              name="location"
              type="text"
              value={props.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Years Worked:
            <input
              name="years"
              type="text"
              value={props.years}
              onChange={handleChange}
            />
          </label>
          <label>
            Describe Basic Job Duties:
            <input
              name="description"
              type="text"
              value={props.description}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
