import ISquareDetails from "./ISquareDetails";
import ISquare from "./ISquare";
import NoDetailSquare from "./NoDetailSquare";

class ShortestPath {
  gridArray: Array<Array<ISquare>>;
  height: number;
  width: number;

  constructor(gridArray: Array<Array<ISquare>>, width: number, height: number) {
      this.gridArray = gridArray;
      this.height = height;
      this.width = width
  }

  private findMinDistance(square1: ISquare, square2: ISquare): number {
    let visited: Array<Array<boolean>> = [];
    for (let i = 0; i < this.height; i++) {
      visited.push([]);
      for (let j = 0; j < this.width; j++) {
        if (
          this.gridArray[i][j] == null ||
          (square2.row == i && square2.col == j)
        ) {
          visited[i].push(false);
        } else {
          visited[i].push(true);
        }
      }
    }
    let Q: Array<DistanceSquare> = [];
    Q.push(new DistanceSquare(square1.row, square1.col, 0));
    while (Q.length != 0) {
      let square: DistanceSquare = Q.shift();
      if (square.row == square2.row && square.col == square2.col) {
        return square.details.distance;
      }
      // moving up
      if (square.row - 1 >= 0 && visited[square.row - 1][square.col] == false) {
        Q.push(
          new DistanceSquare(
            square.row - 1,
            square.col,
            square.details.distance + 1
          )
        );
        visited[square.row - 1][square.col] = true;
      }

      // moving down
      if (
        square.row + 1 < this.height &&
        visited[square.row + 1][square.col] == false
      ) {
        Q.push(
          new DistanceSquare(
            square.row + 1,
            square.col,
            square.details.distance + 1
          )
        );
        visited[square.row + 1][square.col] = true;
      }

      // moving left
      if (square.col - 1 >= 0 && visited[square.row][square.col - 1] == false) {
        Q.push(
          new DistanceSquare(
            square.row,
            square.col - 1,
            square.details.distance + 1
          )
        );
        visited[square.row][square.col - 1] = true;
      }

      // moving right
      if (
        square.col + 1 < this.width &&
        visited[square.row][square.col + 1] == false
      ) {
        Q.push(
          new DistanceSquare(
            square.row,
            square.col + 1,
            square.details.distance + 1
          )
        );
        visited[square.row][square.col + 1] = true;
      }
    }
    throw new Error(`Coudldn't find path`);
  }
  private findAllPaths(square1:ISquare,square2:ISquare, distance:number) {

  }
  private makefindPath(square1: ISquare,square2:ISquare,distance:number,routes:Array<Array<NoDetailSquare>>) {
      const findPath= (route:Array<NoDetailSquare>,row:number,col:number) => {
        if (route.indexOf(new NoDetailSquare(row,col)) != -1) {

        }
      }
      // take length calculated by BFS or A* 
      // energy = length - (width+height-2) is what can be used to "stray away" from goal
      // no need to explore paths that stray away when energy = 0
      // no need to explore paths when number of steps = distance
      // instanciate route object for each function call
  } 
}

interface ISquareDistanceDetail extends ISquareDetails {
    readonly distance:number
}

class SquareDistanceDetail implements ISquareDistanceDetail {
    readonly distance:number;
    
    constructor(distance: number) {
        this.distance = distance;
    }
}

class DistanceSquare implements ISquare<ISquareDistanceDetail> {
    
    readonly row:number;
    readonly col:number;
    readonly details:ISquareDistanceDetail;
    
    constructor(row: number,col:number,distance:number) {
        this.row = row;
        this.col = col;
        this.details = new SquareDistanceDetail(distance);
    }
}