import React from "react";
import "../../style/popup.css";
import Close from "../icons/Close";

export default function GeneralInfoPopup(props) {
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
          <h1>Edit Intro</h1>
          <Close onClick={handleClose} />
        </div>
        <form className="general-info-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={props.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Headline:
            <input
              name="headline"
              type="text"
              value={props.headline}
              onChange={handleChange}
            />
          </label>
          <label>
            School:
            <input
              name="school"
              type="text"
              value={props.school}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              name="location"
              type="text"
              value={props.location}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
