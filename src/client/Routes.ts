import App from "./App";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import AdminsPage from "./pages/AdminsPage";
import NotFoundPage from "./pages/NotFoundPage";
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UsersPage,
        path: "/users",
      },
      {
        ...AdminsPage,
        path: "/admins",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
