import * as React from "react";
import "./style.css";



import { IGridState } from "../Start/StartComponent";
import Grid from "../../domain/Grid";
import ISquareDetails from "../../domain/ISquareDetails";
import Square from "./Square"
import ItemTypes from "../Menu/ItemTypes";

interface IGridComponentState {
  grid: Grid;
  rows:number;
  cols:number;
  rowStart:number;
  colStart:number;
} 

export class GridComponent extends React.Component<IGridState, IGridComponentState> {
  constructor(props: IGridState) {
           super(props);
           this.state = {
             grid: this.props.grid,
             rows: 0,
             cols: 0,
             rowStart: 0,
             colStart:0
           };
           this.setGrid = this.props.setGrid;
           this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
           this.handleClick = this.handleClick.bind(this);
         }

         handleClick(e: React.MouseEvent<HTMLDivElement,MouseEvent>):void {
            let direction = e.currentTarget.getAttribute('data-direction');
            let colStart = this.state.colStart;
            let cols = this.state.cols;
            let rowStart = this.state.rowStart;
            let rows = this.state.rows;
            switch (direction) {
              case "up":
                rowStart -= 1;
                rowStart = rowStart < 0 ? 0 : rowStart;
                this.setState({
                  rowStart
                });
                break;

              case "down":
                rowStart += 1;
                rowStart =
                  rowStart + rows > this.state.grid.height + 1 ? rowStart - 1 : rowStart;
                this.setState({
                  rowStart
                });
                break;

              case "left":
                colStart -= 1;
                colStart = colStart = colStart < 0 ? 0 : colStart;
                this.setState({
                  colStart
                });
                break;

              case "right":
                colStart += 1;
                colStart =
                  colStart + cols > this.state.grid.width + 1 ? colStart - 1 : colStart;
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
                 {rowEnd < this.state.grid.height && (
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
                 {colEnd < this.state.grid.width && (
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
                       let row = rowStart + rowId;
                       return (
                         <tr key={row}>
                           {arr
                             .slice(colStart, colEnd)
                             .map((elt: ISquareDetails, colId: number) => {
                               let col = colStart + colId;
                               return (
                                 <td
                                   key={`${row}-${col}`}
                                 >
                                 <Square
                                     accept={[ItemTypes.SQUARE]}
                                     details={elt}
                                     {...{row,col}}
                                     grid={this.state.grid}
                                     setGrid={this.setGrid}
                                 />
                               </td>
                               );
                             })}
                         </tr>
                       );
                     })}
                 </tbody>
               </table>
             </div>
           );
         }
       }
