import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WebtoonPageState {
  episodeLikes: { [episodeId: string]: number };
}

const initialState: WebtoonPageState = {
  episodeLikes: {},
};

const webtoonPageSlice = createSlice({
  name: 'webtoonPage',
  initialState,
  reducers: {
    incrementLikes(state, action: PayloadAction<string>) {
      const episodeId = action.payload;
      state.episodeLikes[episodeId] = (state.episodeLikes[episodeId] ?? 0) + 1;
    },
    setLikes(state, action: PayloadAction<{ episodeId: string; likes: number }>) {
      const { episodeId, likes } = action.payload;
      state.episodeLikes[episodeId] = likes;
    },
  },
});

export const { incrementLikes, setLikes } = webtoonPageSlice.actions;

export default webtoonPageSlice.reducer;
