/*
 * Andy Bentzen
 * 3/26/2022
 * CIS 658
 * HW18 - Tic-Tac-Toe
 * Description: Nothing much to report here...
 */

import React from "react";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={css["navbar"]}>
      <ul>
        <li>HW18: Tic-Tac-Toe</li>
      </ul>
    </header>
  );
};
export default Navbar;
