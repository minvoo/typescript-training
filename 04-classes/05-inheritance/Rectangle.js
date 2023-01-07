"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(_TheX, _TheY, _width, _height) {
        var _this = _super.call(this, _TheX, _TheY) || this;
        _this._TheX = _TheX;
        _this._TheY = _TheY;
        _this._width = _width;
        _this._height = _height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (_width) {
            this._width = _width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this._TheX;
        },
        set: function (_x) {
            this._TheX = _x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this._TheY;
        },
        set: function (_y) {
            this._TheY = _y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (_height) {
            this._height = _height;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " width=".concat(this._width, " height=").concat(this._height);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;