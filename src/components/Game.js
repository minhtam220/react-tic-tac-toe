import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  let [moves, setMoves] = useState([
    {
      id: 0,
      text: "Go to game start",
      xIsNext: true,
      squares: squares,
    },
  ]);

  setMoves();
  moves = [];

  let [currentMove, setCurrentMove] = useState(0);
  let [maxMove, setMaxMove] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      //cac duong ngang
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      //cac duong doc
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      //cac duong xeo
      [0, 4, 8],
      [2, 4, 6],
    ];

    //chay tu 0 toi 8
    for (let i = 0; i < lines.length; i++) {
      //destruct a line

      const [a, b, c] = lines[i];
      //const [0, 1, 2] = lines[0];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    //NEW CODES
    const newSquares = squares.slice();

    console.log("handle Click - before");
    console.log("current Move " + currentMove);
    console.log("max Move " + maxMove);

    if (newSquares[i] === null && winner === null) {
      //reset the move
      if (currentMove < maxMove) {
        console.log("reset " + currentMove);
        for (let i = currentMove; i < maxMove; i++) {
          moves.pop();
        }
      }

      if (xIsNext) {
        newSquares[i] = "X";
      } else {
        newSquares[i] = "O";
      }

      const newMove = {
        id: moves.length,
        text: "Go to move #" + moves.length,
        xIsNext: xIsNext ? false : true,
        squares: newSquares,
      };

      currentMove = newMove.id;
      maxMove = newMove.id;
      setCurrentMove(currentMove);
      setMaxMove(maxMove);

      moves.push(newMove);
      setMoves(moves);

      setXIsNext(xIsNext ? false : true);

      setSquares(newSquares);

      /*
      console.log("handle Click - after");
      console.log("current Move " + currentMove);
      console.log("max Move " + maxMove);
      */
    }
  };

  const moveBack = (id) => {
    const currentXIsNext = moves[id].xIsNext;
    const currentSquare = moves[id].squares;

    /*moves.forEach((move) => {
      if (move.id !== id) {
        move.current = false;
      } else {
        move.current = true;
      }
    });*/

    currentMove = id;
    setCurrentMove(currentMove);

    setXIsNext(currentXIsNext);
    setSquares(currentSquare);

    console.log("move Back");
    console.log("current Move " + currentMove);
    console.log("max Move " + maxMove);
  };

  //Restart game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setCurrentMove(0);
    setMaxMove(0);
    setMoves([
      {
        id: 0,
        text: "Go to game start",
        xIsNext: true,
        squares: Array(9).fill(null),
      },
    ]);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
      <div className="game">
        <Board squares={squares} handleClick={handleClick} />
        <History moves={moves} moveBack={moveBack} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
