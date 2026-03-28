import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.items.indexOf(id);

      if (index === -1) {
        state.items.push(id);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = (state) => state.favorites.items;