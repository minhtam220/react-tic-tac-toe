import React from "react";
import Square from "./Square";

function Board({squares,handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square squares={squares} index={0} handleClick={handleClick}></Square>
          <Square squares={squares} index={1} handleClick={handleClick}></Square>
          <Square squares={squares} index={2} handleClick={handleClick}></Square>
        </div>
        <div className="board-row">
          <Square squares={squares} index={3} handleClick={handleClick}></Square>
          <Square squares={squares} index={4} handleClick={handleClick}></Square>
          <Square squares={squares} index={5} handleClick={handleClick}></Square>
        </div>
        <div className="board-row">
          <Square squares={squares} index={6} handleClick={handleClick}></Square>
          <Square squares={squares} index={7} handleClick={handleClick}></Square>
          <Square squares={squares} index={8} handleClick={handleClick}></Square>
        </div>
      </div>
    </div>
  );
}

export default Board;
