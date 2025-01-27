import express from "express";
import renderer from "./helpers/renderer";

import { RouteConfig, matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import { createStore } from "./helpers/createStore";
const app = express();

app.use(express.static("public"));
app.get("*", async (req, res) => {
  // @ts-ignore
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }: { route: RouteConfig }) => {
      // @ts-ignore
      return route.loadData ? route.loadData(createStore) : null;
    }
  );

  await Promise.all(promises).then(() => res.send(renderer(req, createStore)));
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
