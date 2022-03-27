/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This component counts how many rows you need in the 
 * board and then delegates the row building to the Row component. 
 */

import React from "react";
import css from "./Board.module.css";
import Row from "./Row";

const Board = ({ boardSize, onBoardClick, gameState }) => {
  const clickHandler = (clickData) => {
    onBoardClick(clickData);
  };

  return (
    <div className={css["board"]}>
      {Array(boardSize)
        .fill()
        .map((row, i) => (
          <Row
            key={i}
            rowNumber={i}
            numSquares={boardSize}
            onClickRow={clickHandler}
            gameState={gameState}
          />
        ))}
    </div>
  );
};

export default Board;
