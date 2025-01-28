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
  const context = { url: '', isNotFound: false };
  // @ts-expect-error routeissue
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }: { route: RouteConfig }) => {
      // @ts-expect-error routeissue
      return route.loadData ? route.loadData(store) : null;
    }
  );

  Promise.all(promises).then(() => {
    const content = renderer(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.isNotFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
