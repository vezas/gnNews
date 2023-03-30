import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { articleAmount: 0 };

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticleAmount: (state, action: PayloadAction<number>) => {
      state.articleAmount = action.payload;
    }
  }
});

export const { setArticleAmount } = newsSlice.actions;
