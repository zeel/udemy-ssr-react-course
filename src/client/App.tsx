import React from "react";
import { RouteConfig, renderRoutes } from "react-router-config";

const App = ({ route }: { route: RouteConfig }) => {
  return <div>Hello !{renderRoutes(route.routes)}</div>;
};

export default App;
