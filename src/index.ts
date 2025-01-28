import express from "express";
import { RouteConfig, matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import renderer from "./helpers/renderer";
import Routes from "./client/Routes";
import { createStoreSSR } from "./helpers/createStore";

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
app.get("*", (req, res) => {
  const store = createStoreSSR(req);
  // @ts-ignore
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }: { route: RouteConfig }) => {
      // @ts-ignore
      return route.loadData ? route.loadData(store) : null;
    }
  );

  Promise.all(promises).then(() => res.send(renderer(req, store)));
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
