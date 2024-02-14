import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'http://localhost:3000/api/v1/greetings/random_greeting.json';
const initialState = {
  greeting: '',
  isLoading: true,
  error: null,
}

export const fetchRandomGreeting = createAsyncThunk('greeting/randomGreeting', async(_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url)
    return response.data;
  } catch(error) {
    return rejectWithValue(error.response)
  }
})

const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.pending, (store)=> {
      store.isLoading = true
    });
    
    builder.addCase(fetchRandomGreeting.fulfilled, (store, action) => {
      store.greeting = action.payload;
      store.isLoading = false
    })
    builder.addCase(fetchRandomGreeting.rejected, (store, action) => {
      store.error = action.payload;
      store.isLoading = false
    })
  },
})

export default GreetingSlice.reducer



