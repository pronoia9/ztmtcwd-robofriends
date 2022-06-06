import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// styles
import './index.scss';
// components
import App from './components/App';
import { searchRobots, requestRobots } from './redux/reducers';

const store = createStore(combineReducers({ searchRobots, requestRobots }), applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);