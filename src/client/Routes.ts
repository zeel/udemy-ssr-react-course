import { Store } from "@reduxjs/toolkit";
import App from "./App";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";

export default [
  {
    component: App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true,
      },
      {
        ...Users,
        path: "/users",
      },
    ],
  },
];
