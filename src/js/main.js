"use strict";

const inputSearch = document.querySelector(".js_searcher");
const btnSearch = document.querySelector(".js_btn_search");
const btnReset = document.querySelector(".js_btn_reset");
const animeListUl = document.querySelector(".js_anime_listUl");
const favouritesUl = document.querySelector(".js_favouritesUl");

btnReset.addEventListener("click", (event) => {
  event.preventDefault();
  inputSearch.value = "";
});
btnSearch.addEventListener("click", handleClickBtnSearch);

let allAnimes = [];

function renderOneAnime(oneAnime) {
  const html = `
<li class="js_animeLi" data-gancho="${oneAnime.mal_id}">
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
  const allAnimeLi = document.querySelectorAll(".js_animeLi");

  for (const animeLi of allAnimeLi) {
    animeLi.addEventListener("click", handleClickAnime);
  }
}

function handleClickAnime(ev) {
  const clickedLi = ev.currentTarget;
  clickedLi.classList.toggle("favourite");
  const id_gancho = clickedLi.dataset.gancho;
  const clickedAnimeObject = allAnimes.find(
    (oneAnime) => oneAnime.mal_id === parseInt(id_gancho)
  );
  const htmloneAnime = renderOneAnime(clickedAnimeObject);
  favouritesUl.innerHTML += htmloneAnime;
}

fetch("https://api.jikan.moe/v4/anime")
  .then((res) => res.json())
  .then((data) => {
    allAnimes = data.data;
    renderallAnimes();
  });

function handleClickBtnSearch(ev) {
  ev.preventDefault();

  const name = inputSearch.value;

  fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then((res) => res.json())
    .then((data) => {
      allAnimes = data.data;
      renderallAnimes();
    });
}
