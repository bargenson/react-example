import { ADD_TODO, CHANGE_TODO_STATUS, PROMOTE_TODO } from '../constants/ActionTypes';
import { OPEN, IN_PROGRESS, DONE } from '../constants/TodoStatus';

const initialState = {
  todos: [
    {
      id: 1,
      description: "Do this",
      status: OPEN
    },
    {
      id: 2,
      description: "Do that",
      status: IN_PROGRESS
    },
    {
      id: 3,
      description: "Do it!",
      status: DONE
    },
    {
      id: 4,
      description: "Someone has to do it...",
      status: OPEN
    },
    {
      id: 5,
      description: "Please do it",
      status: OPEN
    },
    {
      id: 6,
      description: "That's super important",
      status: OPEN
    }
  ]
};

function stateHelper(state) {
  return {

    getTodoById: todoId => state.todos.find(todo => todo.id === todoId),
    
    updateTodo: (todo) => {
      const todos = state.todos.filter(currentTodo => currentTodo.id !== todo.id);
      todos.push(todo);
      return Object.assign({}, state, { todos: todos });
    },

    addTodo: (todo) => {
      todo.id = state.todos.length + 1;
      return Object.assign({}, state, { todos: state.todos.concat([ todo ]) });
    }

  };
}

function getPromotedTodo(todo) {
  if (todo.status === OPEN) {
    return Object.assign({}, todo, { status: IN_PROGRESS });
  } else if (todo.status === IN_PROGRESS) {
    return Object.assign({}, todo, { status: DONE });
  } else {
    return todo;
  }
}

export default function todos(state = initialState, action) {
  const helper = stateHelper(state);
  switch (action.type) {
    
    case ADD_TODO:
      return helper.addTodo(action.todo);

    case CHANGE_TODO_STATUS:
      var todo = helper.getTodoById(action.todoId);
      const updatedTodo = Object.assign({}, todo, { status: action.status });
      return helper.updateTodo(updatedTodo);
    
    case PROMOTE_TODO:
      var todo = helper.getTodoById(action.todoId);
      const promotedTodo = getPromotedTodo(todo);
      return helper.updateTodo(promotedTodo);

    default:
      return state;

  }
}