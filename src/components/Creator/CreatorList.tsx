import * as React from "react";
import { GridService, HardCodeGridService } from "../../services/GridService";
import Grid from "../../domain/Grid";
import { IGridState } from "../Start/IGridState";

export class CreatorList extends React.Component<IGridState, {}> {
         private _gridService: GridService = new HardCodeGridService();

         grids: Grid[];
         constructor(props: IGridState) {
           super(props);
           this.grids = this._gridService.getGrids();
           this.setGrid = this.props.setGrid;
           this.handleClick = this.handleClick.bind(this);
         }

         setGrid(grid: Grid): void {}

         handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
           let name = e.currentTarget.getAttribute("data-name");
           let grid = this.grids.find((grid: Grid) => grid.name == name);
           this.setGrid(grid);
         }

         render() {
           return (
             <div className="creator-list">
                <span className='list-title'>Load Grid ?</span>
               <ul>
                 {this.grids.map((grid: Grid) => (
                   <li
                     onClick={this.handleClick}
                     key={grid.name}
                     data-name={grid.name}
                   >
                     Name : '{grid.name}' Dim: {`${grid.width}x${grid.height}`}
                   </li>
                 ))}
               </ul>
             </div>
           );
         }
       }