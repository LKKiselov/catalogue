import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { searchTerm: "" },
  reducers: {
    updateSearch(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const searchState = (state) => state.search.searchTerm;
export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
