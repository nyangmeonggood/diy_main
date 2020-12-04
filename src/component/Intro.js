import React, { useContext, useEffect, useRef } from "react";
import "../scss/Intro.scss";
import { settingDispatch } from "../App.js";

export default function Intro() {
  const mainRef = useRef();
  const btnRef = useRef();
  const dispatch = useContext(settingDispatch);

  useEffect(() => {
    mainRef.current.classList.add("fadeOut");
    btnRef.current.addEventListener("click", () => {
      mainRef.current.style.display = "none";
    });
  });
  return (
    <section id="intro" ref={mainRef}>
      <p className="greet">
        <b>Made by</b>
        <span>Choi Yeonsu</span>
      </p>
      <div className="title">
        <p>새로운 메시지가 도착했습니다!</p>
        <button
          ref={btnRef}
          onClick={() => dispatch({ type: "isLoaded", isLoaded: true })}
        >
          확인
        </button>
      </div>
    </section>
  );
}
