"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _rootRouter = _interopRequireDefault(require("./routers/rootRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // Global Middlewares

app.use("/static", _express["default"]["static"]("assets"));
app.use("/", _rootRouter["default"]);
var _default = app;
exports["default"] = _default;