import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { GetArticleListPayload } from '@/types/models/article'
import type { StoreArticleInitstate } from '@/types/store';
import { getList } from '@/models/article'
import { trackLoadingState } from '../utils';
export const fetchArticle = createAsyncThunk(
    'article/fetchArticle',
    async (payload: GetArticleListPayload) => {
        console.log(payload)
        const res = await getList(payload);
        console.log(res)
        return res;
    },
);
const initialState: StoreArticleInitstate = {
    article: [],
};
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: builder => {
        trackLoadingState(builder, fetchArticle, 'article');
    },
});
export default articleSlice.reducer;