import * as React from "react";
import { useDrag } from "react-dnd";

interface DraggableSquareProps {
  type: string
}

const DraggableSquare: React.FC<DraggableSquareProps> = ({ type }) => {
  const [{ opacity, }, drag] = useDrag({
    item: { type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  return (
    <div className="draggable-square" ref={drag} style={{ opacity }}></div>
  );
}

export default DraggableSquare
