import { createSlice } from "@reduxjs/toolkit";

export const games = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    addGame: (state, action) => {
      state.push(action.payload);
    },
    getGame: (state, action) => {
      state = action.payload;
    },
    addFavorite: (state, action) => {
      state.find((game) => game.id === action.payload.id).isFavorite = true;
    },
  },
});

export const { addFavorite, addGame, getGame } = games.actions;
export default games.reducer;
