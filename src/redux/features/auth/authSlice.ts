import { createSlice } from "@reduxjs/toolkit";
import { IUserResponseInfo } from "../../../types/user-types";

/* eslint-disable @typescript-eslint/no-unused-vars */

export interface IAuthUser {
  isLoggedIn: boolean;
  accessToken: string | null;
  userInfo: IUserResponseInfo | null;
}

// getting userInfo and accessToken from localstorage
const initialSignedInUser: IAuthUser = {
  isLoggedIn: JSON.parse(localStorage.getItem("userInfo")!) ? true : false,
  accessToken: JSON.parse(localStorage.getItem("token")!)
    ? JSON.parse(localStorage.getItem("token")!)
    : null,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,
};

// auth reducers
export const authSlice = createSlice({
  name: "auth",
  initialState: initialSignedInUser,
  reducers: {
    userAuthInfo: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.userInfo;

      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
    },
  },
});
export const { userAuthInfo } = authSlice.actions;
export default authSlice.reducer;
