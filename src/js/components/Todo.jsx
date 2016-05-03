import React, { Component, PropTypes } from 'react';

class Todo extends Component {

  getChangeStatusHandler(newStatus) {
    var that = this;
    return function () {
      that.props.onStatusChange(that.props.status, newStatus);
    }
  }

  getChangeStatusButton() {
    switch(this.props.status) {
      case "Open": return <a href="#" onClick={this.getChangeStatusHandler("In progress")}>Start</a>;
      case "In progress": return <a href="#" onClick={this.getChangeStatusHandler("Done")}>End</a>;
      case "Done": return;
    }
  }

  render () {
    return (
      <article className="todo">
        <p>{this.props.description}</p>
        {this.getChangeStatusButton()}
      </article>
    );
  }

}

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
};

export default Todo;