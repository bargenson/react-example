import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';
import TodoBoardApp from './containers/TodoBoardApp';

function configureStore(initialState) {
  const store = createStore(reducers, initialState, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

const store = configureStore({
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
});

render(
  <Provider store={store}>
    <TodoBoardApp />
  </Provider>
  , document.getElementById('app')
);
