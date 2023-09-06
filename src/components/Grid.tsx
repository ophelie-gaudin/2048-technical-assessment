import { ReactNode, useState } from "react";

export const Grid = () => {
  const [grid, setGrid] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
  const [isRunningGame, setIsRunningGame] = useState<boolean | null>(true);
  const [endGame, setEndGame] = useState<string | null>(null);
  const [emptyBoxes, setEmptyBoxes] = useState<[Object]>([]);
  const [direction, setDirection] = useState<string>("down");

  const checkEndOfGame = () => {
    setIsRunningGame(false);

    loop1: for (const row of grid) {
      loop2: for (const value of row) {
        // Check if success
        if (value == 2048) {
          setIsRunningGame(false);
          setEndGame("Succeed");
          break loop1;
        }

        // Check if there is an empty box
        if (value == null) {
          setIsRunningGame(true);
          setEmptyBoxes(
            emptyBoxes <<
              {
                row: grid.indexOf(row),
                column: grid[grid.indexOf(row)].indexOf(value),
              }
          );
        }
      }
    }
  };

  const addNewBox = () => {
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    const selectedEmptyBox = emptyBoxes[randomIndex];
    const randomNewValue = Math.floor(Math.random() * 100) % 2 === 0 ? 2 : 4;

    const newGrid = [...grid];
    newGrid[selectedEmptyBox.row][selectedEmptyBox.column] = randomNewValue;
    setGrid(newGrid);
  };

  const listenDirection = () => {
    document.addEventListener("keydown", function (event) {
      let keyDownDirection = "";

      switch (event.key) {
        case "ArrowUp":
          keyDownDirection = "up";
          break;
        case "ArrowDown":
          keyDownDirection = "down";
          break;
        case "ArrowLeft":
          keyDownDirection = "left";
          break;
        case "ArrowRight":
          keyDownDirection = "right";
          break;
      }

      setDirection(keyDownDirection);
    });
  };

  const playGame = () => {
    // Conditions for a new turn : no box with 2048 value (succeed) && no empty grid
    checkEndOfGame();

    if (isRunningGame) {
      // Display a number in a box with null value (random)
      addNewBox();

      // Add event listener on keyboard for one direction
      listenDirection();

      // Move boxes + add their value when they are side by side

      // Add +1 at counter
    }
  };

  playGame();

  return (
    <div className="container">
      {isRunningGame && endGame ? (
        <div>{endGame}</div>
      ) : (
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
      )}
    </div>
  );
};
