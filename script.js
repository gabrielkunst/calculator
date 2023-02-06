"use strict";

/* variables */
const inserts = document.querySelectorAll(".insert");
let text = document.querySelector(".display-number");
const btnClean = document.querySelector(".btn--clean--back");
const btnCleanAll = document.querySelector(".btn--clean--all");
const btnResult = document.querySelector(".btn--result");

/* functions */

const insert = function (number) {
  text.innerHTML += number;
};

const cleanBack = function () {
  let textSlice = text.innerHTML;
  text.innerHTML = textSlice.substring(0, textSlice.length - 1);
};

const showResult = function () {
  let textValue = document.querySelector(".display-number").innerHTML;
  let result = eval(textValue);
  text.innerHTML = result;
};

const cleanAll = function () {
  text.innerHTML = "";
};

/* loops */
for (let i = 0; i < inserts.length; i++) {
  inserts[i].addEventListener("click", () => insert(inserts[i].textContent));
}
btnClean.addEventListener("click", cleanBack);
btnCleanAll.addEventListener("click", cleanAll);
btnResult.addEventListener("click", showResult);
