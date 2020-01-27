import ISquare from "./ISquare";
import ISquareDetails from "./ISquareDetails";

class NoDetail implements ISquareDetails {}

export default class NormalSquare implements ISquare {
  private _x: number;
  public get x(): number {
    return this._x;
  }
  public set x(val: number) {
    this._x = val;
  }

  private _y: number;
  public get y(): number {
    return this._y;
  }
  public set y(val: number) {
    this._y = val;
  }

  private _details: NoDetail;
  public get details(): NoDetail {
    return this._details;
  }
  public set details(val: NoDetail) {
    this._details = val;
  }

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this._details = new NoDetail();
  }
}
