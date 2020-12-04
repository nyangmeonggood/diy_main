import React, { useContext, useEffect, useRef } from "react";
import cn from "classnames";
import "../scss/Slide.scss";
import { settingState } from "../App.js";

export default function Slide() {
  let slideCurrent = 0;
  const slideRef = useRef(null);
  const state = useContext(settingState);

  useEffect(() => {
    slideRef.current && slideRef.current.childNodes[0].classList.add("active");

    if (slideRef.current && state.isSlide) {
      slideRef.current.style.width = `${SLIDELIST.length * 100}%`;

      for (var i = 0; i < SLIDELIST.length; i++) {
        slideRef.current.childNodes[i].style.width = `${
          100 / SLIDELIST.length
        }%`;
      }
    }
  }, []);

  function plusNumber() {
    if (slideCurrent > SLIDELIST.length - 2) {
      slideCurrent = 0;
    } else {
      slideCurrent += 1;
    }
    moveSlide();
  }
  function minusNumber() {
    if (slideCurrent < 1) {
      slideCurrent = SLIDELIST.length - 1;
    } else {
      slideCurrent -= 1;
    }
    moveSlide();
  }

  const moveSlide = () => {
    for (var i = 0; i < SLIDELIST.length; i++) {
      slideRef.current.childNodes[i].classList.remove("active");
    }

    slideRef.current.childNodes[slideCurrent].classList.add("active");

    if (slideRef.current && state.isSlide) {
      slideRef.current.style.transform = `translateX(${
        (-100 * slideCurrent) / SLIDELIST.length
      }%)`;
    }
  };

  return (
    <section className={cn(`slideSection`, { isSlideList: state.isSlideList })}>
      <button className="minus" onClick={slideRef.current && minusNumber}>
        감소
      </button>
      <div className="slideBox">
        <ul
          className={cn(`slideContainer`, {
            slide: state.isSlide,
            fade: !state.isSlide,
          })}
          ref={slideRef}
        >
          {SLIDELIST.map((item) => {
            return (
              <li key={item.title}>
                {state.isPic && (
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + item.src}
                      alt={item.title}
                    />
                  </div>
                )}
                {state.isText && (
                  <div className="txtbox">
                    <h3>{item.title}</h3>
                    <h5>{item.sub}</h5>
                    <p>{item.desc}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="plus" onClick={slideRef.current && plusNumber}>
        증가
      </button>
    </section>
  );
}

const SLIDELIST = [
  {
    title: "SLIDE Title1",
    sub: "Subtitle",
    desc: "Here is space for description. anything can space here!",
    src: "../img/1.png",
  },
  {
    title: "SLIDE Title2",
    sub: "Subtitle",
    desc: "Here is space for description. anything can space here!",
    src: "../img/2.png",
  },
  {
    title: "SLIDE Title3",
    sub: "Subtitle",
    desc: "Here is space for description. anything can space here!",
    src: "../img/3.png",
  },
  {
    title: "SLIDE Title4",
    sub: "Subtitle",
    desc: "Here is space for description. anything can space here!",
    src: "../img/4.png",
  },
  {
    title: "SLIDE Title5",
    sub: "Subtitle",
    desc: "Here is space for description. anything can space here!",
    src: "../img/5.png",
  },
];
