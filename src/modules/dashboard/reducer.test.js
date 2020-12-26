import historicDataReducer from "./reducer";
import {
  FETCH_HISTORIC_DATA_SUCCESS,
  FETCH_HISTORIC_DATA_PENDING,
  FETCH_HISTORIC_DATA_FAIL,
  SAVE_VOLUME,
} from "./constants";
describe("Dashboard Reducer", () => {
  const initialState = {
    historicData: null,
    volume: null,
    isPending: false,
    error: null,
  };
  const historicData = [
    [1545661800000, 37.04, 37.89, 36.65, 36.71],
    [1545834600000, 37.08, 39.31, 36.68, 39.29],
    [1545921000000, 38.96, 39.19, 37.52, 39.04],
    [1546007400000, 39.38, 39.63, 38.64, 39.06],
    [1546266600000, 39.63, 39.84, 39.12, 39.44],
    [1546439400000, 38.72, 39.71, 38.56, 39.48],
    [1546525800000, 35.99, 36.43, 35.5, 35.55],
  ];

  const volume = [
    [1545661800000, 36.71],
    [1545834600000, 39.29],
    [1545921000000, 39.04],
    [1546007400000, 39.06],
    [1546266600000, 39.44],
    [1546439400000, 39.48],
    [1546525800000, 35.55],
  ];

  it("FETCH_HISTORIC_DATA_SUCCESS", () => {
    const action = {
      type: FETCH_HISTORIC_DATA_SUCCESS,
      data: historicData,
    };
    const expected = { ...initialState, historicData };
    expect(historicDataReducer(initialState, action)).toEqual(expected);
  });


  it("FETCH_HISTORIC_DATA_PENDING", () => {
    const action = {
      type: FETCH_HISTORIC_DATA_PENDING,
    };
    const expected = { ...initialState, isPending:true };
    expect(historicDataReducer(initialState, action)).toEqual(expected);
  });


  it("FETCH_HISTORIC_DATA_FAIL", () => {
    const action = {
      type: FETCH_HISTORIC_DATA_FAIL,
      error: 'test error',
    };
    const expected = { ...initialState, error: 'test error' };
    expect(historicDataReducer(initialState, action)).toEqual(expected);
  });


  it("SAVE_VOLUME", () => {
    const action = {
      type: SAVE_VOLUME,
      volume: volume,
    };
    const expected = { ...initialState, volume };
    expect(historicDataReducer(initialState, action)).toEqual(expected);
  });

});
