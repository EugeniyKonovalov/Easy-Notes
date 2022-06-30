import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../types/authDataTypes";

const initialState: IAuth = {
  email: null,
  token: null,
  id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state: any, action: PayloadAction<IAuth>): void {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state: any): void {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
