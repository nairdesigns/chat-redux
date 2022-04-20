// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";

// State and reducers
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";

const reducers = combineReducers({
  messages: messagesReducer,
  // channels: identityReducer,
  // currentUser: identityReducer,
  selectedChannel: selectedChannelReducer,
});

const initialState = {
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z",
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z",
    },
  ],
};
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
