import Grid from "../../domain/Grid";
export interface IGridState {
    grid: Grid;
    setGrid(grid: Grid): void;
}
