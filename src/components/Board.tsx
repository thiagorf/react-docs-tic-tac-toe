import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [nextIsX, setNextIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));

  function handleSquareClick(i: number) {
    if (squares[i] || handleWinner(squares)) {
      return;
    }
    const copy = squares.slice();
    if (nextIsX) {
      copy[i] = "X";
    } else {
      copy[i] = "O";
    }

    setSquares(copy);
    setNextIsX(!nextIsX);
  }

  const winner = handleWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner " + winner;
  } else {
    status = "Next player " + (nextIsX ? "X" : "O");
  }

  return (
    <>
      <p>{status}</p>

      <div className="board">
        {squares.map((s, i) => (
          <Square
            key={i}
            value={s}
            onSquareClick={() => handleSquareClick(i)}
          />
        ))}
      </div>
    </>
  );
}

function handleWinner(squares: string[]) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibilities.length; i++) {
    const [p1, p2, p3] = possibilities[i];
    if (squares[p1] == squares[p2] && squares[p1] == squares[p3]) {
      return squares[p1];
    }
  }

  return "";
}
