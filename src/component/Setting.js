import React, { useContext, useEffect, useRef } from "react";
import { settingState } from "../App.js";
import { settingDispatch } from "../App.js";
import "../scss/setting.scss";

export default function Setting() {
  const state = useContext(settingState);
  const dispatch = useContext(settingDispatch);
  const settingBtn = useRef();
  let isOpened = false;

  useEffect(() => {
    settingBtn.current.addEventListener("click", () => {
      if (!isOpened) {
        document.getElementById("root").classList.add("setting");
        document.getElementById("setting").classList.add("active");
        isOpened = true;
      } else {
        document.getElementById("root").classList.remove("setting");
        document.getElementById("setting").classList.remove("active");

        isOpened = false;
      }
    });
  });
  return (
    <>
      <button ref={settingBtn}>+++</button>
      <div className="settingBox">
        <ul>
          <li>
            <h3>Header</h3>
            <button onClick={searchType}>버튼</button>
          </li>
          <li>
            <h3>Slider</h3>
            <button onClick={isSlideList}>버튼2</button>
            <button onClick={slideType}>버튼</button>
          </li>
          <li>
            <h3>BG</h3>
            <button onClick={isPicBg}>버튼1</button>
            <button onClick={(e) => bgColor("#FFF")}>버튼</button>
            <button onClick={(e) => bgColor("#000")}>버튼</button>
            <button onClick={(e) => bgColor("#FC3")}>버튼</button>
            <button onClick={(e) => bgColor("#AC4")}>버튼</button>
          </li>
          <li>
            <h3>Title</h3>
            <button onClick={(e) => mainTextAlign("left")}>버튼</button>
            <button onClick={(e) => mainTextAlign("center")}>버튼</button>
            <button onClick={(e) => mainTextAlign("right")}>버튼</button>
            <input
              type="range"
              min="10"
              max="95"
              value={state.titleTop}
              step="1"
              onChange={(e) => mainTextTop(e.target.value)}
            />
            <input
              type="range"
              min="10"
              max="95"
              value={state.titleMainSize}
              step="1"
              onChange={(e) => titleMainSize(e.target.value)}
            />
            <input
              type="range"
              min="10"
              max="95"
              value={state.titleSubSize}
              step="1"
              onChange={(e) => titleSubSize(e.target.value)}
            />
            <input
              type="range"
              min="10"
              max="95"
              value={state.titleBtnSize}
              step="1"
              onChange={(e) => titleBtnSize(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </>
  );

  function slideType() {
    dispatch({ type: "isSlide", isSlide: !state.isSlide });
  }
  function searchType() {
    dispatch({ type: "isSearch", isSearch: !state.isSearch });
  }
  function isSlideList() {
    dispatch({ type: "isSlideList", isSlideList: !state.isSlideList });
  }
  function bgColor(color) {
    dispatch({ type: "isPicBg", isPicBg: false });
    dispatch({ type: "bgColor", bgColor: color });
  }
  function isPicBg() {
    dispatch({ type: "isPicBg", isPicBg: true });
  }
  function mainTextAlign(align) {
    dispatch({ type: "titleAlign", titleAlign: align });
  }
  function mainTextTop(top) {
    dispatch({ type: "titleTop", titleTop: top });
  }
  function titleMainSize(size) {
    dispatch({ type: "titleMainSize", titleMainSize: size });
  }
  function titleSubSize(size) {
    dispatch({ type: "titleSubSize", titleSubSize: size });
  }
  function titleBtnSize(size) {
    dispatch({ type: "titleBtnSize", titleBtnSize: size });
  }
}
