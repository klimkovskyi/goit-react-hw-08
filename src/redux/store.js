import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReducer,
  },
});
