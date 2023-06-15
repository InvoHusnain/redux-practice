// Import Module here from RTK
import { createSlice } from "@reduxjs/toolkit";

// Method that has Store and all Actions
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    inputValue: "",
    paragraph: "",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setParagraph: (state) => {
      state.paragraph = state.inputValue;
    },
  },
});

// Exporting all actions
export const { increment, decrement, setInputValue, setParagraph } =
  counterSlice.actions;
export default counterSlice.reducer;
