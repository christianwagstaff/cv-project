import React from "react";

export default class Edit extends React.Component {
  render() {
    return (
      <button className="edit" onClick={this.props.onClick}>
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}
