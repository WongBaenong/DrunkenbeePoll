"use strict";

require("dotenv/config");

require("regenerator-runtime");

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;

var handleListening = function handleListening() {
  console.log("Server listening on port ".concat(PORT));
};

_server["default"].listen(PORT, handleListening);