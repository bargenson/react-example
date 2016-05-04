import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

const todoSource = {
  beginDrag(props) {
    return {
      description: props.description,
      status: props.status
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Todo extends Component {

  getChangeStatusHandler(newStatus) {
    const that = this;
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
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
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

export default DragSource(ItemTypes.TODO, todoSource, collect)(Todo);
