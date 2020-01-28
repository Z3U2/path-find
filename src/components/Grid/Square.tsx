import * as React from "react";
import { useDrop } from "react-dnd";

import { IGridState } from "../Start/IGridState";
import ISquareDetails from "../../domain/ISquareDetails";
import NoDetailSquare from "../../domain/NoDetailSquare"
import Grid from "../../domain/Grid";
import ISquare from "../../domain/ISquare"





interface SquareProps {
  accept: string[];
  lastDroppedItem?: any;
  details : ISquareDetails;
  row:number;
  col:number;
  grid:Grid;
  setGrid(grid:Grid): void;
}

const Square: React.FC<SquareProps> = ({
  accept,
  details,
  row,
  col,
  grid,
  setGrid
}) => {
  const onDrop = (item: any) => {
    let square: ISquare = new NoDetailSquare(row, col);
    try {
      grid.add(square);
      setGrid(grid);
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop() && (details == null)
    })
  });

  const isActive = isOver && canDrop;
  let backgroundColor = details ? "rgb(104, 076, 150)" : "#b19cd9";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div
      className="square"
      ref={drop}
      style={{ backgroundColor }}
    ></div>
  );
};

export default Square;

