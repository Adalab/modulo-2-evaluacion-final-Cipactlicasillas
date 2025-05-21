const i=document.querySelector(".js_searcher"),m=document.querySelector(".js_btn_search"),d=document.querySelector(".js_btn_reset"),u=document.querySelector(".js_anime_listUl"),h=document.querySelector(".js_favouritesUl");m.addEventListener("click",g);d.addEventListener("click",e=>{e.preventDefault(),i.value=""});let a=[];function c(e){let t;return e.images&&e.images.jpg&&e.images.jpg.image_url?t=e.images.jpg.image_url:t="https://placehold.co/210x300/ffffff/555555?text=TV",`
<li class="js_animeLi" data-gancho="${e.mal_id}">
  <h2 class="js_title">${e.title}</h2>
  <img class="js_image" src="${t}" alt="imagen de anime" />
</li>`}function s(){let e="";for(const n of a)e+=c(n);u.innerHTML=e;const t=document.querySelectorAll(".js_animeLi");for(const n of t)n.addEventListener("click",f)}function f(e){const t=e.currentTarget;t.classList.toggle("favourite");const n=t.dataset.gancho,l=a.find(o=>o.mal_id===parseInt(n)),r=c(l);h.innerHTML+=r}fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{a=e.data,s()});function g(e){e.preventDefault();const t=i.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(n=>n.json()).then(n=>{a=n.data,s()})}
//# sourceMappingURL=main.js.map
