/* eslint no-alert:off */

// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxPromise from "redux-promise";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

// State and reducers
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  currentUser:
    // prompt("What is your username?") ||s
    // eslint-disable-next-line no-mixed-operators
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: "general",
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer,
});

// Middlewares
const middleware = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middleware);

// render an instance of the component in the DOMtest
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
