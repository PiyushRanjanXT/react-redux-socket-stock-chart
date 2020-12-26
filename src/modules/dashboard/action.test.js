import * as actions from "./actions";
import {
    FETCH_HISTORIC_DATA,
    FETCH_HISTORIC_DATA_SUCCESS,
    FETCH_HISTORIC_DATA_PENDING,
    FETCH_HISTORIC_DATA_FAIL,
    SAVE_VOLUME,
  } from "./constants";
describe("Dashboard actions", () => {
 
  it("fetchHistoricData", () => {
    expect(actions.fetchHistoricData(5)).toEqual({type:FETCH_HISTORIC_DATA, interval:5});
  });
  it("saveVolume", () => {
    expect(actions.saveVolume([])).toEqual({type:SAVE_VOLUME, volume:[]});
  });
  it("fetchHistoricDataSuccess", () => {
    expect(actions.fetchHistoricDataSuccess([])).toEqual({type:FETCH_HISTORIC_DATA_SUCCESS, data:[]});
  });
  it("fetchHistoricDataPending", () => {
    expect(actions.fetchHistoricDataPending()).toEqual({type:FETCH_HISTORIC_DATA_PENDING});
  });
  it("fetchHistoricDataFail", () => {
    expect(actions.fetchHistoricDataFail('error')).toEqual({type:FETCH_HISTORIC_DATA_FAIL, error:'error'});
  });

  
});
