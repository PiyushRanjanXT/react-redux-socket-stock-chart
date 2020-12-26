import {
  FETCH_HISTORIC_DATA_SUCCESS,
  FETCH_HISTORIC_DATA_PENDING,
  FETCH_HISTORIC_DATA_FAIL,
  SAVE_VOLUME
} from "./constants";
const initialState = {
  historicData: null,
  volume: null,
  isPending: false,
  error: null,
};

export default function historicDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HISTORIC_DATA_SUCCESS:
      return {
        ...state,
        historicData: action.data,
        isPending: false,
        error: null,
      };
      case SAVE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    case FETCH_HISTORIC_DATA_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_HISTORIC_DATA_FAIL:
      return { 
        ...state, 
        error: action.error 
      }
    default:
      return state;
  }
}
