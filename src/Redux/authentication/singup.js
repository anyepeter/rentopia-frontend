import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SIGNUP_USER = 'redux/singup/';
const LOGIN_USER = 'redux/login/'

const token = localStorage.getItem('token') || null;

//Register a user
export const signupUser = createAsyncThunk(SIGNUP_USER, async (userInfo, thunkAPI) => {
  const API_URL = 'http://localhost:3000/users';
  const requestOptions = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    return await axios.post(API_URL, JSON.stringify(userInfo), requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error, "Error creating request");
  }
});


//login a user
export const getAccessToken = createAsyncThunk(LOGIN_USER, async (userInfo, thunkAPI) => {
    const LOGIN = 'http://localhost:3000/login'
    const requestOptions = {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      return await axios.post(LOGIN, JSON.stringify(userInfo), requestOptions);
    } catch (error) {
      return thunkAPI.rejectWithValue(error, "Error creating request");
    }
  });
  

const initialState = {
  token,
  isLoading: false,
  error: null,
  success: false,
  status: '',
};

const registerSlice = createSlice({
  name: 'resgiter',
  initialState,
  extraReducers(reduce) {
    //register a user
    reduce
      .addCase(signupUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.data.token);
        return {
          ...state,
          isLoading: false,
          success: true,
          token: action.payload.data.token,
          status: action.payload.status,
        };
      })
      .addCase(signupUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(signupUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload.error,
      }));

      //login user 
      reduce
      .addCase(getAccessToken.pending, (state) => ({
        ...state,
        isLoading: true,
      }));
    reduce.addCase(getAccessToken.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isLoading: false,
        success: true,
        token: action.payload.data.token,
        status: action.payload.status,
      };
    });
    reduce.addCase(getAccessToken.rejected, (state) => ({
      ...state,
      isLoading: false,
      success: false,
      error: action.payload.error.message,
    }));
  },
});

export default registerSlice.reducer;
