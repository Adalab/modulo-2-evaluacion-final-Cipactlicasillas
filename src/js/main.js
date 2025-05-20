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

const allAnimes = [
  {
    title: "Cowboy Bebop",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
      },
    },
  },
  {
    title: "Cowboy Bebop: Tengoku no Tobira",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
      },
    },
  },
  {
    title: "Bouken Ou Beet",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/7/21569.jpg",
      },
    },
  },
  {
    title: "Eyeshield 21",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1079/133529.jpg",
      },
    },
  },
  {
    title: "Hachimitsu to Clover",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1301/133577.jpg",
      },
    },
  },
  {
    title: "Hungry Heart: Wild Striker",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/12/49655.jpg",
      },
    },
  },
];
function renderOneAnime(oneAnime) {
  const html = `
<li class="js_anime_Item">
  <h2 class="js_title">${oneAnime.title}</h2>
  <img class="js_image" src="${oneAnime.images.jpg.image_url}" alt="imagen de anime" />
</li>`;
  animeListUl.innerHTML += html;
  return;
  html;
}

for (const oneAnime of allAnimes) {
  renderOneAnime(oneAnime);
}
