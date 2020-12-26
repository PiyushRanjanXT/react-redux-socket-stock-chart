import { takeLatest } from "redux-saga/effects";
import { fetchHistoricData, dashboardSaga } from "./saga";
import { FETCH_HISTORIC_DATA } from "./constants";

describe("dashboardSaga", () => {
  const genObject = dashboardSaga();

  it("should wait for every FETCH_AUTHORS action and call fetchHistoricData", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(FETCH_HISTORIC_DATA, fetchHistoricData)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
