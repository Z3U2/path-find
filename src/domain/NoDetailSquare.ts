import ISquare from "./ISquare";
import ISquareDetails from "./ISquareDetails";

class NoDetail implements ISquareDetails {}

export default class NormalSquare implements ISquare {
  private _col: number;
  public get col(): number {
    return this._col;
  }
  public set col(val: number) {
    this._col = val;
  }

  private _row: number;
  public get row(): number {
    return this._row;
  }
  public set row(val: number) {
    this._row = val;
  }

  private _details: NoDetail;
  public get details(): NoDetail {
    return this._details;
  }
  public set details(val: NoDetail) {
    this._details = val;
  }

  constructor(row: number, col: number) {
    this._row = row;
    this._col = col;
    this._details = new NoDetail();
  }
}
