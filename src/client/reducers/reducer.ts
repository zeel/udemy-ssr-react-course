import { usersApi } from "./users";
import { authApi } from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});
