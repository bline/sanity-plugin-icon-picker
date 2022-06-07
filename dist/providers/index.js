"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _config = require("../config");

var _fa = _interopRequireDefault(require("./fa"));

var _mdi = _interopRequireDefault(require("./mdi"));

var _hi = _interopRequireDefault(require("./hi"));

var _faPrefix$mdiPrefix$h;

var faPrefix = _config.PROVIDERS.fontAwesome.prefix;
var mdiPrefix = _config.PROVIDERS.materialDesign.prefix;
var hiPrefix = _config.PROVIDERS.hero.prefix;

var _default = (_faPrefix$mdiPrefix$h = {}, (0, _defineProperty2["default"])(_faPrefix$mdiPrefix$h, faPrefix, (0, _fa["default"])(faPrefix)), (0, _defineProperty2["default"])(_faPrefix$mdiPrefix$h, mdiPrefix, (0, _mdi["default"])(mdiPrefix)), (0, _defineProperty2["default"])(_faPrefix$mdiPrefix$h, hiPrefix, (0, _hi["default"])(hiPrefix)), _faPrefix$mdiPrefix$h);

exports["default"] = _default;