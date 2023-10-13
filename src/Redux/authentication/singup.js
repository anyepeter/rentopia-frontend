import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const SIGNUP_USER = 'redux/singup/';
const LOGIN_USER = 'redux/login/'

const token = localStorage.getItem('token') || null;
const userInfo = localStorage.getItem('userInfo') || null;

//Register a user
export const signupUser = createAsyncThunk(SIGNUP_USER, async (userInfo, thunkAPI) => {
  const API_URL = 'http://localhost:3000/users';
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  
  try {
    const response = await axios.post(API_URL, userInfo, requestOptions);
    return response.data
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
 
      const response = await axios.post(LOGIN, userInfo, requestOptions);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error, "Error creating request");
    }
  });


const initialState = {
  token,
  isLoading: '',
  error: null,
  success: false,
};

const registerSlice = createSlice({
  name: 'resgiter',
  initialState,
  extraReducers(reduce) {
    //register a user
    reduce
      .addCase(signupUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
        return {
          ...state,
          isLoading: false,
          success: true,
          token: action.payload.token,
          userInfo: action.payload.user,
          error: null,
        };
      })
      .addCase(signupUser.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(signupUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload.response.data.errors,
      }));

      //login user 
      reduce
      .addCase(getAccessToken.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }));
    reduce.addCase(getAccessToken.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoading: false,
        success: true,
        error: null,
        token: action.payload.token,
        userInfo: action.payload.user,
      };
    });
    reduce.addCase(getAccessToken.rejected, (state, action) => {
      return{
      ...state,
      isLoading: false,
      success: false,
      error: action.payload.response.data.errors,
    }});
  },
});

export default registerSlice.reducer;
