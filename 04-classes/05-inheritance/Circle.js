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
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_theX, _theY, _radius) {
        var _this = _super.call(this, _theX, _theY) || this;
        _this._theX = _theX;
        _this._theY = _theY;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "theY", {
        get: function () {
            return this._theY;
        },
        set: function (value) {
            this._theY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "theX", {
        get: function () {
            return this._theX;
        },
        set: function (value) {
            this._theX = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " radius=".concat(this._radius);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
var circle = new Circle(1, 2, 3);
console.log(circle.getInfo());
var shapeCircle = new Shape_1.Shape(3, 2);
console.log(shapeCircle.getInfo());
