
import express from 'express';
import renderer from './helpers/renderer';

import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import { store } from './client/reducers';
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log(matchRoutes(Routes, req.path));
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
