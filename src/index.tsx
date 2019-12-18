import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import configureStore from "./store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
