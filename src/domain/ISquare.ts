import ISquareDetails from "./ISquareDetails";

export default interface ISquare<T extends ISquareDetails = ISquareDetails> {
    readonly row : number;
    readonly col : number;
    readonly details : T; 
}