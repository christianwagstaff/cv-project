import React from "react";
import Close from "../icons/Close";

export default function AboutForm(props) {
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
          <h1>Edit About</h1>
          <Close onClick={handleClose} />
        </div>
        <form className="about-form" onSubmit={handleSubmit}>
          <label>
            About:
            <textarea
              rows="10"
              name="aboutEdit"
              value={props.about}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
