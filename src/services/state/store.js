import { configureStore } from "@reduxjs/toolkit";
import settingsVisibilityReducer from "./display/settingsVisibility";
import settingsReducer from "./user/settingsSlice";

export const store = configureStore({
  reducer: {
    settingsVisibility: settingsVisibilityReducer,
    settings: settingsReducer,
  }
})