import React, { useContext, useEffect, useRef } from "react";
import { settingState } from "../App.js";
import { settingDispatch } from "../App.js";
import "../scss/Title.scss";

export default function Title() {
  const state = useContext(settingState);
  const dispatch = useContext(settingDispatch);
  const mainTitle = useRef();

  useEffect(() => {
    mainTitle.current.className = "mainTitle";
    mainTitle.current.classList.add(`${state.titleAlign}`);
  });

  return (
    <div
      className="mainTitle"
      ref={mainTitle}
      style={{ top: `${state.titleTop}%` }}
    >
      <h2 style={{ fontSize: `${state.titleMainSize}px` }}>Main Title</h2>
      <h5 style={{ fontSize: `${state.titleSubSize}px` }}>Sub title</h5>
      <button style={{ fontSize: `${state.titleBtnSize}px` }}>
        Here is meaningless text zone.
      </button>
    </div>
  );
}
