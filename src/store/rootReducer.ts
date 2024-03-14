import { combineReducers } from '@reduxjs/toolkit';
import article from './feafures/article';
import extract  from './feafures/extract';
const rootReducer = combineReducers({
    // 引入example切片
    article,
    extract

});

export default rootReducer;