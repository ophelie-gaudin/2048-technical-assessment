import { ReactNode, useState } from "react";

export const Grid = () => {
  const grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  const [counter, setCounter] = useState(0);

  const [isRunningGame, setIsRunningGame] = useState<boolean>(true);
  const [endGame, setEndGame] = useState<string | null>(null);

  const playGame = () => {
    // Conditions for a new turn : no case with 2048 value (succeed) && no empty grid

    for (const row of grid) {
      for (const value of row) {
        if (value == 2048) {
          setEndGame("Succeed");
        }
      }
    }

    // Display a number in a case with null value (random)

    // Add event listener on keyboard for one direction

    // Move cases + add their value when they are side by side

    // Add +1 at counter
  };

  return (
    <div className="container">
      <div className="row">
        <div className="column">{grid[0][0] ?? "*"}</div>
        <div className="column">{grid[0][1] ?? "*"} </div>
        <div className="column">{grid[0][2] ?? "*"}</div>
        <div className="column">{grid[0][3] ?? "*"}</div>
      </div>
      <div className="row">
        <div className="column">{grid[1][0] ?? "*"}</div>
        <div className="column">{grid[1][1] ?? "*"}</div>
        <div className="column">{grid[1][2] ?? "*"}</div>
        <div className="column">{grid[1][3] ?? "*"}</div>
      </div>
      <div className="row">
        <div className="column">{grid[2][0] ?? "*"}</div>
        <div className="column">{grid[2][1] ?? "*"}</div>
        <div className="column">{grid[2][2] ?? "*"}</div>
        <div className="column">{grid[2][3] ?? "*"}</div>
      </div>
      <div className="row">
        <div className="column">{grid[3][0] ?? "*"}</div>
        <div className="column">{grid[3][1] ?? "*"}</div>
        <div className="column">{grid[3][2] ?? "*"}</div>
        <div className="column">{grid[3][3] ?? "*"}</div>
      </div>
    </div>
  );
};
