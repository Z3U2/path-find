import * as React from "react";

import Grid from "../../domain/Grid";
import { IGrid } from "../Start/StartComponent";
import { HardCodeGridService, GridService } from "../../services/GridService";

interface ICreatorState {
  width: number;
  height: number;
  name : string;
}

export class CreatorForm extends React.Component<IGrid, ICreatorState> {
  private _gridService: GridService = new HardCodeGridService();

  constructor(props: IGrid) {
    super(props);
    this.state = {
      height: 1000,
      width: 1000,
      name: ""
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
    if (name == "name") {
      this.setState({
        name: e.target.value
      });
    }
  }

  initGrid(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    let width = this.state.width;
    let height = this.state.height;
    let name = this.state.name;
    let grid = new Grid(width, height, name);
    this.setGrid(grid);
    this._gridService.saveGrid(grid)
  }

  render() {
    return (
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
          <div className="form-input">
            <label htmlFor="name">name: </label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="form-submit">
            <input type="submit" value="new !" />
          </div>
        </form>
      </div>
    );
  }
}
