import { Shape } from "./Shape";

export class Circle extends Shape {
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    public get theY(): number {
        return this._theY;
    }
    public set theY(value: number) {
        this._theY = value;
    }
    public get theX(): number {
        return this._theX;
    }
    public set theX(value: number) {
        this._theX = value;
    }


    constructor(private _theX: number, private _theY: number, private _radius: number) {
        super(_theX, _theY);
    }

    public getInfo(): string {
        return super.getInfo() + ` radius=${this._radius}`
    }
}


let circle = new Circle(1,2,3);
console.log(circle.getInfo());

let shapeCircle = new Shape(3,2);
console.log(shapeCircle.getInfo());