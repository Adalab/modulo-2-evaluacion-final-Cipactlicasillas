"use strict";

const searcherElement = document.querySelector(".js_Searcher");
const btnSearch = document.querySelector(".js_BtnSearch");
const btnReset = document.querySelector(".js_BtnReset");

searcherElement.addEventListener("click", (event) => {
  event.preventDefault();
});
btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
});
btnReset.addEventListener("click", (event) => {
  event.preventDefault();
  input.value = "";
});
