// src/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light', // or 'dark'
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    setLightTheme: () => 'light',
    setDarkTheme: () => 'dark',
  },
});

export const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
