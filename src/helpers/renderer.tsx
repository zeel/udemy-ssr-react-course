import React from "react";
import { Request } from "express";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Store } from "@reduxjs/toolkit";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Helmet from "react-helmet";
import AppRoutes from "../client/Routes";

export default (req: Request, store: Store, context: object) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {/* @ts-expect-error route issue*/}
        <div>{renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `<!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())};
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>`;
};
