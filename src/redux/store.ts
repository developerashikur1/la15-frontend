import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { imgApi } from "./api/uploadImageApi";
import authReducer from "./features/auth/authSlice";
import bookReducer from "./features/Books/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    [api.reducerPath]: api?.reducer,
    [imgApi.reducerPath]: imgApi?.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, imgApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// VITE_baseurl=https://l2a5-book-catalog.vercel.app/api/v1/
