import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import service from '../../../api/axios';
import type { GetExtractListPayload, } from '@/types/models/extract'
import type { StoreExtractInitstate } from '@/types/store';
import { getList,  } from '@/models/article'
import { trackLoadingState } from '../utils';
export const fetchExtract = createAsyncThunk(
    'article/fetchArticle',
    async (payload: GetExtractListPayload) => {

        const res = await service({
            url: '/extract/list',
            method: 'get',
            data: payload,
        });;

        return res;
    },
);

const initialState: StoreExtractInitstate = {
    extract: undefined,

    isLoading: false,
};
export const extractSlice = createSlice({
    name: 'extract',
    initialState,
    reducers: {},
    extraReducers: builder => {

        trackLoadingState(builder, fetchExtract, 'extract');
       
    },
});
export default extractSlice.reducer;