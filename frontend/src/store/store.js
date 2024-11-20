import { configureStore } from "@reduxjs/toolkit";

// Slice imports
import favoriteState from "./favoriteState";
import searchState from "./searchState";
import reusableModalState from "./reusableModalState";
const store = configureStore({
  reducer: {
    favorite: favoriteState,
    search: searchState,
    reusableModal: reusableModalState,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
