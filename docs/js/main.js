const s=document.querySelector(".js_searcher"),i=document.querySelector(".js_btn_search"),l=document.querySelector(".js_btn_reset");l.addEventListener("click",e=>{e.preventDefault(),s.value=""});i.addEventListener("click",o);const r=document.querySelector(".js_anime_listUl");let a=[];function m(e){return`
<li class="js_anime_Item">
  <h2 class="js_title">${e.title}</h2>
  <img class="js_image" src="${e.images.jpg.image_url}" alt="imagen de anime" />
</li>`}function c(){let e="";for(const t of a)e+=m(t);r.innerHTML=e}fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{a=e.data,c()});function o(e){e.preventDefault();const t=s.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(n=>n.json()).then(n=>{a=n.data,c()})}
//# sourceMappingURL=main.js.map
