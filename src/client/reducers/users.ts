import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
export interface User {
  id: number;
  name: string;
}
export type UsersResponse = User[];

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { extra }: { extra: any }) => {
    const response = await extra.get("/users");
    return response?.data;
  }
);

export const usersApi = createSlice({
  name: "users",
  reducerPath: "users",
  reducers: {},
  initialState: { status: "idle", users: [], error: "" },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const getUsersError = (state: RootState) => state.users.error;
export const getUsersStatus = (state: RootState) => state.users.status;
