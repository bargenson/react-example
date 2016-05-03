import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import TodoList from './TodoList.jsx';

class TodoBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }

  handleTodoCreate(todo) {
    this.setState({
      todos: this.state.todos.concat([ todo ])
    });
  }

  render () {
    return (
      <section className="todo-board">
        <CreateTodo onCreate={this.handleTodoCreate.bind(this)} />
        <div>
          <TodoList title="Open" todos={this.state.todos.filter(todo => todo.status === "Open")} />
          <TodoList title="In Progress" todos={this.state.todos.filter(todo => todo.status === "In progress")} />
          <TodoList title="Done" todos={this.state.todos.filter(todo => todo.status === "Done")} />
        </div>
      </section>
    );
  }

}

TodoBoard.propTypes = { todos: PropTypes.array.isRequired };

export default TodoBoard;
