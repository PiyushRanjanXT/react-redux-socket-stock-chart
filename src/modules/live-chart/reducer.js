import { DATA_RECEIVED, CLEAR_LIVE_CHART_DATA } from "./constants";
const initialState = {
  liveChartData: [],
  liveChartVolume: [],
};

function liveChartReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        liveChartData: [...state.liveChartData, action.data],
        liveChartVolume: [...state.liveChartVolume, action.volume],
      };
    case CLEAR_LIVE_CHART_DATA:
      return {
        ...state,
        liveChartData: [],
        liveChartVolume: [],
      };
    default:
      return state;
  }
}

export default liveChartReducer;
