import{a as m,i as V,S as K,N as G,P as J,A as Z}from"./assets/vendor-d0R7Mxtu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const Q="https://furniture-store-v2.b.goit.study/api";async function X(){return(await m.get(`${Q}/categories`)).data}function Y(e){const t=document.querySelector(".list-categories");if(!t)return;const s=e.map(({_id:i,name:a})=>`
        <li class="list-categories-item" data-category-id="${i}">
          <p class="list-categories-name">${a}</p>
        </li>
      `).join("");t.innerHTML=s}function E(e){function t(s){const{images:i,name:a,price:o,color:r}=s;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${i[0]}" alt="${a}" width="500px" />
          <h2 class="furniture-catalog-title">${a}</h2>
          <ul class='color-list'>
            ${r.map(p=>`<li class='color-items' style="background-color: ${p};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${o} грн</p>
          <button class="furniture-catalog-btn" type="button">детальніше</button>
        </li>
        `}return e.map(t).join("")}const A="https://furniture-store-v2.b.goit.study/api/furnitures",B=8;async function C(e=1){return(await m.get(A,{params:{page:e,limit:B}})).data}async function P(e,t=1){return(await m.get(A,{params:{category:e,page:t,limit:B}})).data}const I=document.querySelector(".loader"),R=document.querySelector(".loader-overlay");function $(){R.classList.remove("hidden"),I.classList.add("show")}function b(){I.classList.remove("show"),R.classList.add("hidden")}function y(e){V.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}const T=document.querySelector(".furniture-catalog-list"),d=document.querySelector(".btn-load-more");let l=1,g=null,w=0;const ee=8;async function x(e=null){l=1,g=e;let t;g?t=await P(g,l):t=await C(l),T.innerHTML=E(t.furnitures),w=Math.ceil(t.totalItems/ee),j()}d.addEventListener("click",async()=>{l+=1,$();let e;g?e=await P(g,l):e=await C(l),T.insertAdjacentHTML("beforeend",E(e.furnitures)),b(),j()});function j(){w<=1?d.style.display="none":l>=w?(d.disabled=!0,d.style.display="none"):(d.disabled=!1,d.style.display="block")}async function k(){await x(null)}async function te(e){await x(e)}const se=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),ae=async()=>(await se.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks,n="/my-project-withJS/assets/icons-DBWj8NZj.svg";function ie(e){const t=Math.round(e*2)/2,s=Math.floor(t),i=t%1!=0?"half":"";return{baseRate:s,halfRate:i}}function oe(e){const{baseRate:t,halfRate:s}=ie(e.rate);return`<li class="swiper-slide feedback">
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
        </li>`}function ne(e){return e.map(oe).join("")}const L=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"});async function re(e={}){const{data:t}=await L.get("/furnitures",{params:e});return t}async function le(e){const{data:t}=await L.get(`/furnitures/${e}`);return t}async function ce(){const{data:e}=await L.get("/categories");return e}const h={modal:document.querySelector(".modal"),modalWindow:document.querySelector(".modal-window")};let f=null;const de=`
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      class="gl-star-full"
      d="M12 2.25l2.835 5.743 6.34.921-4.588 4.472 1.083 6.314L12 16.718 6.33 19.7l1.083-6.314L2.825 8.914l6.34-.921L12 2.25z"
    />
  </svg>
