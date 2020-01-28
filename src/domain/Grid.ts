import ISquare from "./ISquare";
import ISquareDetails from "./ISquareDetails";
import Direction from "./Direction";

export default class Grid {

    readonly gridArray : Array<Array<ISquareDetails>>;
    readonly width: number;
    readonly height: number;
    readonly name: string;

    constructor(width:number, height: number, name: string) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.gridArray = [];
        for (let i = 0; i<height; i++) {
            this.gridArray.push([]);
            for (let j = 0; j<width;j++) {
                this.gridArray[i].push(null);
            }
        }
    }

    getDetails(row:number, col:number):ISquareDetails {
        return this.gridArray[row][col];
    }

    add(square: ISquare) {
        let row: number = square.row;
        let col: number = square.col;
        if (this.gridArray[row][col]!= null) {
            throw new Error("There's already a square in place!")
        }
        this.gridArray[row][col] = square.details;
    }

    findShortestPath(square1 : ISquare, square2 : ISquare): Array<Direction>  {
        // TO DO: Write algorithm
        return null;
    }

    public toString(): string {
        let str: string = "";
        this.gridArray.forEach((arr,yIndex) => {
            arr.forEach((det,xIndex) => {
                if (det == null) str += "o";
                else str += "x";
                str += xIndex === this.width - 1 ? "" : " ";
                
            })
            str += (yIndex === this.height-1 ? "" : "\n")
        })
        return str;
    }
    
}