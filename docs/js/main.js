const i=document.querySelector(".js_searcher"),m=document.querySelector(".js_btn_search"),d=document.querySelector(".js_btn_reset"),u=document.querySelector(".js_anime_listUl"),h=document.querySelector(".js_favouritesUl");d.addEventListener("click",e=>{e.preventDefault(),i.value=""});m.addEventListener("click",_);let c=[];function a(e){return`
<li class="js_animeLi" data-gancho="${e.mal_id}">
  <h2 class="js_title">${e.title}</h2>
  <img class="js_image" src="${e.images.jpg.image_url}" alt="imagen de anime" />
</li>`}function s(){let e="";for(const t of c)e+=a(t);u.innerHTML=e;const n=document.querySelectorAll(".js_animeLi");for(const t of n)t.addEventListener("click",f)}function f(e){const n=e.currentTarget;n.classList.toggle("favourite");const t=n.dataset.gancho,l=c.find(r=>r.mal_id===parseInt(t)),o=a(l);h.innerHTML+=o}fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{c=e.data,s()});function _(e){e.preventDefault();const n=i.value;fetch(`https://api.jikan.moe/v4/anime?q=${n}`).then(t=>t.json()).then(t=>{c=t.data,s()})}
//# sourceMappingURL=main.js.map
