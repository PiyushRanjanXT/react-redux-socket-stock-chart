import io from "socket.io-client";
var CLIENT_ACKNOWLEDGEMENT = 1;
class Socket {
  constructor() {
    this.socket = io("http://kaboom.rksv.net/watch");
  }
  subscribe() {
    this.socket.emit(
      "sub",
      { state: true },
      CLIENT_ACKNOWLEDGEMENT,
      function (data) {
        console.log({ data });
      }
    );
  }
  unsubscribe() {
    this.socket.emit("unsub", { state: false });
  }
}

export default Socket;
