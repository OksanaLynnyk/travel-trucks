import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const getDataCampers = createAsyncThunk(
  "campers/getData",
  async (filters = {}, thunkApi) => {
    try {
      const { data } = await instance.get("/", {
        params: filters,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
