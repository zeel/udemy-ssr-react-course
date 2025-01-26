import React from 'react';
import { Request } from 'express';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';

export default (req: Request) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      <Routes />
    </StaticRouter>,
  );

  return `<!DOCTYPE html><html><head></head><body><div id="root">${content}</div><script src="bundle.js"></script></body></html>`;
};
