import React, { useContext } from "react";
import Ball from "../artifact/Ball";
import Square from "../artifact/Square";
import Triangle from "../artifact/Triangle";
import "../scss/Main.scss";
import BG from "./BG";
import Slide from "./Slide";
import Title from "./Title";

export default function Main() {
  return (
    <section className="main">
      <BG />
      <Title />
      <Slide />
    </section>
  );
}
