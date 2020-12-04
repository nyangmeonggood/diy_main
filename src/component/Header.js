import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import cn from "classnames";
import "../scss/Header.scss";
import { settingState } from "../App.js";
import Ball from "../artifact/Ball";
import Triangle from "../artifact/Triangle";
import Square from "../artifact/Square";

export default function Header({ cateList, height }) {
  const state = useContext(settingState);

  const header = {
    height: `${height}px`,
  };
  return (
    <header style={header} className={cn({ fixed: state.isFixed })}>
      <BrowserRouter>
        <h1>
          <Link to="/">
            <Ball size={20} color={"#FC3"} />
            <Triangle size={10} color={"#AC3"} rotate={60} />
            <Square rowSize={4} columnSize={10} color={"#E43"} rotate={40} />
          </Link>
        </h1>

        <ul>
          {cateList.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        {state.isSearch && (
          <div>
            <input type="text" />
            <button>찾기</button>
          </div>
        )}
      </BrowserRouter>
    </header>
  );
}
