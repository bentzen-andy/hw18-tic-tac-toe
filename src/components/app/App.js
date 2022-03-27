/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This is the main file. This component is a wrapper for the header,
 * and the main gameboard. All the state based variables are controlled through
 * this component
 */

import React, { useState } from "react";
import BoardSizeOption from "../board-size-option/BoardSizeOption";
import Board from "../board/Board";
import Navbar from "../header/Navbar";
import MovesList from "../moves-list/MovesList";
import css from "./app.module.css";

const App = () => {
  const DEFAULT_BOARD_SIZE = 3;
  const EMPTY_BOARD = Array(DEFAULT_BOARD_SIZE)
    .fill()
    .map((item) =>
      Array(DEFAULT_BOARD_SIZE)
        .fill()
        .map((item) => "")
    );

  const [winner, setWinner] = useState("");
  const [boardSize, setBoardSize] = useState(DEFAULT_BOARD_SIZE);
  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameState, setGameState] = useState(EMPTY_BOARD);
  const [gameStateHistory, setGameStateHistory] = useState([
    Array(DEFAULT_BOARD_SIZE)
      .fill()
      .map((item) =>
        Array(DEFAULT_BOARD_SIZE)
          .fill()
          .map((item) => "")
      ),
  ]);

  const boardChangeHandler = (size) => {
    setWinner("");
    setPlayerTurn("X");
    setBoardSize(size);
    setGameState(
      Array(size)
        .fill()
        .map((item) =>
          Array(size)
            .fill()
            .map((item) => "")
        )
    );
    setGameStateHistory([
      Array(size)
        .fill()
        .map((item) =>
          Array(size)
            .fill()
            .map((item) => "")
        ),
    ]);
  };

  const gameButtonHandler = (id) => {
    setGameStateHistory((prev) => {
      let prevCopy = structuredClone(prev);
      let i = gameStateHistory.length;
      while (i > id) {
        prevCopy.pop();
        i--;
      }
      return prevCopy;
    });
    setGameState(gameStateHistory[id - 1]);
    // check for win condition
    checkWinCondition(gameState);
  };

  const clickHandler = (clickData) => {
    let row = clickData.rowNumber;
    let col = clickData.colNumber;

    // error checking: is this space already filled?
    if (gameState[row][col] !== "") return;

    // error checking: is the game done?
    if (winner !== "") return;

    setGameState((currGameState) => {
      let newGameState = currGameState;
      newGameState[row][col] = playerTurn;

      // check for win condition
      checkWinCondition(newGameState);

      // check tie game condition
      checkTieCondition(newGameState);

      return newGameState;
    });

    setGameStateHistory((prev) => {
      let prevCopy = prev.map((arr) => arr.slice());
      let gameStateCopy = gameState.map((arr) => arr.slice());

      return [...prevCopy, gameStateCopy];
    });

    setPlayerTurn((currentTurn) => (currentTurn === "X" ? "O" : "X"));
  };

  const checkWinCondition = (gameState) => {
    const allEqual = (arr, playerToken) =>
      arr.every((val) => val === playerToken);
    const getCol = (arr, i) => arr.map((x) => x[i]);

    let winner = "";

    // check rows for winners
    gameState.map((row) => {
      if (allEqual(row, "X")) winner = "X";
      if (allEqual(row, "O")) winner = "O";
      return null;
    });

    // check columns for winners
    for (let i = 0; i < gameState[0].length; i++) {
      let col = getCol(gameState, i);
      if (allEqual(col, "X")) winner = "X";
      if (allEqual(col, "O")) winner = "O";
    }

    // check diagonals for winners
    let diagonal1 = [];
    let diagonal2 = [];
    for (let i = 0; i < gameState.length; i++) {
      diagonal1.push(gameState[i][i]);
      diagonal2.push(gameState[i][gameState.length - (i + 1)]);
    }

    if (allEqual(diagonal1, "X")) winner = "X";
    if (allEqual(diagonal1, "O")) winner = "O";
    if (allEqual(diagonal2, "X")) winner = "X";
    if (allEqual(diagonal2, "O")) winner = "O";

    setWinner(winner);
  };

  const checkTieCondition = (gameState) => {
    if (!gameState.flat().includes("")) {
      setWinner((currWinner) => (currWinner !== "" ? currWinner : "Tie Game!"));
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className={css["app"]}>
        <BoardSizeOption onBoardSizeChange={boardChangeHandler} />
        <Board
          boardSize={boardSize}
          onBoardClick={clickHandler}
          gameState={gameState}
        />
        <MovesList
          winner={winner}
          gameStateHistory={gameStateHistory}
          onChangeGameState={gameButtonHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
