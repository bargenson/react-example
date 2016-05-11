import { ADD_TODO, CHANGE_TODO_STATUS, PROMOTE_TODO } from '../constants/ActionTypes';
import { OPEN, IN_PROGRESS, DONE } from '../constants/TodoStatus';

const initialState = {
  todos: [
    {
      id: 1,
      description: "Do this",
      status: "Open"
    },
    {
      id: 2,
      description: "Do that",
      status: "In Progress"
    },
    {
      id: 3,
      description: "Do it!",
      status: "Done"
    }
  ]
};

function stateHelper(state) {
  return {

    getTodoById: todoId => state.todos.find(todo => todo.id === todoId),
    
    updateTodo: (todo) => {
      const todos = state.todos.filter(currentTodo => currentTodo.id !== todo.id);
      todos.push(todo);
      return todos;
    },

    addTodo: (todo) => {
      todo.id = state.todos.length + 1;
      return state.todos.concat([ todo ]);
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
      return {
        todos: helper.addTodo(action.todo)
      };

    case CHANGE_TODO_STATUS:
      var todo = helper.getTodoById(action.todoId);
      const updatedTodo = Object.assign({}, todo, { status: action.status });
      return {
        todos: helper.updateTodo(updatedTodo)
      };
    
    case PROMOTE_TODO:
      var todo = helper.getTodoById(action.todoId);
      const promotedTodo = getPromotedTodo(todo);
      return {
        todos: helper.updateTodo(promotedTodo)
      };

    default:
      return state;

  }
}