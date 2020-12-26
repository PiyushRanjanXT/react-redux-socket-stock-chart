import { put, takeLatest } from "redux-saga/effects";
import { INIT_SOCKET, CLOSE_SOCKET } from "./constants";
import { dataReceived, clearLiveChatData } from "./actions";
import Socket from "./../../socket";
import store from "./../../store";
let socketObj;

function* initSocket() {
  socketObj = yield new Socket();
  socketObj.subscribe();
  //safe to call any api or subscribe some observable or event.

  socketObj.socket.on("data", function (data, acknowledge) {
    acknowledge(1);
    let rowArray = data.split(",");
    rowArray = [
      Number(rowArray[0]),
      Number(rowArray[1]),
      Number(rowArray[2]),
      Number(rowArray[3]),
      Number(rowArray[4]),
      Number(rowArray[5]),
    ];
    const volume = [Number(rowArray[0]), Number(rowArray[5])];
    store.dispatch(dataReceived(rowArray, volume));
  });
  socketObj.socket.on("error", (err) => {
    console.log(err);
  });
}

function* closeSocket() {
  if (socketObj) {
    yield socketObj.unsubscribe();
    socketObj = null;
  }
  yield put(clearLiveChatData());
}

function* liveChartSaga() {
  yield takeLatest(INIT_SOCKET, initSocket);
  yield takeLatest(CLOSE_SOCKET, closeSocket);
}
export default liveChartSaga;
