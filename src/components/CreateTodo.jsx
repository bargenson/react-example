import React from 'react';

export default class CreateTodo extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    var field = e.target.firstChild;
    this.props.onCreate({ description: field.value });
    field.value = "";
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="What do you want to remember?" />
      </form>
    );
  }

}