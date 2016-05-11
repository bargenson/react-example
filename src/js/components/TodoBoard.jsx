import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo.jsx';
import TodoList from './TodoList.jsx';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class TodoBoard extends Component {

  handleTodoCreate(todo) {
    this.props.onTodoCreate(todo);
  }

  handleTodoPromotion(todoId) {
    this.props.onTodoPromotion(todoId);
  }

  handleTodoMoved(todoId, target) {
    this.props.onTodoMoved(todoId, target);
  }

  getTodoListComponents() {
    return this.props.todoLists.map(todoList => 
      <TodoList 
        key={todoList.title}
        title={todoList.title}
        todos={todoList.todos} 
        onTodoPromotion={this.handleTodoPromotion.bind(this)}
        onTodoMoved={this.handleTodoMoved.bind(this)} />
    );
  }

  render () {
    return (
      <section className="todo-board">
        <CreateTodo onTodoCreate={this.handleTodoCreate.bind(this)} />
        <div className="todo-board__views grid">
          {this.getTodoListComponents()}
        </div>
      </section>
    );
  }

}

TodoBoard.propTypes = { 
  todoLists: PropTypes.array.isRequired,
  onTodoCreate: PropTypes.func.isRequired,
  onTodoPromotion: PropTypes.func.isRequired,
  onTodoMoved: PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(TodoBoard);
