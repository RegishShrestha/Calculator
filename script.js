"use strict";

const change_color = document.querySelector(".change_color");
const show_calculator = document.querySelector(".show_calculator");
const container = document.querySelector(".container");
const btnInput = document.querySelectorAll(".btnCalculator");
const calculation = document.querySelector(".calculation");
const footer = document.querySelector(".footer");
const gift=document.querySelector(".gift_image")

change_color.addEventListener("click", function () {
  if (change_color.textContent === "Night") {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#222";
    body.style.color = "#eee";
    change_color.style.borderColor = "#eee";
    change_color.textContent = "White";
    show_calculator.style.borderColor = "#eee";
    change_color.style.backgroundColor = "#eee";
    change_color.style.color = "#222";
    footer.style.color = "#222";
    footer.style.backgroundColor = "#eee";
  } else {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#eee";
    body.style.color = "#222";
    change_color.style.borderColor = "#222";
    change_color.textContent = "Night";
    show_calculator.style.borderColor = "#222";
    change_color.style.backgroundColor = "#222";
    change_color.style.color = "#eee";
    footer.style.color = "#eee";
    footer.style.backgroundColor = "#222";
  }
});

show_calculator.addEventListener("click", function () {
  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");
    container.classList.add("show");
  } else {
    container.classList.remove("show");
    container.classList.add("hidden");
  }
});
let arr = "";
btnInput.forEach((btn) => {
  
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    gift.src="https://media0.giphy.com/media/tHufwMDTUi20E/giphy.gif?cid=ecf05e47de58244b32e02b05c810b18e809e75e1892a2c85&rid=giphy.gif&ct=g"
    if (calculation.textContent === "Enter") {
      calculation.textContent = "";
      calculation.textContent = "";
    }
    if (btn.textContent === "AC") {
      calculation.textContent = "";
      arr = "";
    } else {
      if (btn.textContent === "=") {
        calculation.textContent = "";
        calculation.textContent = eval(arr);
        gift.src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
        arr = "";
      } else if (btn.textContent === "÷") {
        calculation.textContent += btn.textContent;
        arr += "/";
      } else if (btn.textContent === "×") {
        calculation.textContent += btn.textContent;
        arr += "*";
      } else {
        calculation.textContent += btn.textContent;
        arr += btn.textContent;
      }
    }
    console.log(arr);

    console.log(arr);
  });
});
