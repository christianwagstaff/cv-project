import React from "react";

export default class Delete extends React.Component {
  render() {
    return (
      <button className="delete" onClick={this.props.onClick}>
        <i className="fas fa-trash-alt"></i>
      </button>
    );
  }
}
