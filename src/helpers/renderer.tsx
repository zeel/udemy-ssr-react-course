import React from 'react';
import { Request } from 'express';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Store } from '@reduxjs/toolkit';
import Routes from '../client/Routes';

export default (req: Request, store:Store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `<!DOCTYPE html><html><head></head><body><div id="root">${content}</div><script src="bundle.js"></script></body></html>`;
};
