import React, { Component, PropTypes } from 'react';

class Todo extends Component {

  render () {
    return (
      <article className="todo">
        <p>{this.props.description}</p>
      </article>
    );
  }

}

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Todo;