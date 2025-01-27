import React from "react";
import { usersApi, useGetUsersQuery } from "../reducers/users";
import { Store } from "@reduxjs/toolkit";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong!</div>}
      {data &&
        data.map(({ id, name }) => (
          <div key={id}>
            <span>{id}</span> <span>{name}</span>
          </div>
        ))}
    </div>
  );
};

const loadData = (store: Store) => {
  // @ts-ignore
  return store.dispatch(usersApi.endpoints.getUsers.initiate());
};

export default { component: Users, loadData };
