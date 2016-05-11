import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { TODO } from '../constants/ItemTypes';

const todoSource = {
  beginDrag(props) {
    return {
      id: props.id
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

  handlePromotion() {
    this.props.onPromote(this.props.id);
  }

  getPromoteStatusButton() {
    switch(this.props.status) {
      case "Open": return <a href="#" onClick={this.handlePromotion.bind(this)}>Start</a>;
      case "In Progress": return <a href="#" onClick={this.handlePromotion.bind(this)}>End</a>;
      case "Done": return;
    }
  }

  render () {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <article className="todo">
        <p>{this.props.description}</p>
        {this.getPromoteStatusButton()}
      </article>
    );
  }

}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onPromote: PropTypes.func.isRequired
};

export default DragSource(TODO, todoSource, collect)(Todo);
