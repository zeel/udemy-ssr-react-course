import express from "express";
import { RouteConfig, matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import renderer from "./helpers/renderer";
import Routes from "./client/Routes";
import { createStore } from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(proxyReqOpts) {
      proxyReqOpts.headers["x-forwarded-host"] = "localhost:3000";
      return proxyReqOpts;
    },
  })
);
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
