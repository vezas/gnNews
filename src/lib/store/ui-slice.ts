import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  darkTheme: boolean;
  isModalOpened: boolean;
  variant: 'list' | 'tiles';
}

const initialState: UIState = {
  darkTheme: false,
  isModalOpened: false,
  variant: 'list'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    toggleModal: (state) => {
      state.isModalOpened = !state.isModalOpened;
    },
    toggleListVariant: (state) => {
      state.variant = state.variant === 'list' ? 'tiles' : 'list';
    }
  }
});

export const { toggleTheme, toggleModal, toggleListVariant } = uiSlice.actions;
