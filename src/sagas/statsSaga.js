import { take , fork } from "redux-saga/effects";
import { loadImagesStats, setImagesStats, setImagesStatsError } from "../action";
import { fetchImagesStats } from "../api";
import { put,call } from "@redux-saga/core/effects";

import { IMAGES } from "../constants";

function* handleStatsRequest(id){
    for (let i=0; i<4; i++){
      try{
           yield put(loadImagesStats(id));
           const res = yield call(fetchImagesStats,id);
           yield put(setImagesStats(id,res.download.total));
           return true;

      }catch(e){
        yield put(setImagesStatsError(id));
      }
    }
}





export default function* watchStartsRequest(){
    while(true){
       const { images } = yield take(IMAGES.LOAD_SUCCESS);

         
          
          for(let i=0; i< images.length; i++){
            yield fork(handleStatsRequest , images[i].id);
          }
    }
}

