import React from "react";

export default class Close extends React.Component {
  render() {
    return (
      <button className="close" onClick={this.props.onClick}>
        <i className="fas fa-times"></i>
      </button>
    );
  }
}
