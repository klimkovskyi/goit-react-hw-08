import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { filterContacts } = slice.actions;
