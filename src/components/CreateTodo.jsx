import React, { Component, PropTypes } from 'react';

class CreateTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();
    var field = e.target.firstChild;
    this.props.onCreate({ 
      description: field.value,
      status: "Open"
    });
    field.value = "";
  }

  render() {
    return (
      <form className="create-todo-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="What do you want to remember?" />
      </form>
    );
  }

}

CreateTodo.propTypes = { onCreate: PropTypes.func.isRequired };

export default CreateTodo;