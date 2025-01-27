import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
}
export type UsersResponse = User[];

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-ssr-api.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => ({ url: 'users' }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
