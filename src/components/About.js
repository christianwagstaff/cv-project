import React from "react";
import Edit from "./icons/Edit";

const Card = (props) => {
  return <div className="card vert rounded">{props.children}</div>;
};

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.props.onEditClick("about");
  }

  render() {
    return (
      <Card>
        <div className="card-top">
          <h1>About</h1>
          <Edit onClick={this.handleEdit} />
        </div>
        <p className="left-indent about">{this.props.about}</p>
      </Card>
    );
  }
}
