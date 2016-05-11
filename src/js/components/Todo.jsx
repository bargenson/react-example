import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { TODO } from '../constants/ItemTypes';
import { OPEN, IN_PROGRESS, DONE } from '../constants/TodoStatus';

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
      case OPEN: return <a href="#" onClick={this.handlePromotion.bind(this)}>Start</a>;
      case IN_PROGRESS: return <a href="#" onClick={this.handlePromotion.bind(this)}>End</a>;
      case DONE: return;
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
