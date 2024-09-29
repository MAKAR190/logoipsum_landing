"use strict";

const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");

gsap.from(buttonOne, { opacity: 0, y: -50, duration: 1, ease: "bounce" });
gsap.from(buttonTwo, { opacity: 0, y: -50, duration: 1.2, ease: "bounce" });
gsap.from(buttonThree, { opacity: 0, y: -50, duration: 1.4, ease: "bounce" });
gsap.from(buttonFour, { opacity: 0, y: -50, duration: 1.6, ease: "bounce" });
