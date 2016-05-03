import React from 'react';
import {render} from 'react-dom';
import TodoBoard from './components/TodoBoard.jsx';

var todos = [
  {
    description: "Do this",
    status: "Open"
  },
  {
    description: "Do that",
    status: "In progress"
  },
  {
    description: "Do it!",
    status: "Done"
  }
];

render(<TodoBoard todos={todos} />, document.getElementById('app'));
