import React, { useState } from "react";
import Move from "./Move";

export default function History({moves, moveBack}) {
  return (
  <div className="history">
    <h4>History</h4>
    <ul>
      {moves
        .map((move,index) => (
          <Move 
          key={index} 
          move={moves[index]}
          moveBack={moveBack}/>
      ))}
    </ul>
  </div>
  );
}
