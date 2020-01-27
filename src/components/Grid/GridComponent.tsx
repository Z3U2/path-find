import * as React from "react";
import "./style.css";



import { IGrid } from "../Start/StartComponent";
import Grid from "../../domain/Grid";
import ISquareDetails from "../../domain/ISquareDetails";
import {Square} from "./Square"

interface IGridComponentState {
  grid: Grid;
  rows:number;
  cols:number;
  rowStart:number;
  colStart:number;
} 

export class GridComponent extends React.Component<IGrid, IGridComponentState> {
         grid: Grid;
         constructor(props: IGrid) {
           super(props);
           this.state = {
             grid: this.props.grid,
             rows: 0,
             cols: 0,
             rowStart: 0,
             colStart:0
           };
           this.grid = this.props.grid;
           this.setGrid = this.props.setGrid;
           this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
         }

         handleClick(e: React.MouseEvent<HTMLDivElement,MouseEvent>):void {
            let direction = e.currentTarget.getAttribute('data-direction');
            let colStart = this.state.colStart;
            let cols = this.state.cols;
            switch (direction) {
              case "up":
                colStart -= 1;
                colStart = colStart < 0 ? 0 : colStart;
                this.setState({
                  colStart
                });
                break;

              case "down":
                colStart += 1;
                colStart = colStart + cols > this.grid.height ? 0 : colStart;
                this.setState({
                  colStart
                });
                break;

              default:
                break;
            }
         }

         componentDidMount() {
           this.updateWindowDimensions();
           window.addEventListener("resize", this.updateWindowDimensions);
         }

         componentWillUnmount() {
           window.removeEventListener("resize", this.updateWindowDimensions);
         }

         updateWindowDimensions() {
           let width = window.innerWidth;
           let height = window.innerHeight;
           let rows = height / 45;
           let cols = width / 45;
           this.setState({
             rows,
             cols
           });
         }

         setGrid(grid: Grid): void {}

         render() {
           let colStart = this.state.colStart;
           let colEnd = this.state.colStart + this.state.cols;
           let rowStart = this.state.rowStart;
           let rowEnd = this.state.rowStart + this.state.rows;
           return (
             <div className="grid">
               <table>
                 {rowStart > 0 && (
                   <div
                     onClick={this.handleClick}
                     className="arrow-button arrow-button-up"
                     data-direction="up"
                   >
                     <i className="material-icons">keyboard_arrow_up</i>
                   </div>
                 )}
                 {rowEnd < this.grid.height && (
                   <div
                     onClick={this.handleClick}
                     className="arrow-button arrow-button-down"
                     data-direction="down"
                   >
                     <i className="material-icons">keyboard_arrow_down</i>
                   </div>
                 )}
                 {colStart > 0 && (
                   <div
                     onClick={this.handleClick}
                     className="arrow-button arrow-button-left"
                     data-direction="left"
                   >
                     <i className="material-icons">keyboard_arrow_left</i>
                   </div>
                 )}
                 {colEnd < this.grid.width && (
                   <div
                     onClick={this.handleClick}
                     className="arrow-button arrow-button-right"
                     data-direction="right"
                   >
                     <i className="material-icons">keyboard_arrow_right</i>
                   </div>
                 )}
                 <tbody>
                   {this.state.grid.gridArray
                     .slice(rowStart, rowEnd)
                     .map((arr: ISquareDetails[], rowId: number) => {
                       return (
                         <tr key={rowId}>
                           {arr
                             .slice(colStart, colEnd)
                             .map((elt: ISquareDetails, colId: number) => (
                               <td key={`${rowId}-${colId}`}>
                                 <Square
                                   details={this.grid.getDetails(
                                     rowStart + rowId,
                                     colStart + colId
                                   )}
                                 />
                               </td>
                             ))}
                         </tr>
                       );
                     })}
                 </tbody>
               </table>
             </div>
           );
         }
       }
