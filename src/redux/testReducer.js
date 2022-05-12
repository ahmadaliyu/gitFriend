import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "test",
};

export const testThunk = createAsyncThunk(
  "test",
  async (action, { dispatch }) => {},
);

export const testSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = testSlice.actions;

export default testSlice.reducer;
