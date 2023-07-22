import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_HOUSES = "redux/houses";

export const fetchHouses = createAsyncThunk(GET_HOUSES, async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/houses');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  houses: [],
  isLoading: false,
  success: false,
  error: '',
  response: null,
};

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (reduce) => {
    reduce
      .addCase(fetchHouses.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          success: true,
          houses: action.payload,
        };
      })
      .addCase(fetchHouses.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchHouses.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.error.message,
      }));
  }
});

export default houseSlice.reducer;