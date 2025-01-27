import React from "react";
import { useGetUsersQuery } from "../reducers/users";

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

export default Users;
