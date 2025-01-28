import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import reducer from "./reducer";
const axiosInstance = axios.create({
  baseURL: "/api",
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: axiosInstance },
      serializableCheck: false,
    }),
  preloadedState: window.INITIAL_STATE,
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
