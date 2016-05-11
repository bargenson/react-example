import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import Todo from './Todo.jsx';
import { TODO } from '../constants/ItemTypes';
import { DropTarget } from 'react-dnd';

const todoListTarget = {
  drop(props, monitor, component) {
    const todo = monitor.getItem();
    props.onTodoMoved(todo.id, props.title);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TodoList extends Component {

  handleTodoPromotion(todoId) {
    this.props.onTodoPromotion(todoId);
  }

  render() {
    const that = this;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <section className="todo-board__view grid__item grid__item--1-3">
        <h1>{this.props.title}</h1>
        {this.props.todos.map(function (todo, index) {
          return <Todo key={todo.id} id={todo.id} description={todo.description} status={todo.status} onPromote={that.handleTodoPromotion.bind(that)} />
        })}
      </section>
    );
  }

}

TodoList.propTypes = { 
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  onTodoPromotion: PropTypes.func.isRequired,
  onTodoMoved: PropTypes.func.isRequired
};

export default DropTarget(TODO, todoListTarget, collect)(TodoList);