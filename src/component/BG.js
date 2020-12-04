import React, { useContext } from "react";
import "../scss/bg.scss";
import { settingState } from "../App.js";

export default function BG() {
  const state = useContext(settingState);
  document.body.style.backgroundColor = state.bgColor;

  return (
    <div id="bg">
      {state.isPicBg && (
        <img
          src={process.env.PUBLIC_URL + BGLIST[BGNUMBER].path}
          alt={BGLIST[BGNUMBER].title}
        />
      )}
    </div>
  );
}

const BGLIST = [
  { title: "bg1", path: "../img/1.png" },
  { title: "bg2", path: "../img/2.png" },
  { title: "bg3", path: "../img/3.png" },
  { title: "bg4", path: "../img/4.png" },
  { title: "bg5", path: "../img/5.png" },
];
let BGNUMBER = Math.floor(Math.random() * BGLIST.length);
