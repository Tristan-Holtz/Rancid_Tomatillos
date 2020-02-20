import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
<<<<<<< HEAD

const store = createStore(rootReducer, composeWithDevTools());
=======

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

>>>>>>> master

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
