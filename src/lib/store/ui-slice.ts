import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  darkTheme: boolean;
}

const initialState: UIState = {
  darkTheme: true
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    }
  }
});

export const { toggleTheme } = uiSlice.actions;
