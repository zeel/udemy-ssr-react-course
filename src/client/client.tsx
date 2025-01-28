import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import { store } from "./reducers";

import "./style.scss";

const domNode = document.getElementById("root");

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      {/* @ts-expect-error renderroute issue */}
      <div>{renderRoutes(Routes)}</div>
    </Provider>
  </BrowserRouter>,
  domNode
);
