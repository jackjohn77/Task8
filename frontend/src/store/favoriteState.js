import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for favorite items
const favoriteSlice = createSlice({
  name: "Favorite", // Name of the slice
  initialState: {
    // Initial state of the slice
    favorite: [], // favorite items stored here
    quantity: 0, //Total Quantity of items in the favorite
    total: 0, //Total cost of items in the favorite
    listId: 0, //ID counter for favorite items.
  },
  reducers: {
    // Function to add a new item to favorite
    favoriteAdd: (state, action) => {
      const favoriteItem = state.favorite.find(
        (favoriteItem) =>
          favoriteItem.title === action.payload.title &&
          favoriteItem.selectedColour === action.payload.selectedColour
      );
      if (!favoriteItem) {
        const newId = state.listId + 1;
        const addToState = { ...action.payload, id: newId, quantity: 1 };

        state.favorite.push(addToState); //Adds new item to favorite
        state.quantity += 1; // Increments favorite quantity
        state.total += action.payload.price; // adds the item cost to the current favorite cost
        state.listId += 1; // Increments list id.
      } else {
        const favoriteIndex = state.favorite.findIndex(
          (favoriteItem) =>
            favoriteItem.title === action.payload.title &&
            favoriteItem.selectedColour === action.payload.selectedColour
        );
        state.quantity += 1;
        state.total += action.payload.price;
        state.favorite[favoriteIndex].quantity += 1;
      }
    },
    
    // Function to delete the item from favorite in favorite
    favoriteDelete: (state, action) => {
      state.total -=
        state.favorite[action.payload].price *
        state.favorite[action.payload].quantity;
      state.favorite.splice(action.payload, 1);
    }
  },
});

// Export the action functions to be used in components
export const { favoriteDelete, favoriteAdd } =
  favoriteSlice.actions;

// Export the reducer function to be used in the store
export default favoriteSlice.reducer;
