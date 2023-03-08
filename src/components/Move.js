import React, { useState } from "react";

export default function Move({move,moveBack}) {

  return (
    <li><button onClick={() => moveBack(move.id)}>{move.text}</button></li>
  );

}
