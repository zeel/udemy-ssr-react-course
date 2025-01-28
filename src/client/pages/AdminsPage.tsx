import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  fetchAdmins,
  getAllAdmins,
  getAdminsError,
  getAdminsStatus,
  Admin,
} from "../reducers/admins";
import { isCurrentUserAuthenticated } from "../reducers/auth";
import { Store } from "@reduxjs/toolkit";
import { AppDispatch } from "../reducers";

const Admins = ({ dispatch }: { dispatch: AppDispatch }) => {
  const admins = useSelector(getAllAdmins);
  const status = useSelector(getAdminsStatus);
  const error = useSelector(getAdminsError);
  const isAuth = useSelector(isCurrentUserAuthenticated);
  useEffect(() => {
    if (!admins.length && isAuth) dispatch(fetchAdmins());
  }, [isAuth]);
  return isAuth ? (
    <div className="text-center">
      {status === "loading" && <div>Loading...</div>}
      {error && <Redirect to="/" />}
      {admins.length > 0 && (
        <>
          <h3>Protected list of admins</h3>
          <ul>
            {admins.map(({ id, name }: Admin) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const loadData = (store: Store) => {
  // @ts-expect-error issue
  return store.dispatch(fetchAdmins());
};

export default { component: connect()(Admins), loadData };
