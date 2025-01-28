import axios from "axios";
import { Request } from "express";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import reducer from "../client/reducers/reducer";

export const createStoreSSR = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" },
  });
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: axiosInstance },
        serializableCheck: false,
      }),
  });

  setupListeners(store.dispatch);
  return store;
};
