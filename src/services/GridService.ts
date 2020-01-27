import Grid from "../domain/Grid";

export interface GridService {
    getGrid(): Grid;
    saveGrid(grid: Grid): void;
}

export class HardCodeGridService {

    grid : Grid;

    constructor() {
        this.grid = new Grid(10,10);
        
    }
}