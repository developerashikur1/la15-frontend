/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImgbbResponse } from "../../types/imgbb-types";

export const imgApi = createApi({
  reducerPath: "imgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_imgbbApiUrl}?key=${
      import.meta.env.VITE_imgbbApiKey
    }`,
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<ImgbbResponse, FormData>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      //   transformResponse: (response: { data }, meta, arg) => response.data,
    }),
  }),
});

export const { useUploadImageMutation } = imgApi;
