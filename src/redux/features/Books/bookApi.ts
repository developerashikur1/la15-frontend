import { IBook } from "../../../types/book-type";
import { FormDataType } from "../../../types/react-hook-form";
import { api } from "../../api/apiSlice";

interface commentOption {
    bookId: string;
    data: {
        review: string;
    }
}

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
    commentOnBook: build.mutation<unknown, commentOption>({
      query: ({bookId, data}) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['Comment'],
    }),
    getBooks: build.query({
      query: ({ searchTerm, genre, publicationYear }) =>
        `/books?searchTerm=${searchTerm}&genre=${genre}&publicationYear=${publicationYear}`,
    }),
    getSingleBook: build.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ['Comment'],
    }),
    getBookFindOptions: build.query({
      query: () => `/books/search-options`,
    }),
  }),
});
// {{BOOK_CATALOG}}/books?searchTerm=j&publicationYear=1997&genre=Horror

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
  useGetBookFindOptionsQuery,
  useCommentOnBookMutation,
} = bookApi;
