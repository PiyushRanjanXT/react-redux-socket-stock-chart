import { put, call, takeLatest } from "redux-saga/effects";
import apiCall from "./../../api";
import { insertInSortedArray } from "./../../util";
import {
  fetchHistoricDataSuccess,
  fetchHistoricDataPending,
  fetchHistoricDataFail,
  saveVolume,
} from "./actions";
import { FETCH_HISTORIC_DATA } from "./constants";

export function* fetchHistoricData(action) {
  yield put(fetchHistoricDataPending());
  const { interval } = action;
  const endpoint = `historical?interval=${interval}`;

  try {
    const response = yield call(apiCall.get, { endpoint });
    let data =[], volume=[];
    yield response.forEach((row) => {
      let rowArray = row.split(",");
      rowArray =  [
        Number(rowArray[0]),
        Number(rowArray[1]),
        Number(rowArray[2]),
        Number(rowArray[3]),
        Number(rowArray[4]),
        Number(rowArray[5]),
      ];
      const volEle = [rowArray[0], rowArray[5]];
      data = insertInSortedArray(rowArray,data);
      volume = insertInSortedArray(volEle,volume);
    });
    yield put(saveVolume(volume));
    yield put(fetchHistoricDataSuccess(data));
  } catch (error) {
    yield put(fetchHistoricDataFail(error));
  }
}

export function* dashboardSaga() {
  yield takeLatest(FETCH_HISTORIC_DATA, fetchHistoricData);
}
export default dashboardSaga;
