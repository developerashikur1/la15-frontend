import { ILogin } from "../../../page/Login";
import { ISignUpUser } from "../../../page/Signup";
import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    logIn: build.mutation<unknown, ILogin>({
      query: (data) => ({
        url: "/users/signin",
        method: "POST",
        body: data,
      }),
    }),
    signUp: build.mutation<unknown, ISignUpUser>({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
