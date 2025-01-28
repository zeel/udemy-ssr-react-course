import App from "./App";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";

export default [
  {
    ...App,
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
