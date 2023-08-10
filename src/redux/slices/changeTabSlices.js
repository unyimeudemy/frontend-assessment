import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "overview",
};

export const changeTabSlice = createSlice({
  name: "changeTab",
  initialState,
  reducers: {
    overview: (state) => {
      state.tab = "overview";
    },
    users: (state) => {
      state.tab = "users";
    },
    admins: (state) => {
      state.tab = "admins";
    },
    logout: (state) => {
      state.tab = "logout";
    },
  },
});

export const { overview, users, admins, logout } = changeTabSlice.actions;

export default changeTabSlice.reducer;
