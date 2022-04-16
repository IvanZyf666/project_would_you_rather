import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';

// import middleware from './middleware'

// TODO: add thunk and logger!
const store = createStore(reducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
