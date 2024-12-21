import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});
