import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import historicDataReducer from "./modules/dashboard/reducer";
import liveChartReducer from "./modules/live-chart/reducer";
import dashboardSaga from "./modules/dashboard/saga";
import liveChartSaga from "./modules/live-chart/saga";

function* rootSaga() {
  yield fork(dashboardSaga);
  yield fork(liveChartSaga);
}
const rootReducer = combineReducers({
  historicDataReducer,
  liveChartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
