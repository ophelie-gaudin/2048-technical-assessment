import { ReactNode } from "react";

export const Grid = () => {
  const grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  const playGame = () => {};

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
