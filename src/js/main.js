"use strict";

const inputSearch = document.querySelector(".js_searcher");
const btnSearch = document.querySelector(".js_btn_search");
const btnReset = document.querySelector(".js_btn_reset");

inputSearch.addEventListener("click", (event) => {
  event.preventDefault();
});
btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const valueName = inputSearch.value;
  console.log("pruebasss");
});
btnReset.addEventListener("click", (event) => {
  event.preventDefault();
  const valueSearch = (inputSearch.value = "");
});

const animeListUl = document.querySelector(".js_anime_listUl");

let allAnimes = [];

function renderOneAnime(oneAnime) {
  const html = `
<li class="js_anime_Item">
  <h2 class="js_title">${oneAnime.title}</h2>
  <img class="js_image" src="${oneAnime.images.jpg.image_url}" alt="imagen de anime" />
</li>`;
  return html;
}

function renderallAnimes() {
  let html = "";
  for (const oneAnime of allAnimes) {
    html += renderOneAnime(oneAnime);
  }

  animeListUl.innerHTML = html;
}
//renderallAnimes();
fetch("https://api.jikan.moe/v4/anime ")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    allAnimes = data.data;
    renderallAnimes();
  });
