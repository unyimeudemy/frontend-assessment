import { createSlice } from "@reduxjs/toolkit";

/**
 * This is used to track which tab on the side is clicked. Initial
 * state is set to overview tab so that on loading the overview page
 * is diplayed
 */

const initialState = {
  tab: "overview",
};

export const changeTabSlice = createSlice({
  name: "changeTab",
  initialState,
  reducers: {
    /**
     * This is used to change from other tabs to overview
     */
    overview: (state) => {
      state.tab = "overview";
    },

    /**
     * This is used to change from other tabs to users
     */
    users: (state) => {
      state.tab = "users";
    },

    /**
     * This is used to change from other tabs to admins
     */
    admins: (state) => {
      state.tab = "admins";
    },

    /**
     * This is used to change from other tabs to logout
     */
    logout: (state) => {
      state.tab = "logout";
    },
  },
});

export const { overview, users, admins, logout } = changeTabSlice.actions;

export default changeTabSlice.reducer;
