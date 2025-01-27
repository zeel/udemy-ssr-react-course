import React from "react";
import { Request } from "express";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Store } from "@reduxjs/toolkit";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import AppRoutes from "../client/Routes";

export default (req: Request, store: Store) => {
  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {/* @ts-ignore */}
        <div>{renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `<!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())};
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>`;
};
