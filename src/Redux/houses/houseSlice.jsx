import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_HOUSES = "redux/houses/";
const POST_HOUSES = "redux/houses/add";

// Return all the houses
export const fetchHouses = createAsyncThunk(GET_HOUSES, async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/houses');
    return response.data;
  } catch (error) {
    throw error;
  }
});

//add a house
export const addHouse = createAsyncThunk(POST_HOUSES, async (data, thunkAPI) => {
 const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
       Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post('http://127.0.0.1:3000/houses', data, requestOptions);
    return response.data;
  } catch (error) {
    console.error('Server Error:', error.response.data); // Log the detailed error response
    return thunkAPI.rejectWithValue(error.response.data.error);
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
     
      //add a house
      reduce
      .addCase(addHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(addHouse.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        success: true,
        response: action.payload.data.data,
      }))
      .addCase(addHouse.rejected, (state) => ({
        ...state,
        isLoading: false
      }));

  }
});

export default houseSlice.reducer;
