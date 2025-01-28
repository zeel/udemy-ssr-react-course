import { combineReducers } from "redux";
import { usersApi } from "./users";
import { authApi } from "./auth";
import { adminApi } from "./admins";

export default combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
});
