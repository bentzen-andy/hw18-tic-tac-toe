/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This component counts how many grid squares you need in the
 * board and then delegates the grid building to the Square component.
 */

import React from "react";
import css from "./Row.module.css";
import Square from "./Square";

const Row = ({ rowNumber, numSquares, onClickRow, gameState }) => {
  const clickHandler = (clickData) => {
    clickData.rowNumber = rowNumber;
    onClickRow(clickData);
  };

  return (
    <div className={css["row"]}>
      {Array(numSquares)
        .fill()
        .map((item, i) => (
          <Square
            key={i}
            rowNumber={rowNumber}
            colNumber={i}
            onClickSquare={clickHandler}
            gameState={gameState}
          />
        ))}
    </div>
  );
};

export default Row;
