import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import Todo from './Todo.jsx';

class TodoList extends Component {

  getStatusChangeHandler(todo) {
    var that = this;
    return function (currentStatus, newStatus) {
      var newTodo = Object.assign({}, todo, { status: newStatus });
      that.props.onTodoChange(todo, newTodo);
    };
  }

  render() {
    var that = this;
    return (
      <section className="todo-list">
        <h1>{this.props.title}</h1>
        {this.props.todos.map(function (todo, index) {
          return <Todo key={index} description={todo.description} status={todo.status} onStatusChange={that.getStatusChangeHandler(todo)} />
        })}
      </section>
    );
  }

}

TodoList.propTypes = { 
  todos: PropTypes.array.isRequired,
  onTodoChange: PropTypes.func.isRequired
};

export default TodoList;