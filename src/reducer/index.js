import { combineReducers } from 'redux'

import loadingReducer from './loadingReducer';
import imageReducer from './imageReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images : imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imagesStats: statsReducer,
});

export default rootReducer;