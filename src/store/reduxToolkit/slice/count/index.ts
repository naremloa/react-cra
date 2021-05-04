import { createSlice } from "@reduxjs/toolkit";

const countSlice =  createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    setCount: (state, { payload }) => payload,
  }
});

export const { setCount } = countSlice.actions;
export default countSlice.reducer;