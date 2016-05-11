import { connect } from 'react-redux'
import { addTodo, promoteTodo, changeTodoStatus } from '../actions'
import TodoBoard from '../components/TodoBoard.jsx';
import { OPEN, IN_PROGRESS, DONE } from '../constants/TodoStatus'

const mapStateToProps = (state) => {
  return {
    todoLists: [ OPEN, IN_PROGRESS, DONE ].map((status) => {
      return {
        title: status,
        todos: state.todos.filter(todo => todo.status === status)
      };
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoCreate: (todo) => {
      dispatch(addTodo(todo));
    },
    onTodoPromotion: (todoId) => {
      dispatch(promoteTodo(todoId));
    },
    onTodoMoved: (todoId, status) => {
      dispatch(changeTodoStatus(todoId, status));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard);