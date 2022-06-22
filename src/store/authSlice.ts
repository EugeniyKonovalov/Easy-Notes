import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../types/authDataTypes";

const initialState: IAuth = {
  isAuth: false,
  name: null,
  email: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: any, action: PayloadAction<IAuth>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    logout(state: any) {
      state.email = null;
      state.password = null;
      state.isAuth = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
