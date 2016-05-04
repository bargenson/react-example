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

  handleTodoChange(currentTodo, newTodo) {
    var index = this.state.todos.indexOf(currentTodo);
    var todos = this.state.todos.concat([]);
    todos[index] = newTodo;
    this.setState({
      todos: todos
    });
  }

  render () {
    return (
      <section className="todo-board">
        <CreateTodo onCreate={this.handleTodoCreate.bind(this)} />
        <div className="todo-board__views grid">
          <TodoList title="Open" todos={this.state.todos.filter(todo => todo.status === "Open")} onTodoChange={this.handleTodoChange.bind(this)} />
          <TodoList title="In Progress" todos={this.state.todos.filter(todo => todo.status === "In progress")} onTodoChange={this.handleTodoChange.bind(this)} />
          <TodoList title="Done" todos={this.state.todos.filter(todo => todo.status === "Done")} onTodoChange={this.handleTodoChange.bind(this)} />
        </div>
      </section>
    );
  }

}

TodoBoard.propTypes = { todos: PropTypes.array.isRequired };

export default TodoBoard;
