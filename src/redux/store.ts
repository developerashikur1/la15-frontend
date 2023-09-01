import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { imgApi } from "./api/uploadImageApi";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api?.reducer,
    [imgApi.reducerPath]: imgApi?.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, imgApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
