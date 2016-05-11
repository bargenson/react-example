import React, { Component, PropTypes } from 'react';

class CreateTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const field = e.target.querySelectorAll("[data-value='taskName']")[0];
    this.props.onTodoCreate({ 
      description: field.value,
      status: "Open"
    });
    field.value = "";
  }

  render() {
    return (
      <div className="todo-board__task-creator">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>

          <div className="form__item form__item--input">
            <div className="input">
              <input type="text" data-value="taskName" required placeholder="What do you want to remember?" />
            </div>
            <button type="submit" className="btn">
              Create
            </button>
          </div>

        </form>
      </div>
    );
  }

}

CreateTodo.propTypes = { onTodoCreate: PropTypes.func.isRequired };

export default CreateTodo;