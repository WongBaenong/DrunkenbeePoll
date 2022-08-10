"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _homeController = require("../controllers/homeController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootRouter = _express["default"].Router();

rootRouter.get("/", _homeController.home);
rootRouter.post("/additem", _homeController.addItem);
var _default = rootRouter;
exports["default"] = _default;