import{a as m,i as C,S as K,N as G,P as J,A as Z}from"./assets/vendor-cNf5pkwz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const Q="https://furniture-store-v2.b.goit.study/api";async function X(){return(await m.get(`${Q}/categories`)).data}function Y(e){const t=document.querySelector(".list-categories");if(!t)return;const s=e.map(({_id:o,name:a})=>`
        <li class="list-categories-item" data-category-id="${o}">
          <p class="list-categories-name">${a}</p>
        </li>
      `).join("");t.innerHTML=s}function B(e){function t(s){const{images:o,name:a,price:r,color:i,_id:c}=s;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${o[0]}" alt="${a}" width="500px" />
          <h2 class="furniture-catalog-title">${a}</h2>
          <ul class='color-list'>
            ${i.map(g=>`<li class='color-items' style="background-color: ${g};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${r} грн</p>
          <button class="furniture-catalog-btn" type="button" data-imgid='${c}'>детальніше</button>
        </li>
        `}return e.map(t).join("")}const I="https://furniture-store-v2.b.goit.study/api/furnitures",O=8;async function P(e=1){return(await m.get(I,{params:{page:e,limit:O}})).data}async function T(e,t=1){return(await m.get(I,{params:{category:e,page:t,limit:O}})).data}const j=document.querySelector(".loader"),N=document.querySelector(".loader-overlay");function w(){N.classList.remove("hidden"),j.classList.add("show")}function $(){j.classList.remove("show"),N.classList.add("hidden")}function h(e){C.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}function ee(e){C.success({title:"ЗАМОВЛЕННЯ УСПІШНО СФОРМОВАНО",message:e,position:"center",messageSize:16,maxWidth:900})}const R=document.querySelector(".furniture-catalog-list"),u=document.querySelector(".btn-load-more");let l=1,f=null,S=0;const te=8;async function D(e=null){l=1,f=e;let t;f?t=await T(f,l):t=await P(l),R.innerHTML=B(t.furnitures),S=Math.ceil(t.totalItems/te),x()}u.addEventListener("click",async()=>{l+=1,w();let e;f?e=await T(f,l):e=await P(l),R.insertAdjacentHTML("beforeend",B(e.furnitures)),$(),x()});function x(){S<=1?u.style.display="none":l>=S?(u.disabled=!0,u.style.display="none"):(u.disabled=!1,u.style.display="block")}async function A(){await D(null)}async function se(e){await D(e)}const oe=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),ae=async()=>(await oe.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks,n="/my-project-withJS/assets/icons-DBWj8NZj.svg";function re(e){const t=Math.round(e*2)/2,s=Math.floor(t),o=t%1!=0?"half":"";return{baseRate:s,halfRate:o}}function ne(e){const{baseRate:t,halfRate:s}=re(e.rate);return`<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${t} ${s}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${n}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${n}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${n}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${n}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${n}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${n}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use             
                    href="${n}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${n}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${n}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${n}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${n}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="${n}#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="${n}#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="${n}#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="${n}#icon-star-filled"
                  ></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="tetx-feedback">${e.descr}</p>
          <p class="name-author">${e.name}</p>
        </li>`}function ie(e){return e.map(ne).join("")}const ce=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"});async function le(e){const{data:t}=await ce.get(`/furnitures/${e}`);return t}const y={modal:document.querySelector(".modal"),modalWindow:document.querySelector(".modal-window")};function de(e=0){const t=Math.round(e*2)/2,s=Math.floor(t),o=t%1!==0;return`rating star-svg value-${s}${o?" half":""}`}function ue(e=0){return`
    <div class="${de(e)}">
      <div class="star-container">
        ${[...Array(5)].map(()=>`
          <div class="star">
            <svg class="star-empty"><use href="${n}#icon-star"></use></svg>
            <svg class="star-half"><use href="${n}#icon-star-half"></use></svg>
            <svg class="star-filled"><use href="${n}#icon-star-filled"></use></svg>
          </div>
        `).join("")}
      </div>
    </div>
  `}function me(e=[]){const t=Array.isArray(e)?e:typeof e=="string"&&e.trim()?[e.trim()]:[];return t.length?`
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${t.map((s,o)=>`
          <li class="modal-colors-item">
            <button
              class="modal-color ${o===0?"modal-color--selected":""}"
              type="button"
              style="background-color: ${s}"
              title="${s}"
              aria-pressed="${o===0}"
              data-color-option
              data-color-value="${s}"
            ></button>
          </li>`).join("")}
      </ul>
    </div>
  `:""}function ge(e=""){return e.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>`<p>${t}</p>`).join("")}function fe(e){const t=Number(e);return Number.isNaN(t)?`${e} грн`:`${t.toLocaleString("uk-UA")} грн`}function p(e=""){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function he(e){var q;if(!y.modalWindow||!e)return;const t=Array.isArray(e.images)?e.images:[],[s="",o="",a=""]=t,r=p(e.name||e.title||"Товар"),i=p(((q=e.category)==null?void 0:q.name)||e.category||"Категорія не вказана"),c=fe(e.price),g=e.description||"",z=p(String(e.sizes||e.size||"Не вказано")),F=e.rate||e.rating||0,U=e.color||e.colors||[],L=p(e.alt||e.name||e.title||"Товар"),d="/img/placeholder.jpg",V=s||d,W=o||s||d,_=a||s||d;y.modalWindow.innerHTML=`
    <button class="modal-close" type="button" aria-label="Закрити">
      <svg class="icon-x" width="24" height="24"><use href="${n}#icon-x"></use></svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img class="modal-main-image" src="${V}" alt="${L}" onerror="this.src='${d}'" />
        <div class="modal-small-images">
          <img class="modal-small-image" src="${W}" alt="${L}" onerror="this.src='${d}'" />
          <img class="modal-small-image" src="${_}" alt="${L}" onerror="this.src='${d}'" />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${r}</h2>
        <p class="modal-category">${i}</p>
        <p class="modal-price">${c}</p>
        ${ue(F)}
        ${me(U)}
        <div class="modal-description">${ge(g)}</div>
        <p class="modal-size">Розміри: ${z}</p>
        <button class="modal-button" type="button" data-order-open>
          Перейти до замовлення
        </button>
      </div>
    </div>
  `}function pe(){var e;(e=y.modal)==null||e.classList.add("is-open")}function b(){var e;(e=y.modal)==null||e.classList.remove("is-open")}let E;function ve(e){const t=e.target.closest(".modal-close"),s=e.target.classList.contains("modal-overlay");if(t||s){b(),document.body.classList.remove("modal--order-open");return}const o=e.target.closest("[data-color-option]");if(o){document.querySelectorAll("[data-color-option]").forEach(i=>{i.classList.remove("modal-color--selected"),i.setAttribute("aria-pressed","false")}),o.classList.add("modal-color--selected"),o.setAttribute("aria-pressed","true");return}const a=e.target.closest(".modal-button");if(a){const{productId:r}=a.dataset,i=document.querySelector(".modal-color--selected");E=(i==null?void 0:i.dataset.colorValue)??null;const c={productId:r,color:E};r&&(b(),document.body.classList.remove("modal--order-open"),document.dispatchEvent(new CustomEvent("product-order-click",{detail:c})),console.log(c));return}}document.addEventListener("keydown",e=>{e.key==="Escape"&&(b(),document.body.classList.remove("modal--order-open"))});document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await X(),s=[{_id:"all",name:"Всі товари"},...t];Y(s),await A();const o=document.querySelector(".list-categories-item");o&&o.classList.add("active-item-category")}catch{h()}e&&e.addEventListener("click",async t=>{const s=t.target.closest(".list-categories-item");if(!s)return;e.querySelectorAll(".list-categories-item").forEach(a=>a.classList.remove("active-item-category")),s.classList.add("active-item-category");const o=s.dataset.categoryId;try{w(),o==="all"?await A():await se(o)}catch{h()}finally{$()}})});document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(!e.openModalBtn||!e.closeModalBtn||!e.modal)return;e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",s),document.addEventListener("click",a=>{e.modal.classList.contains("is-open")&&!a.target.closest(".mobile-menu-container")&&!a.target.closest("[data-menu-open]")&&o()});function t(){const a=e.modal.classList.toggle("is-open");document.body.classList.toggle("menu-open",a)}function s(a){a.key==="Escape"&&o()}function o(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}});const ye={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{w();try{const e=await ae(),t=ie(e);ye.listElems.innerHTML=t;const s=new K(".swiper",{modules:[G,J],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{h(message)}finally{$()}});new Z(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`}});let be,H;document.addEventListener("click",async e=>{const t=e.target.closest(".furniture-catalog-btn");if(!t)return;pe();const s=t.dataset.imgid;w();try{const o=await le(s);he(o),document.body.classList.add("modal--order-open"),be=o.color,H=o._id}catch{h(message)}finally{$()}});document.addEventListener("click",ve);const v=document.querySelector("[data-order]");document.addEventListener("click",e=>{const t=e.target.closest(".modal-button"),s=e.target.closest("[data-order-close]"),o=e.target===v;if(t){b(),v.classList.add("is-open"),document.body.classList.add("modal--order-open");return}(s||o)&&M()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&M()});function M(){v.classList.remove("is-open"),document.body.classList.remove("modal--order-open")}const k=document.querySelector(".modal-order-form"),we=document.querySelector(".modal-order-submit-btn");k.addEventListener("input",()=>{we.disabled=!k.checkValidity()});k.addEventListener("submit",async e=>{e.preventDefault();const{userName:t,phone:s,comment:o}=e.target.elements,a=o.value||"Без коментарів",r={name:t.value,phone:s.value,modelId:H,color:E,comment:a};try{const c=(await m.post("https://furniture-store-v2.b.goit.study/api/orders",r)).data,g=`Вітаю ${c.name}, Ви замовили ${c.model}, колір ${c.color}. Номер Вашого замовлення - ${c.orderNum}. Найближчим часом з Вами зв'яжеться наш менеджер для підтвердження замовлення. Дякуємо що обрали нас!`;ee(g),e.target.reset(),M()}catch(i){h(i.message)}});
//# sourceMappingURL=index.js.map
