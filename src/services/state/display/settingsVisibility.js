import { createSlice } from "@reduxjs/toolkit";

const settingsVisibility = createSlice({
  name: 'settings-visibility',
  initialState: {
    value: false
  },
  reducers: {
    invertSettingsVisibility: (state) => {
      state.value = !state.value;
    }
  }
})

export const { invertSettingsVisibility } = settingsVisibility.actions;

export default settingsVisibility.reducer;