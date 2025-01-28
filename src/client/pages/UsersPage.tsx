import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
  getUsersError,
  getUsersStatus,
  User,
} from "../reducers/users";
import { Store } from "@reduxjs/toolkit";
import Helmet from "react-helmet";
import { AppDispatch } from "../reducers";

const Users = ({ dispatch }: { dispatch: AppDispatch }) => {
  const users = useSelector(selectAllUsers);
  const status = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
  }, []);

  return (
    <div className="text-center">
      <Helmet>
        <title>{users.length} Users Loaded</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
      {status === "loading" && <div>Loading...</div>}
      {error && <div>Something went wrong! {error}</div>}
      {users && (
        <ul>
          {users.map(({ id, name }: User) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const loadData = (store: Store) => {
  // @ts-expect-error dispatch issue
  return store.dispatch(fetchUsers());
};

export default { component: connect()(Users), loadData };
