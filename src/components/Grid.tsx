import { ReactNode, useCallback, useState } from "react";

export const Grid = () => {
  const [grid, setGrid] = useState<(number | null)[][]>([
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

  // const checkEndOfGame = () => {
  //   let isNewRunningGame = false;
  //   let endGame = null;
  //   const newEmptyBoxes = [];
  //   loop1: for (let j = 0; j < 4; j++) {
  //     const row = grid[j];
  //     loop2: for (let i = 0; i < 4; i++) {
  //       const box = row[i];
  //       // Check if success
  //       if (box == 2048) {
  //         endGame = "Succeed";
  //         break loop1;
  //       }

  //       // Check if there is an empty box
  //       if (box == null) {
  //         isNewRunningGame = true;
  //         newEmptyBoxes.push({
  //           row: j,
  //           column: i,
  //         });
  //       }
  //     }
  //   }

  //   if (newEmptyBoxes.length === 0) {
  //     endGame = "Fail";
  //   }

  //   setEndGame(endGame);
  //   setIsRunningGame(isNewRunningGame);
  //   setEmptyBoxes(newEmptyBoxes);
  //   console.log("empty boxes", emptyBoxes);
  // };

  // const addNewBox = () => {
  //   const newGrid = [...grid];
  //   const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  //   const selectedEmptyBox = emptyBoxes[randomIndex];
  //   const randomNewValue = Math.floor(Math.random() * 100) % 2 === 0 ? 2 : 4;


  //   newGrid[selectedEmptyBox.row][selectedEmptyBox.column] = randomNewValue;
  //   setGrid(newGrid);
  // };

  // const moveBoxes = useCallback(() => {
  //   const newGrid = [...grid];
  //   switch (direction) {
  //     case "down":
  //       for (let i = 2; i >= 0; i--) {
  //         // check rows down to up (not the 4th row = not interest)
  //         for (let box of newGrid[i]) {
  //           // if there are non null values:
  //           if (box !== null) {
  //             let bellowBox: number | null =
  //               newGrid[i + 1][newGrid.indexOf(box)];
  //             if (!bellowBox) {
  //               // they are switched to the row bellow only if the value bellow is empty
  //               bellowBox = box;
  //               box = null;
  //             } else if (bellowBox === box) {
  //               // if the value bellow is the same, we add the two values in the case bellow
  //               bellowBox = box * 2;
  //               box = null;
  //             }
  //           }
  //         }
  //       }
  //       break;
  //     case "up":
  //       break;
  //     case "right":
  //       break;
  //     case "left":
  //       break;
  //     default:
  //       console.log("Sorry, your direction hasn't be stored !");
  //   }
  // }, [direction]);

const combineAdjacentSameValue = (array : number[]) => {
  for(let i = 0; i< array.length -1; i++){
      if(array[i] === array[i + 1]){
        const sum = array[i] * 2;
        array[i] = sum;
        array[i + 1] = null;
        // i++;
      }
  }
  return array.filter((box) => box !== null);
}


  const playGame = () => {

    document.addEventListener("keydown", function (event) {
      let keyDirection = event.key;

      switch (keyDirection) {
        case "ArrowUp":

        const newGrid: (number | null)[][] = [[], [], [], []];

        for(let i = 0; i<3; i++){
          const column = [grid[0][i], grid[1][i], grid[2][i], grid[3][i]];
          const columnWithoutNull = column.filter((box) => box !== null);
          const addedValueLine = combineAdjacentSameValue(columnWithoutNull);

          const finalLine : (number | null)[] = [...addedValueLine];

          while (finalLine.length < 4){
            if(keyDirection === "ArrowUp") {
              finalLine.push(null);
            } else if (keyDirection === "ArrowDown") {
              finalLine.unshift(null);
            }
          }

          for (let x = 0; x<3; x++){
            newGrid[x][i] = finalLine[0];
          }
        }

        setGrid(newGrid);

          break;
        case "ArrowDown":
          break;
        case "ArrowLeft":
          break;
        case "ArrowRight":
          break;
      }

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
