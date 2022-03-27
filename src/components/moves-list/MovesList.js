/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This component tracks the history of past game states. If you
 * click a button, this component lifts the state back up to the App component
 * where it will redraw the board using the past state.
 */

import React from "react";
import css from "./MovesList.module.css";

const MovesList = ({ winner, gameStateHistory, onChangeGameState }) => {
  const clickHandler = (event) => {
    let id = event.target.id;

    onChangeGameState(Number.parseInt(id) + 1);
  };

  return (
    <div className={css["moves-list"]}>
      <div className={css["game-state-history"]}>
        {gameStateHistory.map((state, i) => (
          <button key={i} onClick={clickHandler} id={i}>
            {i === 0 ? "Go to game start" : `Go to move ${i}`}
          </button>
        ))}
      </div>
      {winner ? `The winner is: ${winner}` : ""}
    </div>
  );
};

export default MovesList;
