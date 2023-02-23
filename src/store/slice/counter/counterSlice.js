import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementByTwo: (state, action) => {
      state.counter += action.payload;  
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 10;
    }  
  }
})

export const { increment, decrement, incrementByTwo, reset } = counterSlice.actions