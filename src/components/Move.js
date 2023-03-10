import React from "react";

function Move({move,moveBack}) {

  return (
    <li><button onClick={() => moveBack(move.id)}>{move.text}</button></li>
  );

}

export default Move;
