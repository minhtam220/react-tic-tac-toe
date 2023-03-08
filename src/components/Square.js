import React from "react";

function Square({squares,index,handleClick}) {

  return (
    <button className={"square"} onClick={() => handleClick(index)}>{squares[index]}</button>
  );

}

export default Square;