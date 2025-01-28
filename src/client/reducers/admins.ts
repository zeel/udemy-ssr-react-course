import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface Admin {
  id: number;
  name: string;
}
export type AdminsResponse = Admin[];

export const fetchAdmins = createAsyncThunk(
  "admin/fetchAdmins",
  async (_, { extra }: { extra: any }) => {
    const response = await extra.get("/admins");
    return response.data;
  }
);

export const adminApi = createSlice({
  reducerPath: "admin",
  name: "admin",
  reducers: {},
  initialState: { status: "idle", admins: [], error: "" },
  extraReducers(builder) {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllAdmins = (state: RootState) => state.admin.admins;
export const getAdminsError = (state: RootState) => state.admin.error;
export const getAdminsStatus = (state: RootState) => state.admin.status;
