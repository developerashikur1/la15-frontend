import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ISearchAndFilterOptions {
  searchTerm: string;
  genre: string;
  publicationYear: string;
}

const initialSearchFilterState: ISearchAndFilterOptions = {
  searchTerm: "",
  genre: "",
  publicationYear: "",
};

// book reducers
export const bookSlice = createSlice({
  name: "book",
  initialState: initialSearchFilterState,
  reducers: {
    searchAndFilter: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
      state.genre = action.payload.genre;
      state.publicationYear = action.payload.publicationYear;
    },
  },
});

export const { searchAndFilter } = bookSlice.actions;
export default bookSlice.reducer;
