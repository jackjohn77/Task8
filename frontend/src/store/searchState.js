import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for product items
const searchSlice = createSlice({
  name: "Search", // Name of the slice
  initialState: {
    // Initial state of the slice
    searchResult: [],
    mediaSelectionChoice: ["all", "music", "movie", "podcast"],
    term: "",
    media: "all",
  },
  reducers: {
    // Function to delete the item from favorite in favorite
    addMedia: (state, action) => {
      state.media = action.payload;
    },
    addTerm: (state, action) => {
      state.term = action.payload;
    },
    addSearchResult: (state, action) => {
      state.term = action.payload;
    },
  },
});
export const { addMedia, addTerm, addSearchResult } = searchSlice.actions;


// Export the reducer function to be used in the store
export default searchSlice.reducer;
