import Grid from "../domain/Grid";
import ISquare from "../domain/ISquare";
import NoDetailSquare from "../domain/NoDetailSquare";

export interface GridService {
    getGrids(): Grid[];
    saveGrid(grid: Grid): void;
}

export class HardCodeGridService implements GridService{

    grid : Grid;

    constructor() {
        this.grid = new Grid(10,10,"a grid");
        let square1: ISquare = new NoDetailSquare(5, 5);
        let square2: ISquare = new NoDetailSquare(5, 8);
        this.grid.add(square1);
        this.grid.add(square2);
        this.getGrids = this.getGrids.bind(this);
        this.saveGrid = this.saveGrid.bind(this);
    }

    saveGrid(grid: Grid):void {
        return;
    }

    getGrids() :Grid[] {
        return [this.grid];
    }
}