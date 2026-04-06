import{a as u,i as B,S as C,N as P,P as A,A as O}from"./assets/vendor-d0R7Mxtu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const R="https://furniture-store-v2.b.goit.study/api";async function T(){return(await u.get(`${R}/categories`)).data}function j(e){const t=document.querySelector(".list-categories");if(!t)return;const a=e.map(({_id:i,name:s})=>`
        <li class="list-categories-item" data-category-id="${i}">
          <p class="list-categories-name">${s}</p>
        </li>
      `).join("");t.innerHTML=a}function v(e){function t(a){const{images:i,name:s,price:o,color:l}=a;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${i[0]}" alt="${s}" width="500px" />
          <h2 class="furniture-catalog-title">${s}</h2>
          <ul class='color-list'>
            ${l.map(k=>`<li class='color-items' style="background-color: ${k};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${o} грн</p>
          <button class="furniture-catalog-btn" type="button">детальніше</button>
        </li>
        `}return e.map(t).join("")}const y="https://furniture-store-v2.b.goit.study/api/furnitures",w=8;async function L(e=1){return(await u.get(y,{params:{page:e,limit:w}})).data}async function b(e,t=1){return(await u.get(y,{params:{category:e,page:t,limit:w}})).data}const $=document.querySelector(".loader"),M=document.querySelector(".loader-overlay");function h(){M.classList.remove("hidden"),$.classList.add("show")}function m(){$.classList.remove("show"),M.classList.add("hidden")}function g(e){B.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}const S=document.querySelector(".furniture-catalog-list"),c=document.querySelector(".btn-load-more");let n=1,d=null,f=0;const I=8;async function E(e=null){n=1,d=e;let t;d?t=await b(d,n):t=await L(n),S.innerHTML=v(t.furnitures),f=Math.ceil(t.totalItems/I),q()}c.addEventListener("click",async()=>{n+=1,h();let e;d?e=await b(d,n):e=await L(n),S.insertAdjacentHTML("beforeend",v(e.furnitures)),m(),q()});function q(){f<=1?c.style.display="none":n>=f?(c.disabled=!0,c.style.display="none"):(c.disabled=!1,c.style.display="block")}async function p(){await E(null)}async function D(e){await E(e)}const F=u.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),H=async()=>(await F.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks,r="/my-project-withJS/assets/icons-DBWj8NZj.svg";function N(e){const t=Math.round(e*2)/2,a=Math.floor(t),i=t%1!=0?"half":"";return{baseRate:a,halfRate:i}}function x(e){const{baseRate:t,halfRate:a}=N(e.rate);return`<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${t} ${a}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${r}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${r}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${r}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${r}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${r}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${r}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use             
                    href="${r}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${r}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${r}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${r}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${r}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${r}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${r}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${r}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${r}#icon-star-filled"
                  ></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="tetx-feedback">${e.descr}</p>
          <p class="name-author">${e.name}</p>
        </li>`}function U(e){return e.map(x).join("")}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await T(),a=[{_id:"all",name:"Всі товари"},...t];j(a),await p();const i=document.querySelector(".list-categories-item");i&&i.classList.add("active-item-category")}catch{g()}e&&e.addEventListener("click",async t=>{const a=t.target.closest(".list-categories-item");if(!a)return;e.querySelectorAll(".list-categories-item").forEach(s=>s.classList.remove("active-item-category")),a.classList.add("active-item-category");const i=a.dataset.categoryId;try{h(),i==="all"?await p():await D(i)}catch{g()}finally{m()}})});document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(!e.openModalBtn||!e.closeModalBtn||!e.modal)return;e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",a),document.addEventListener("click",s=>{e.modal.classList.contains("is-open")&&!s.target.closest(".mobile-menu-container")&&!s.target.closest("[data-menu-open]")&&i()});function t(){const s=e.modal.classList.toggle("is-open");document.body.classList.toggle("menu-open",s)}function a(s){s.key==="Escape"&&i()}function i(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}});const V={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{h();try{const e=await H(),t=U(e);V.listElems.innerHTML=t;const a=new C(".swiper",{modules:[P,A],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{g(message)}finally{m()}});new O(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`}});
//# sourceMappingURL=index.js.map
