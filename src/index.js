import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
// import middleware from './middleware'

const store = createStore(reducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
