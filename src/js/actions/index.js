import { ADD_TODO, CHANGE_TODO_STATUS, PROMOTE_TODO } from '../constants/ActionTypes';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
};

export function promoteTodo(todoId) {
  return {
    type: PROMOTE_TODO,
    todoId
  };
};

export function changeTodoStatus(todoId, status) {
  return {
    type: CHANGE_TODO_STATUS,
    todoId,
    status
  };
};