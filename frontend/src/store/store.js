import { configureStore } from "@reduxjs/toolkit";

// Slice imports
import basketState from "./basketState";
import productsState from "./productsState";
import reusableModalState from "./reusableModalState";
const store = configureStore({
  reducer: {
    basket: basketState,
    products: productsState,
    reusableModal: reusableModalState,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
