/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This component allows you to change the board size. It lifts
 * the state back to the App component where it resets the board.
 */

import React from "react";
import css from "./BoardSizeOption.module.css";

const BoardSizeOption = ({ onBoardSizeChange }) => {
  const changeHandler = (event) => {
    onBoardSizeChange(Number.parseInt(event.target.value));
  };

  return (
    <div className={css["board-size-option"]}>
      <select onChange={changeHandler}>
        <option value="0">Select board size:</option>
        <option value="2">2x2</option>
        <option value="3">3x3</option>
        <option value="4">4x4</option>
        <option value="5">5x5</option>
        <option value="6">6x6</option>
        <option value="7">7x7</option>
        <option value="8">8x8</option>
        <option value="9">9x9</option>
        <option value="10">10x10</option>
        <option value="11">11x11</option>
        <option value="12">12x12</option>
      </select>
    </div>
  );
};

export default BoardSizeOption;
