import{a as g,i as z,S as U,N as W,P as _,A as V}from"./assets/vendor-d0R7Mxtu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const K="https://furniture-store-v2.b.goit.study/api";async function G(){return(await g.get(`${K}/categories`)).data}function J(e){const t=document.querySelector(".list-categories");if(!t)return;const s=e.map(({_id:i,name:a})=>`
        <li class="list-categories-item" data-category-id="${i}">
          <p class="list-categories-name">${a}</p>
        </li>
      `).join("");t.innerHTML=s}function A(e){function t(s){const{images:i,name:a,price:n,color:r}=s;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${i[0]}" alt="${a}" width="500px" />
          <h2 class="furniture-catalog-title">${a}</h2>
          <ul class='color-list'>
            ${r.map(f=>`<li class='color-items' style="background-color: ${f};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${n} грн</p>
          <button class="furniture-catalog-btn" type="button">детальніше</button>
        </li>
        `}return e.map(t).join("")}const k="https://furniture-store-v2.b.goit.study/api/furnitures",q=8;async function E(e=1){return(await g.get(k,{params:{page:e,limit:q}})).data}async function C(e,t=1){return(await g.get(k,{params:{category:e,page:t,limit:q}})).data}const B=document.querySelector(".loader"),P=document.querySelector(".loader-overlay");function w(){P.classList.remove("hidden"),B.classList.add("show")}function $(){B.classList.remove("show"),P.classList.add("hidden")}function p(e){z.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}const I=document.querySelector(".furniture-catalog-list"),d=document.querySelector(".btn-load-more");let c=1,u=null,v=0;const Z=8;async function R(e=null){c=1,u=e;let t;u?t=await C(u,c):t=await E(c),I.innerHTML=A(t.furnitures),v=Math.ceil(t.totalItems/Z),T()}d.addEventListener("click",async()=>{c+=1,w();let e;u?e=await C(u,c):e=await E(c),I.insertAdjacentHTML("beforeend",A(e.furnitures)),$(),T()});function T(){v<=1?d.style.display="none":c>=v?(d.disabled=!0,d.style.display="none"):(d.disabled=!1,d.style.display="block")}async function M(){await R(null)}async function Q(e){await R(e)}const X=g.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),Y=async()=>(await X.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks,o="/my-project-withJS/assets/icons-DBWj8NZj.svg";function ee(e){const t=Math.round(e*2)/2,s=Math.floor(t),i=t%1!=0?"half":"";return{baseRate:s,halfRate:i}}function te(e){const{baseRate:t,halfRate:s}=ee(e.rate);return`<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${t} ${s}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${o}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${o}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${o}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${o}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${o}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${o}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use             
                    href="${o}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${o}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${o}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${o}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${o}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${o}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${o}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${o}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${o}#icon-star-filled"
                  ></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="tetx-feedback">${e.descr}</p>
          <p class="name-author">${e.name}</p>
        </li>`}function se(e){return e.map(te).join("")}const b=g.create({baseURL:"https://furniture-store-v2.b.goit.study/api"});async function ae(e={}){const{data:t}=await b.get("/furnitures",{params:e});return t}async function ie(e){const{data:t}=await b.get(`/furnitures/${e}`);return t}async function oe(){const{data:e}=await b.get("/categories");return e}const y={modal:document.querySelector(".modal"),modalWindow:document.querySelector(".modal-window")};function ne(e=0){const t=Math.round(e*2)/2,s=Math.floor(t),i=t%1!==0;return`rating star-svg value-${s}${i?" half":""}`}function re(e=0){return`
    <div class="${ne(e)}">
      <div class="star-container">
        ${[...Array(5)].map(()=>`
          <div class="star">
            <svg class="star-empty"><use href="${o}#icon-star"></use></svg>
            <svg class="star-half"><use href="${o}#icon-star-half"></use></svg>
            <svg class="star-filled"><use href="${o}#icon-star-filled"></use></svg>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ce(e=[]){const t=Array.isArray(e)?e:typeof e=="string"&&e.trim()?[e.trim()]:[];return t.length?`
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${t.map((s,i)=>`
          <li class="modal-colors-item">
            <button
              class="modal-color ${i===0?"modal-color--selected":""}"
              type="button"
              style="background-color: ${s}"
              title="${s}"
              aria-pressed="${i===0}"
              data-color-option
              data-color-value="${s}"
            ></button>
          </li>`).join("")}
      </ul>
    </div>
  `:""}function le(e=""){return e.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>`<p>${t}</p>`).join("")}function de(e){const t=Number(e);return Number.isNaN(t)?`${e} грн`:`${t.toLocaleString("uk-UA")} грн`}function m(e=""){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function ue(e){var L;if(!y.modalWindow||!e)return;const t=Array.isArray(e.images)?e.images:[],[s="",i="",a=""]=t,n=m(e.name||e.title||"Товар"),r=m(((L=e.category)==null?void 0:L.name)||e.category||"Категорія не вказана"),f=de(e.price),j=e.description||"",O=m(String(e.sizes||e.size||"Не вказано")),F=e.rate||e.rating||0,N=e.color||e.colors||[],h=m(e.alt||e.name||e.title||"Товар"),l="/img/placeholder.jpg",H=s||l,x=i||s||l,D=a||s||l;y.modalWindow.innerHTML=`
    <button class="modal-close" type="button" aria-label="Закрити">
      <svg class="icon-x" width="24" height="24"><use href="${o}#icon-x"></use></svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img class="modal-main-image" src="${H}" alt="${h}" onerror="this.src='${l}'" />
        <div class="modal-small-images">
          <img class="modal-small-image" src="${x}" alt="${h}" onerror="this.src='${l}'" />
          <img class="modal-small-image" src="${D}" alt="${h}" onerror="this.src='${l}'" />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${n}</h2>
        <p class="modal-category">${r}</p>
        <p class="modal-price">${f}</p>
        ${re(F)}
        ${ce(N)}
        <div class="modal-description">${le(j)}</div>
        <p class="modal-size">Розміри: ${O}</p>
        <button class="modal-button" type="button" data-order-open>
          Перейти до замовлення
        </button>
      </div>
    </div>
  `}function ge(){var e;(e=y.modal)==null||e.classList.add("is-open")}let S;document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await G(),s=[{_id:"all",name:"Всі товари"},...t];J(s),await M();const i=document.querySelector(".list-categories-item");i&&i.classList.add("active-item-category")}catch{p()}e&&e.addEventListener("click",async t=>{const s=t.target.closest(".list-categories-item");if(!s)return;e.querySelectorAll(".list-categories-item").forEach(a=>a.classList.remove("active-item-category")),s.classList.add("active-item-category");const i=s.dataset.categoryId;try{w(),i==="all"?await M():await Q(i)}catch{p()}finally{$()}})});document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(!e.openModalBtn||!e.closeModalBtn||!e.modal)return;e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",s),document.addEventListener("click",a=>{e.modal.classList.contains("is-open")&&!a.target.closest(".mobile-menu-container")&&!a.target.closest("[data-menu-open]")&&i()});function t(){const a=e.modal.classList.toggle("is-open");document.body.classList.toggle("menu-open",a)}function s(a){a.key==="Escape"&&i()}function i(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}});const me={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{w();try{const e=await Y(),t=se(e);me.listElems.innerHTML=t;const s=new U(".swiper",{modules:[W,_],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{p(message)}finally{$()}});new V(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`}});async function fe(){try{const[e,t]=await Promise.all([ae(),oe()]),s=e.furnitures??[];if(console.log("Список товарів:",s),console.log("Категорії:",t),s.length===0){console.log("API повернув порожній список товарів.");return}S=s[5]._id;const i=await ie(S);console.log("Деталі першого товару:",i),ue(i),ge()}catch(e){console.error("Помилка перевірки API меблів:",e)}}fe();
//# sourceMappingURL=index.js.map
