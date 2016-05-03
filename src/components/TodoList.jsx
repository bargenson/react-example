import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import Todo from './Todo.jsx';

class TodoList extends Component {

  render () {
    return (
      <section className="todo-list">
        <h1>{this.props.title}</h1>
        {this.props.todos.map(function (todo, index) {
          return <Todo key={index} description={todo.description} status={todo.status} />
        })}
      </section>
    );
  }

}

TodoList.propTypes = { todos: PropTypes.array.isRequired };

export default TodoList;