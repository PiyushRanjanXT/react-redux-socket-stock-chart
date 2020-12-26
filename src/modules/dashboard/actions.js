import {
  FETCH_HISTORIC_DATA,
  FETCH_HISTORIC_DATA_SUCCESS,
  FETCH_HISTORIC_DATA_PENDING,
  FETCH_HISTORIC_DATA_FAIL,
  SAVE_VOLUME,
} from "./constants";

export const fetchHistoricData = (interval) => ({
  type: FETCH_HISTORIC_DATA,
  interval: interval,
});

export const saveVolume = (volume) => ({
  type: SAVE_VOLUME,
  volume: volume,
});

export const fetchHistoricDataSuccess = (data) => ({
  type: FETCH_HISTORIC_DATA_SUCCESS,
  data: data,
});

export const fetchHistoricDataPending = () => ({
  type: FETCH_HISTORIC_DATA_PENDING,
});

export const fetchHistoricDataFail = (error) => ({
  type: FETCH_HISTORIC_DATA_FAIL,
  error: error,
});
