import App from "./App";
import Home from "./components/Home";
import Users, { loadData } from "./components/Users";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/users",
        component: Users,
        loadData,
      },
    ],
  },
];
