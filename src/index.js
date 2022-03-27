/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: This is the main function that renders the app to the DOM.
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
