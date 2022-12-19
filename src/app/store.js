import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../components/SearchField/SearchSlice";

export default configureStore({
  reducer: {
    searchTerm: searchSlice,
  },
});
