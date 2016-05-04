import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import Todo from './Todo.jsx';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const todoListTarget = {
  drop(props, monitor, component) {
    const todo = monitor.getItem();
    const newTodo = Object.assign({}, todo, { status: props.title });
    props.onTodoChange(todo, newTodo);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TodoList extends Component {

  getStatusChangeHandler(todo) {
    const that = this;
    return function (currentStatus, newStatus) {
      const newTodo = Object.assign({}, todo, { status: newStatus });
      that.props.onTodoChange(todo, newTodo);
    };
  }

  render() {
    const that = this;
    const { x, y, connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <section className="todo-board__view grid__item grid__item--1-3">
        <h1>{this.props.title}</h1>
        {this.props.todos.map(function (todo, index) {
          return <Todo key={index} description={todo.description} status={todo.status} onStatusChange={that.getStatusChangeHandler(todo)} />
        })}
      </section>
    );
  }

}

TodoList.propTypes = { 
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  onTodoChange: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.TODO, todoListTarget, collect)(TodoList);