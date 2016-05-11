import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';
import TodoBoardApp from './containers/TodoBoardApp';

function configureStore() {
  return createStore(
    reducers, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
}

const store = configureStore();

render(
  <Provider store={store}>
    <TodoBoardApp />
  </Provider>
  , document.getElementById('app')
);
