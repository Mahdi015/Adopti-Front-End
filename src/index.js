import React from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import Popper from "popper.js";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../src/reducers";
import { BrowserRouter } from "react-router-dom";

/////
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
// store

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  //</React.StrictMode>,
  document.getElementById("root")
);
