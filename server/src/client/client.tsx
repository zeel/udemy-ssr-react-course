import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Routes from './Routes';

const domNode = document.getElementById('root');

hydrateRoot(
  domNode,
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
);
