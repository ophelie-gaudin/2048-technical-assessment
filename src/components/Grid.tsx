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
  const [emptyBoxes, setEmptyBoxes] = useState<Object[]>([
    {
      row: 0,
      column: 0,
    },
    {
      row: 0,
      column: 1,
    },
    {
      row: 0,
      column: 2,
    },
    {
      row: 0,
      column: 3,
    },
    {
      row: 0,
      column: 0,
    },
    {
      row: 1,
      column: 1,
    },
    {
      row: 1,
      column: 2,
    },
    {
      row: 1,
      column: 3,
    },
    {
      row: 2,
      column: 0,
    },
    {
      row: 2,
      column: 1,
    },
    {
      row: 2,
      column: 2,
    },
    {
      row: 2,
      column: 3,
    },
    {
      row: 3,
      column: 0,
    },
    {
      row: 3,
      column: 1,
    },
    {
      row: 3,
      column: 2,
    },
    {
      row: 3,
      column: 3,
    },
  ]);
  const [direction, setDirection] = useState<string>("down");

  const checkEndOfGame = () => {
    let isNewRunningGame = false;
    let endGame = null;
    const newEmptyBoxes = [];
    loop1: for (let j = 0; j < 4; j++) {
      const row = grid[j];
      loop2: for (let i = 0; i < 4; i++) {
        const box = row[i];
        // Check if success
        if (box == 2048) {
          endGame = "Succeed";
          break loop1;
        }

        // Check if there is an empty box
        if (box == null) {
          isNewRunningGame = true;
          newEmptyBoxes.push({
            row: j,
            column: i,
          });
        }
      }
    }

    if (newEmptyBoxes.length === 0) {
      endGame = "Fail";
    }

    setEndGame(endGame);
    setIsRunningGame(isNewRunningGame);
    setEmptyBoxes(newEmptyBoxes);
    console.log("empty boxes", emptyBoxes);
  };

  const addNewBox = () => {
    const newGrid = [...grid];
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    const selectedEmptyBox = emptyBoxes[randomIndex];
    const randomNewValue = Math.floor(Math.random() * 100) % 2 === 0 ? 2 : 4;

    // console.log("RRRRR", emptyBoxes);

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

  const moveBoxes = () => {
    const newGrid = [...grid];
    switch (direction) {
      case "down":
        for (let i = 2; i >= 0; i--) {
          // check rows down to up (not the 4th row = not interest)
          for (let box of newGrid[i]) {
            // if there are non null values:
            if (box !== null) {
              let bellowBox: number | null =
                newGrid[i + 1][newGrid.indexOf(box)];
              if (!bellowBox) {
                // they are switched to the row bellow only if the value bellow is empty
                bellowBox = box;
                box = null;
              } else if (bellowBox === box) {
                // if the value bellow is the same, we add the two values in the case bellow
                bellowBox = box * 2;
                box = null;
              }
            }
          }
        }
        break;
      case "up":
        break;
      case "right":
        break;
      case "left":
        break;
      default:
        console.log("Sorry, your direction hasn't be stored !");
    }
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
      moveBoxes();

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
