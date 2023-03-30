import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news-slice';
import { uiSlice } from './ui-slice';

export const store = configureStore({
  reducer: { ui: uiSlice.reducer, news: newsSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
