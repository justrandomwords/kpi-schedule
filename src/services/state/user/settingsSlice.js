import { createSlice } from "@reduxjs/toolkit";

const settings = createSlice({
  name: 'settings',
  initialState: {
    optionalLesson: -1,
    cardGlow: {
      blur: 0, //9
      strength: 0 //0.4 
    }
  },
  reducers: {
    setOptionalLesson: (state, action) => {
      state.optionalLesson = action.payload;
    },
    setCardGlow: (state, action) => {
      state.cardGlow = action.payload;
    }
  }
})

export const { setOptionalLesson } = settings.actions;

export default settings.reducer;