`;function ue(e=0){const t=Math.max(0,Math.min(5,Number(e)||0)),s=Math.round(t);return`
    <div class="modal-rating" aria-label="Рейтинг ${t.toFixed(1)} з 5">
      <select class="modal-star-rating" aria-label="Рейтинг товару" disabled>
        <option value="">Оберіть рейтинг</option>
        <option value="1" ${s===1?"selected":""}>1</option>
        <option value="2" ${s===2?"selected":""}>2</option>
        <option value="3" ${s===3?"selected":""}>3</option>
        <option value="4" ${s===4?"selected":""}>4</option>
        <option value="5" ${s===5?"selected":""}>5</option>
      </select>
    </div>
  `}function ge(e=[]){let t=[];return Array.isArray(e)?t=e:typeof e=="string"&&e.trim()&&(t=[e.trim()]),t=t.filter(Boolean),t.length===0?"":`
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${t.map((i,a)=>{const o=a===0;return`
        <li class="modal-colors-item">
          <button
            class="modal-color ${o?"modal-color--selected":""}"
            type="button"
            style="background-color: ${i};"
            title="${i}"
            aria-label="Колір товару: ${i}"
            aria-pressed="${o}"
            data-color-option
            data-color-value="${i}"
          ></button>
        </li>
      `}).join("")}
      </ul>
    </div>
  `}function me(e=""){return e?e.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>`<p>${t}</p>`).join(""):""}function fe(e){if(e==null||e==="")return"";const t=Number(e);return Number.isNaN(t)?`${e} грн`:`${t.toLocaleString("uk-UA")} грн`}function u(e=""){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function he(e){var S;if(!h.modalWindow||!e)return;const t=Array.isArray(e.images)?e.images:[],[s="",i="",a=""]=t,o=u(e.name||e.title||"Товар"),r=u(((S=e.category)==null?void 0:S.name)||e.category||"Категорія не вказана"),p=fe(e.price),F=e.description||"",N=u(String(e.sizes||e.size||"Не вказано")),O=e.rate||e.rating||0,H=e.color||e.colors||[],v=u(e.alt||e.name||e.title||"Товар"),z=u(e._id||""),c="/img/placeholder.jpg",D=s||c,U=i||s||c,W=a||s||c;h.modalWindow.innerHTML=`
    <button class="modal-close" type="button" aria-label="Закрити модальне вікно">
      <svg class="icon-x" width="24" height="24" aria-hidden="true">
        <use href="/img/icons.svg#icon-x"></use>
      </svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img
          class="modal-main-image"
          src="${D}"
          alt="${v}"
          onerror="this.src='${c}'"
        />
        <div class="modal-small-images">
          <img
            class="modal-small-image"
            src="${U}"
            alt="${v}"
            onerror="this.src='${c}'"
          />
          <img
            class="modal-small-image"
            src="${W}"
            alt="${v}"
            onerror="this.src='${c}'"
          />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${o}</h2>
        <p class="modal-category">${r}</p>
        <p class="modal-price">${p}</p>
        ${ue(O)}
        ${ge(H)}
        <div class="modal-description">
          ${me(F)}
        </div>
        <p class="modal-size">Розміри: ${N}</p>
        <button
          class="modal-button"
          type="button"
          data-product-id="${z}"
          data-order-open
        >
          Перейти до замовлення
        </button>
      </div>
    </div>
  `;const M=h.modalWindow.querySelector(".modal-star-rating");M&&(f==null||f.destroy(),f=new StarRating(M,{clearable:!1,maxStars:5,tooltip:!1,stars:_=>{_.innerHTML=de}}))}function pe(){var e;(e=h.modal)==null||e.classList.add("is-open")}let q;document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await X(),s=[{_id:"all",name:"Всі товари"},...t];Y(s),await k();const i=document.querySelector(".list-categories-item");i&&i.classList.add("active-item-category")}catch{y()}e&&e.addEventListener("click",async t=>{const s=t.target.closest(".list-categories-item");if(!s)return;e.querySelectorAll(".list-categories-item").forEach(a=>a.classList.remove("active-item-category")),s.classList.add("active-item-category");const i=s.dataset.categoryId;try{$(),i==="all"?await k():await te(i)}catch{y()}finally{b()}})});document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(!e.openModalBtn||!e.closeModalBtn||!e.modal)return;e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",s),document.addEventListener("click",a=>{e.modal.classList.contains("is-open")&&!a.target.closest(".mobile-menu-container")&&!a.target.closest("[data-menu-open]")&&i()});function t(){const a=e.modal.classList.toggle("is-open");document.body.classList.toggle("menu-open",a)}function s(a){a.key==="Escape"&&i()}function i(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}});const ve={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{$();try{const e=await ae(),t=ne(e);ve.listElems.innerHTML=t;const s=new K(".swiper",{modules:[G,J],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{y(message)}finally{b()}});new Z(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`}});async function ye(){try{const[e,t]=await Promise.all([re(),ce()]),s=e.furnitures??[];if(console.log("Список товарів:",s),console.log("Категорії:",t),s.length===0){console.log("API повернув порожній список товарів.");return}q=s[5]._id;const i=await le(q);console.log("Деталі першого товару:",i),he(i),pe()}catch(e){console.error("Помилка перевірки API меблів:",e)}}ye();
//# sourceMappingURL=index.js.map
