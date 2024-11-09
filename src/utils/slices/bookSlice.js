import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [] },
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload.map((book) => {
        const {
          key,
          author_name,
          cover_i,
          first_publish_year,
          title,
          number_of_pages_median,
          publisher,
          ratings_average,
          author_key,
          subject,
        } = book;
        return {
          key,
          author_name,
          cover_i,
          first_publish_year,
          title,
          number_of_pages_median,
          publisher,
          ratings_average,
          author_key,
          subject,
        };
      });
    },
    removeBooks: (state) => {
      state.books = [];
    },
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
