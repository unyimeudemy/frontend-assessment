import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  txt: "All",
};

export const popUpStatusSlice = createSlice({
  name: "popUpStatus",
  initialState,
  reducers: {
    all: (state) => {
      state.txt = "All";
    },
    active: (state) => {
      state.txt = "Active";
    },
    inActive: (state) => {
      state.txt = "Inactive";
    },
  },
});

export const { all, active, inActive } = popUpStatusSlice.actions;

export default popUpStatusSlice.reducer;
