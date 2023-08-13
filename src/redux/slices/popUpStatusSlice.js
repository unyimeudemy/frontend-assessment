import { createSlice } from "@reduxjs/toolkit";
/**
 * This is used to control the popup panel that is used to filter users
 * or admins by those still active, not active and all.
 */

const initialState = {
  txt: "All",
};

export const popUpStatusSlice = createSlice({
  name: "popUpStatus",
  initialState,
  reducers: {
    /**
     * Gets all users or all admins
     */
    all: (state) => {
      state.txt = "All";
    },

    /**
     * Gets all active users
     */
    active: (state) => {
      state.txt = "Active";
    },

    /**
     * Gets all inactive users
     */
    inActive: (state) => {
      state.txt = "Inactive";
    },
  },
});

export const { all, active, inActive } = popUpStatusSlice.actions;

export default popUpStatusSlice.reducer;
