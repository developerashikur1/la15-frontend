import { ILogin } from "../../../page/Login";
import { ISignUpUser } from "../../../page/Signup";
import { api } from "../../api/apiSlice";

export interface ILoginResponseData {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}
export interface ILoginResponse {
  data: {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
      accessToken: string;
    };
  };
}

interface IBookData {
    bookId: string;
}

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    logIn: build.mutation<unknown, ILogin>({
      query: (data) => ({
        url: "/users/signin",
        method: "POST",
        body: data,
    }),
    invalidatesTags: ['User'],
    }),
    signUp: build.mutation<unknown, ISignUpUser>({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
    }),
    signOut: build.mutation({
      query: () => ({
        url: "/users/signout",
        method: "POST",
      }),
    }),
    addToWishList: build.mutation<unknown, IBookData>({
      query: (data) => ({
        url: "/users/wish-list",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    addToReadingList: build.mutation<unknown, IBookData>({
      query: (data) => ({
        url: "/users/reading-list",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    addToFinishedList: build.mutation<unknown, IBookData>({
      query: (data) => ({
        url: "/users/finished-list",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    removeFromFinishedList: build.mutation<unknown, IBookData>({
      query: (data) => ({
        url: "/users/remove-list",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    getUserProfile: build.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation, useSignOutMutation, useAddToWishListMutation, useGetUserProfileQuery, useAddToReadingListMutation, useAddToFinishedListMutation, useRemoveFromFinishedListMutation } = authApi;
