import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import "../scss/Slide.scss";
export default function Slide({ isText, isPic, isSlide }) {
  const [current, changeCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current && slideRef.current.childNodes[0].classList.add("active");

    if (slideRef.current && isSlide) {
      slideRef.current.style.width = `${SLIDELIST.length * 100}%`;

      for (var i = 0; i < SLIDELIST.length; i++) {
        slideRef.current.childNodes[i].style.width = `${
          100 / SLIDELIST.length
        }%`;
      }
    }
  }, []);

  const plusNumber = () => {
    if (current > SLIDELIST.length - 2) {
      changeCurrent(0);
    } else {
      changeCurrent(current + 1);
    }

    for (var i = 0; i < SLIDELIST.length; i++) {
      slideRef.current.childNodes[i].classList.remove("active");
    }

    slideRef.current.childNodes[current].classList.add("active");

    if (slideRef.current && isSlide) {
      slideRef.current.style.transform = `translateX(${
        (-100 * current) / SLIDELIST.length
      }%)`;
    }
  };
  const minusNumber = () => {
    if (current < 1) {
      changeCurrent(SLIDELIST.length - 1);
    } else {
      changeCurrent(current - 1);
    }

    for (var i = 0; i < SLIDELIST.length; i++) {
      slideRef.current.childNodes[i].classList.remove("active");
    }

    slideRef.current.childNodes[current].classList.add("active");

    if (slideRef.current && isSlide) {
      slideRef.current.style.transform = `translateX(${
        (-100 * current) / SLIDELIST.length
      }%)`;
    }
  };

  return (
    <section className="slideSection">
      <button className="minus" onClick={slideRef.current && minusNumber}>
        감소
      </button>
      <div className="slideBox">
        <ul
          className={cn(`slideContainer`, { slide: isSlide, fade: !isSlide })}
          ref={slideRef}
        >
          {SLIDELIST.map((item) => {
            return (
              <li key={item.title}>
                {isPic && (
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + item.src}
                      alt={item.title}
                    />
                  </div>
                )}
                {isText && (
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
