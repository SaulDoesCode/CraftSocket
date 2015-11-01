"use strict";

function CraftSocket(wsAddress, protocols) {
  (protocols !== undefined && protocols instanceof Array) ? this.Socket = new WebSocket(wsAddress, protocols) : this.Socket = new WebSocket(wsAddress);
  this.messageCalls = [];
  this.RecieveCalls = [];
  this.Socket.onmessage = e => this.RecieveCalls.forEach(call => call(e));
}
CraftSocket.prototype.send = function (Message, func) {
  this.messageCalls.push(() => {
    this.Socket.send(Message);
    if (func !== undefined && typeof func === "function") this.recieve((data, e) => func(data, e));
  });
  this.Socket.onopen = e => this.messageCalls[this.messageCalls.length - 1]();
}
CraftSocket.prototype.recieve = function (func) {
  (func !== undefined && typeof func === "function") ? this.RecieveCalls.push(e => func(e.data, e)): console.error("callback is not a function or is not defined");
}
CraftSocket.prototype.close = function () {
  this.Socket.close();
}
