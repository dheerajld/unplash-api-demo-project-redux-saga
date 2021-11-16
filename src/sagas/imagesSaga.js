import { select ,takeEvery ,call , put} from '@redux-saga/core/effects';

import { IMAGES } from '../constants';

import { fetchImages } from '../api';
import { setError, setImages } from '../action';

const getPage = state => state.nextPage;

function* handleImagesLoad(){
     try{
        const page = yield select(getPage);
        const images = yield call(fetchImages , page);
        yield put(setImages(images));

     }catch(error){
         yield put(setError(error.toString()));
     }
    
}


export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD , handleImagesLoad) 
} 