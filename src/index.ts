import express from "express";
import renderer from "./helpers/renderer";

import { MatchedRoute, matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import { store } from "./client/reducers";
const app = express();

app.use(express.static("public"));
app.get("*", async (req, res) => {
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }: { route: any }) => {
      return route.loadData ? route.loadData(store) : null;
    }
  );

  await Promise.all(promises).then(() => res.send(renderer(req, store)));
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
