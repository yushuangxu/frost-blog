import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { GetArticleListPayload, GetArticleInfoPayload } from '@/types/models/article'
import type { StoreArticleInitstate } from '@/types/store';
import { getList, getInfo } from '@/models/article'
import { trackLoadingState } from '../utils';
export const fetchArticle = createAsyncThunk(
    'article/fetchArticle',
    async (payload: GetArticleListPayload) => {
        const res = await getList(payload);

        return res;
    },
);
export const fetchInfo = createAsyncThunk(
    'article/info',
    async (payload: GetArticleInfoPayload) => {
        const res = await getInfo(payload);

        return res;
    },
);
const initialState: StoreArticleInitstate = {
    article: undefined,
    info: {},
    isLoading: false,
};
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: builder => {

        trackLoadingState(builder, fetchArticle, 'article');
        trackLoadingState(builder, fetchInfo, 'info');
    },
});
export default articleSlice.reducer;