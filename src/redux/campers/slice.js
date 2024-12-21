import { createSlice } from "@reduxjs/toolkit";
import { getDataCampers } from "./operations";

const INITIAL_STATE = {
  campers: [],
  total: 0,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,

  reducers: {
    clearCampers(state) {
      state.campers = [];
      state.total = 0;
      state.error = null;
      state.loading = false;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getDataCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(getDataCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;
export const { clearCampers } = campersSlice.actions;
