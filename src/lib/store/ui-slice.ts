import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  themeMode: string;
  isModalOpened: boolean;
  variant: string;
}

const initialState: UIState = {
  themeMode: localStorage.getItem('themeMode') || 'dark',
  isModalOpened: false,
  variant: localStorage.getItem('listVariant') || 'list'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('themeMode', state.themeMode);
    },
    toggleModal: (state) => {
      state.isModalOpened = !state.isModalOpened;
    },
    toggleListVariant: (state) => {
      state.variant = state.variant === 'list' ? 'tiles' : 'list';
      localStorage.setItem('listVariant', state.variant);
    }
  }
});

export const { toggleTheme, toggleModal, toggleListVariant } = uiSlice.actions;
