import{a as u,i as $,S as C,N as A,P,A as B}from"./assets/vendor-d0R7Mxtu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const R="https://furniture-store-v2.b.goit.study/api";async function T(){return(await u.get(`${R}/categories`)).data}function O(e){const t=document.querySelector(".list-categories");if(!t)return;const a=e.map(({_id:o,name:s})=>`
        <li class="list-categories-item" data-category-id="${o}">
          <p class="list-categories-name">${s}</p>
        </li>
      `).join("");t.innerHTML=a}function y(e){function t(a){const{images:o,name:s,price:n,color:c}=a;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${o[0]}" alt="${s}" width="500px" />
          <h2 class="furniture-catalog-title">${s}</h2>
          <ul class='color-list'>
            ${c.map(k=>`<li class='color-items' style="background-color: ${k};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${n} грн</p>
          <button class="furniture-catalog-btn" type="button">детальніше</button>
        </li>
        `}return e.map(t).join("")}const h="https://furniture-store-v2.b.goit.study/api/furnitures",v=8;async function w(e=1){return(await u.get(h,{params:{page:e,limit:v}})).data}async function L(e,t=1){return(await u.get(h,{params:{category:e,page:t,limit:v}})).data}const b=document.querySelector(".loader"),S=document.querySelector(".loader-overlay");function f(){S.classList.remove("hidden"),b.classList.add("show")}function m(){b.classList.remove("show"),S.classList.add("hidden")}function d(e){$.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}const M=document.querySelector(".furniture-catalog-list"),r=document.querySelector(".btn-load-more");let i=1,l=null,g=0;const I=8;async function q(e=null){i=1,l=e;let t;l?t=await L(l,i):t=await w(i),M.innerHTML=y(t.furnitures),g=Math.ceil(t.totalItems/I),E()}r.addEventListener("click",async()=>{i+=1,f();let e;l?e=await L(l,i):e=await w(i),M.insertAdjacentHTML("beforeend",y(e.furnitures)),m(),E()});function E(){g<=1?r.style.display="none":i>=g?(r.disabled=!0,r.style.display="none"):(r.disabled=!1,r.style.display="block")}async function p(){await q(null)}async function j(e){await q(e)}const F=u.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),H=async()=>(await F.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks;function x(e){const t=Math.round(e*2)/2,a=Math.floor(t),o=t%1!==0?"half":"";return{baseRate:a,halfRate:o}}function N(){return Array.from({length:5}).map(()=>`
      <div class="star">
        <svg class="star-empty" width="20" height="20">
          <use href="/img/icons.svg#icon-star"></use>
        </svg>
        <svg class="star-half" width="20" height="20">
          <use href="/img/icons.svg#icon-star-half"></use>
        </svg>
        <svg class="star-filled" width="20" height="20">
          <use href="/img/icons.svg#icon-star-filled"></use>
        </svg>
      </div>
    `).join("")}function D(e){const{baseRate:t,halfRate:a}=x(e.rate);return`
    <li class="swiper-slide feedback">
      <div class="rating rating-fb star-svg value-${t} ${a}">
        <div class="star-container">
          ${N()}
        </div>
      </div>
      <p class="text-feedback">${e.descr}</p>
      <p class="name-author">${e.name}</p>
    </li>
  `}function U(e){return e.map(D).join("")}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await T(),a=[{_id:"all",name:"Всі товари"},...t];O(a),await p();const o=document.querySelector(".list-categories-item");o&&o.classList.add("active-item-category")}catch{d()}e&&e.addEventListener("click",async t=>{const a=t.target.closest(".list-categories-item");if(!a)return;e.querySelectorAll(".list-categories-item").forEach(s=>s.classList.remove("active-item-category")),a.classList.add("active-item-category");const o=a.dataset.categoryId;try{f(),o==="all"?await p():await j(o)}catch{d()}finally{m()}})});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open"),document.body.classList.add("menu-open")}document.addEventListener("keydown",a);function a(s){s.key==="Escape"&&o()}document.addEventListener("click",s=>{e.modal.classList.contains("is-open")&&!s.target.closest(".mobile-menu-container")&&!s.target.closest("[data-menu-open]")&&o()});function o(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}})();const V={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{f();try{const e=await H(),t=U(e);V.listElems.innerHTML=t;const a=new C(".swiper",{modules:[A,P],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{d(message)}finally{m()}});new B(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`}});
//# sourceMappingURL=index.js.map
