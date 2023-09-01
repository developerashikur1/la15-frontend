import { IBook } from "../../../types/book-type";
import { FormDataType } from "../../../types/react-hook-form";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    createBook: build.mutation<IBook, FormDataType>({
      query: (data: IBook) => ({
        url: "/books/create-book",
        method: "POST",
        body: data,
      }),
    }),
    deleteBook: build.mutation<unknown, string>({
      query: (bookId: string) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
    getBooks: build.query({
      query: (payload: string) => `/books/${payload}`,
    }),
    getSingleBook: build.query({
      query: (id: string) => `/books/${id}`,
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
} = bookApi;
