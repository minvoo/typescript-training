import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(private _TheX : number, private _TheY: number, private _width: number, private _height: number){
    super(_TheX, _TheY);
    }

    public get width() {
        return this._width;
    }

    public get x() {
        return this._TheX;
    }
    public get y() {
        return this._TheY;
    }

    public get height() {
        return this._height;
    }

    public set width(_width : number) {
        this._width = _width;
    }

    public set height(_height : number) {
        this._height = _height;
    }

    public set x(_x : number) {
        this._TheX = _x;
    }

    public set y(_y : number) {
        this._TheY = _y;
    }

    public getInfo(): string {
        return super.getInfo() + ` width=${this._width} height=${this._height}`;
    }
}