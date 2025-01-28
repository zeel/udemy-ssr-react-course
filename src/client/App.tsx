import React from "react";
import { RouteConfig, renderRoutes } from "react-router-config";

import { fetchCurrentUser } from "./reducers/auth";
import Header from "./components/Header";
import { AppDispatch } from "./reducers";

const App = ({ route }: { route: RouteConfig }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }: { dispatch: AppDispatch }) =>
    dispatch(fetchCurrentUser()),
};
