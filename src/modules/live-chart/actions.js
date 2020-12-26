import {
  INIT_SOCKET,
  CLOSE_SOCKET,
  DATA_RECEIVED,
  CLEAR_LIVE_CHART_DATA,
} from "./constants";

export const initSocket = () => ({
  type: INIT_SOCKET,
});
export const clearLiveChatData = () => ({
  type: CLEAR_LIVE_CHART_DATA,
});
export const closeSocket = () => ({
  type: CLOSE_SOCKET,
});
export const dataReceived = (data, volume) => {
  return {
    type: DATA_RECEIVED,
    data,
    volume,
  };
};
