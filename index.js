import{a as u,i as q,S as $,N as C,P}from"./assets/vendor-Be5Bpuep.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const B="https://furniture-store-v2.b.goit.study/api";async function R(){return(await u.get(`${B}/categories`)).data}function A(e){const t=document.querySelector(".list-categories");if(!t)return;const i=e.map(({_id:a,name:s})=>`
        <li class="list-categories-item" data-category-id="${a}">
          <p class="list-categories-name">${s}</p>
        </li>
      `).join("");t.innerHTML=i}function m(e){function t(i){const{images:a,name:s,price:n,color:c}=i;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${a[0]}" alt="${s}" width="500px" />
          <h2 class="furniture-catalog-title">${s}</h2>
          <ul class='color-list'>
            ${c.map(M=>`<li class='color-items' style="background-color: ${M};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${n} грн</p>
          <button class="furniture-catalog-btn" type="button">детальніше</button>
        </li>
        `}return e.map(t).join("")}const h="https://furniture-store-v2.b.goit.study/api/furnitures",p=8;async function v(e=1){return(await u.get(h,{params:{page:e,limit:p}})).data}async function y(e,t=1){return(await u.get(h,{params:{category:e,page:t,limit:p}})).data}const w=document.querySelector(".furniture-catalog-list"),o=document.querySelector(".btn-load-more");let r=1,l=null,d=0;const O=8;async function L(e=null){r=1,l=e;let t;l?t=await y(l,r):t=await v(r),w.innerHTML=m(t.furnitures),d=Math.ceil(t.totalItems/O),b()}o.addEventListener("click",async()=>{r+=1;let e;l?e=await y(l,r):e=await v(r),w.insertAdjacentHTML("beforeend",m(e.furnitures)),b()});function b(){d<=1?o.style.display="none":r>=d?(o.disabled=!0,o.style.display="none"):(o.disabled=!1,o.style.display="block")}async function f(){await L(null)}async function T(e){await L(e)}const k=document.querySelector(".loader"),x=document.querySelector(".loader-overlay");function S(){x.classList.remove("hidden"),k.classList.add("show")}function E(){k.classList.remove("show"),x.classList.add("hidden")}function g(e){q.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}const I=u.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),F=async()=>(await I.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks;function j(e){const t=Math.round(e*2)/2,i=Math.floor(t),a=t%1!=0?"half":"";return{baseRate:i,halfRate:a}}function N(e){const{baseRate:t,halfRate:i}=j(e.rate);return`<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${t} ${i}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    xlink:href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use             
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    xlink:href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    xlink:href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="tetx-feedback">${e.descr}</p>
          <p class="name-author">${e.name}</p>
        </li>`}function D(e){return e.map(N).join("")}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await R(),i=[{_id:"all",name:"Всі товари"},...t];A(i),await f();const a=document.querySelector(".list-categories-item");a&&a.classList.add("active-item-category")}catch{g()}e&&e.addEventListener("click",async t=>{const i=t.target.closest(".list-categories-item");if(!i)return;e.querySelectorAll(".list-categories-item").forEach(s=>s.classList.remove("active-item-category")),i.classList.add("active-item-category");const a=i.dataset.categoryId;try{S(),a==="all"?await f():await T(a)}catch{g()}finally{E()}})});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open"),document.body.classList.add("menu-open")}document.addEventListener("keydown",i);function i(s){s.key==="Escape"&&a()}document.addEventListener("click",s=>{e.modal.classList.contains("is-open")&&!s.target.closest(".mobile-menu-container")&&!s.target.closest("[data-menu-open]")&&a()});function a(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}})();const H={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{S();try{const e=await F(),t=D(e);H.listElems.innerHTML=t;const i=new $(".swiper",{modules:[C,P],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{g(message)}finally{E()}});
//# sourceMappingURL=index.js.map
