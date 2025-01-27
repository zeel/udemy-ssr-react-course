import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import Routes from './Routes';
import { store } from './reducers';
const domNode = document.getElementById('root');

hydrateRoot(
  domNode,
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>
);
