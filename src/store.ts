import { configureStore } from '@reduxjs/toolkit';
import webtoonPageSlice from './webtoonPageSlice';

const store = configureStore({
  reducer: {
    webtoonPage: webtoonPageSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
