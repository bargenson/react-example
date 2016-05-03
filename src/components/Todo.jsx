import React from 'react';

export default class Todo extends React.Component {

  render () {
    return (
      <article>
        <p>{this.props.description}</p>
      </article>
    );
  }

}