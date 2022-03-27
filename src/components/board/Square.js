/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This component builds the grid squares and listens for user clicks.
 * If a user clicks on a square, it will raise the state all the way back up to
 * the App component so it can redraw the board with the new "X" or "O".
 */

import React from "react";
import css from "./Square.module.css";

const Square = ({ rowNumber, colNumber, onClickSquare, gameState }) => {
  const clickHandler = () => {
    onClickSquare({ rowNumber: "", colNumber: colNumber });
  };

  let playerToken;
  if (gameState[rowNumber][colNumber] === "X")
    playerToken = (
      <img
        src={require("../../img/x.jpg")}
        alt="X"
        height="100%"
        width="100%"
      />
    );
  if (gameState[rowNumber][colNumber] === "O")
    playerToken = (
      <img
        src={require("../../img/o.jpg")}
        alt="O"
        height="100%"
        width="100%"
      />
    );
  if (gameState[rowNumber][colNumber] === "") playerToken = "";
  return (
    <div className={css["square"]} onClick={clickHandler}>
      {playerToken}
    </div>
  );
};

export default Square;
