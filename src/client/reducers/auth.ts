import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { extra }: { extra: any }) => {
    const response = await extra.get("/current_user");
    return response.data;
  }
);

export const authApi = createSlice({
  reducerPath: "auth",
  name: "auth",
  reducers: {},
  initialState: { status: "idle", isAuth: false, error: "" },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = action.payload || false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const isCurrentUserAuthenticated = (state: RootState) =>
  state.auth.isAuth;
export const getAuthError = (state: RootState) => state.auth.error;
export const getAuthStatus = (state: RootState) => state.auth.status;
