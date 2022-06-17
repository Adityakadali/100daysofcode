const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

const circle = document.querySelector(".circle");

const getBG = (e) => {
  return window.getComputedStyle(e).backgroundColor;
};

const colorChange = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    circle.style.background = color;
  });
};

colorChange(red, getBG(red));
colorChange(blue, getBG(blue));
colorChange(green, getBG(green));
colorChange(yellow, getBG(yellow));
