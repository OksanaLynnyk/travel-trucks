import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "./campers/selectors";
import { selectFilter } from "./filters/selectors";

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filters) =>
    campers.filter((camper) =>
      Object.entries(filters).every(([key, value]) => {
        if (value === false || value === "") return true;

        if (key === "location") {
          return camper.location
            .toLowerCase()
            .includes(value.toLowerCase());
        }

        return camper[key] === value;
      })
    )
);