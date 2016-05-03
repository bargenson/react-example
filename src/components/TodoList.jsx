import React from 'react';
import CreateTodo from './CreateTodo.jsx';
import Todo from './Todo.jsx';

export default class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          description: "Do this"
        },
        {
          description: "Do that"
        }
      ]
    };
  }

  handleTodoCreate(todo) {
    this.setState({
      todos: this.state.todos.concat([ todo ])
    });
  }

  render () {
    return (
      <div>
        <CreateTodo onCreate={this.handleTodoCreate.bind(this)} />
        <div>
          {this.state.todos.map(function (todo, index) {
            return <Todo key={index} description={todo.description} />
          })}
        </div>
      </div>
    );
  }

}
