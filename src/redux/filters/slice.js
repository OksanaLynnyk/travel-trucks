import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  AC: null,
  transmission: "",
  kitchen: null,
  TV: null,
  bathroom: null,
  form: "",
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,

  reducers: {
    changeFilterAC(state, action) {
      state.AC = action.payload;
    },
    changeFilterTransmission(state, action) {
      state.transmission = action.payload;
    },
    changeFilterKitchen(state, action) {
      state.kitchen = action.payload;
    },
    changeFilterTV(state, action) {
      state.TV = action.payload;
    },
    changeFilterBathroom(state, action) {
      state.bathroom = action.payload;
    },
    changeFilterForm(state, action) {
      state.form = action.payload;
    },
    changeFilterLocation(state, action) {
      state.location = action.payload;
    },
    resetFilters() {
      return INITIAL_STATE;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const {
  changeFilterAC,
  changeFilterTransmission,
  changeFilterKitchen,
  changeFilterTV,
  changeFilterBathroom,
  changeFilterForm,
  changeFilterLocation,
  resetFilters,
} = filtersSlice.actions;
