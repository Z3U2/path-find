import * as React from "react";
import "./style.css"

import Grid from "../../domain/Grid";
import {IGrid} from "../Start/StartComponent"

interface ICreatorState {
    width: number;
    height: number;
}

export class CreatorComponent extends React.Component<IGrid, ICreatorState> {
         constructor(props: IGrid) {
           super(props);
           this.state = {
             height: 1000,
             width: 1000,
           };
           this.initGrid = this.initGrid.bind(this);
           this.handleChange = this.handleChange.bind(this);
           this.setGrid = this.props.setGrid;
         }

         setGrid(grid: Grid): void {}

         handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
           let name = e.target.name;
           if (name == "width") {
             this.setState({
               width: parseInt(e.target.value)
             });
           }
           if (name == "height") {
             this.setState({
               height: parseInt(e.target.value)
             });
           }
         }

         initGrid(e: React.FormEvent<HTMLFormElement>): void {
           e.preventDefault();
           let width = this.state.width;
           let height = this.state.height;
           this.setGrid(new Grid(width, height));
         }

         render() {
           return (
             <div className="creator-background">
               <div className="creator-title-wrapper"></div>
               <div className="creator-form-wrapper">
                 <form onSubmit={this.initGrid}>
                   <div className="form-input">
                     <label htmlFor="#width">width: </label>
                     <input
                       value={this.state.width}
                       onChange={this.handleChange}
                       type="number"
                       name="width"
                       id="width"
                     />
                   </div>
                   <div className="form-input">
                     <label htmlFor="height">height: </label>
                     <input
                       value={this.state.height}
                       onChange={this.handleChange}
                       type="number"
                       name="height"
                       id="height"
                     />
                   </div>
                   <div className="form-submit">
                     <input type="submit" value="submit" />
                   </div>
                 </form>
               </div>
             </div>
           );
         }
       }
