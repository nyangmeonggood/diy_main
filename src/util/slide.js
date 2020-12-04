export function plusNumber(slideCurrent, SLIDELIST, slideRef, isSlide) {
  if (slideCurrent > SLIDELIST.length - 2) {
    slideCurrent = 0;
  } else {
    slideCurrent += 1;
  }
  moveSlide(slideCurrent, slideRef, SLIDELIST, isSlide);
}
export function minusNumber(slideCurrent, SLIDELIST, slideRef, isSlide) {
  if (slideCurrent < 1) {
    slideCurrent = SLIDELIST.length - 1;
  } else {
    slideCurrent -= 1;
  }
  moveSlide(slideCurrent, slideRef, SLIDELIST, isSlide);
}

export const moveSlide = (slideCurrent, slideRef, SLIDELIST, isSlide) => {
  for (var i = 0; i < SLIDELIST.length; i++) {
    slideRef.current.childNodes[i].classList.remove("active");
  }

  slideRef.current.childNodes[slideCurrent].classList.add("active");

  if (slideRef.current && isSlide) {
    slideRef.current.style.transform = `translateX(${
      (-100 * slideCurrent) / SLIDELIST.length
    }%)`;
  }
};
