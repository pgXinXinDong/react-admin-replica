import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app";

const AppView = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppView, document.getElementById("root"));
