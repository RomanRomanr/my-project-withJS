import{a as m,i as C,S as G,N as J,P as Z,K as Q,A as X,I as Y}from"./assets/vendor-Hl2mOz2K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const n="/my-project-withJS/assets/icons-DBWj8NZj.svg",ee="https://furniture-store-v2.b.goit.study/api";async function te(){return(await m.get(`${ee}/categories`)).data}function se(e){const t=document.querySelector(".list-categories");if(!t)return;const a=e.map(({_id:o,name:s})=>`
        <li class="list-categories-item" data-category-id="${o}">
          <p class="list-categories-name">${s}</p>
        </li>
      `).join("");t.innerHTML=a}function I(e){function t(a){const{images:o,name:s,price:r,color:i,_id:c}=a;return` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${o[0]}" alt="${s}" width="500px" />
          <h2 class="furniture-catalog-title">${s}</h2>
          <ul class='color-list'>
            ${i.map(g=>`<li class='color-items' style="background-color: ${g};"></li>`).join("")}
          </ul>
          <p class="furniture-catalog-price">${r} грн</p>
          <button class="furniture-catalog-btn" type="button" data-imgid='${c}'>детальніше</button>
        </li>
        `}return e.map(t).join("")}const B="https://furniture-store-v2.b.goit.study/api/furnitures",O=8;async function P(e=1){return(await m.get(B,{params:{page:e,limit:O}})).data}async function T(e,t=1){return(await m.get(B,{params:{category:e,page:t,limit:O}})).data}const j=document.querySelector(".loader"),N=document.querySelector(".loader-overlay");function w(){N.classList.remove("hidden"),j.classList.add("show")}function $(){j.classList.remove("show"),N.classList.add("hidden")}function p(e){C.error({title:"Увага! Виникла помилка",message:e,position:"topRight"})}function oe(e){C.success({title:"ЗАМОВЛЕННЯ УСПІШНО СФОРМОВАНО",message:e,position:"center",messageSize:16,maxWidth:900})}const R=document.querySelector(".furniture-catalog-list"),u=document.querySelector(".btn-load-more");let l=1,f=null,k=0;const ae=8;async function D(e=null){l=1,f=e;let t;f?t=await T(f,l):t=await P(l),R.innerHTML=I(t.furnitures),k=Math.ceil(t.totalItems/ae),H()}u.addEventListener("click",async()=>{l+=1,w();let e;f?e=await T(f,l):e=await P(l),R.insertAdjacentHTML("beforeend",I(e.furnitures)),$(),H()});function H(){k<=1?u.style.display="none":l>=k?(u.disabled=!0,u.style.display="none"):(u.disabled=!1,u.style.display="block")}async function A(){await D(null)}async function re(e){await D(e)}const ne=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"}),ie=async()=>(await ne.get("/feedbacks",{params:{page:1,limit:10}})).data.feedbacks;function ce(e){const t=Math.round(e*2)/2,a=Math.floor(t),o=t%1!=0?"half":"";return{baseRate:a,halfRate:o}}function le(e){const{baseRate:t,halfRate:a}=ce(e.rate);return`<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${t} ${a}">
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
        </li>`}function de(e){return e.map(le).join("")}const ue=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api"});async function me(e){const{data:t}=await ue.get(`/furnitures/${e}`);return t}const y={modal:document.querySelector(".modal"),modalWindow:document.querySelector(".modal-window")};function ge(e=0){const t=Math.round(e*2)/2,a=Math.floor(t),o=t%1!==0;return`rating star-svg value-${a}${o?" half":""}`}function fe(e=0){return`
    <div class="${ge(e)}">
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
  `}function pe(e=[]){const t=Array.isArray(e)?e:typeof e=="string"&&e.trim()?[e.trim()]:[];return t.length?`
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${t.map((a,o)=>`
          <li class="modal-colors-item">
            <button
              class="modal-color ${o===0?"modal-color--selected":""}"
              type="button"
              style="background-color: ${a}"
              title="${a}"
              aria-pressed="${o===0}"
              data-color-option
              data-color-value="${a}"
            ></button>
          </li>`).join("")}
      </ul>
    </div>
  `:""}function he(e=""){return e.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>`<p>${t}</p>`).join("")}function ve(e){const t=Number(e);return Number.isNaN(t)?`${e} грн`:`${t.toLocaleString("uk-UA")} грн`}function h(e=""){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function ye(e){var q;if(!y.modalWindow||!e)return;const t=Array.isArray(e.images)?e.images:[],[a="",o="",s=""]=t,r=h(e.name||e.title||"Товар"),i=h(((q=e.category)==null?void 0:q.name)||e.category||"Категорія не вказана"),c=ve(e.price),g=e.description||"",z=h(String(e.sizes||e.size||"Не вказано")),U=e.rate||e.rating||0,V=e.color||e.colors||[],L=h(e.alt||e.name||e.title||"Товар"),d="/img/placeholder.jpg",W=a||d,_=o||a||d,K=s||a||d;y.modalWindow.innerHTML=`
    <button class="modal-close" type="button" aria-label="Закрити">
      <svg class="icon-x" width="24" height="24"><use href="${n}#icon-x"></use></svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img class="modal-main-image" src="${W}" alt="${L}" onerror="this.src='${d}'" />
        <div class="modal-small-images">
          <img class="modal-small-image" src="${_}" alt="${L}" onerror="this.src='${d}'" />
          <img class="modal-small-image" src="${K}" alt="${L}" onerror="this.src='${d}'" />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${r}</h2>
        <p class="modal-category">${i}</p>
        <p class="modal-price">${c}</p>
        ${fe(U)}
        ${pe(V)}
        <div class="modal-description">${he(g)}</div>
        <p class="modal-size">Розміри: ${z}</p>
        <button class="modal-button" type="button" data-order-open>
          Перейти до замовлення
        </button>
      </div>
    </div>
  `}function be(){var e;(e=y.modal)==null||e.classList.add("is-open")}function b(){var e;(e=y.modal)==null||e.classList.remove("is-open")}let S;function we(e){const t=e.target.closest(".modal-close"),a=e.target.classList.contains("modal-overlay");if(t||a){b(),document.body.classList.remove("modal--order-open");return}const o=e.target.closest("[data-color-option]");if(o){document.querySelectorAll("[data-color-option]").forEach(i=>{i.classList.remove("modal-color--selected"),i.setAttribute("aria-pressed","false")}),o.classList.add("modal-color--selected"),o.setAttribute("aria-pressed","true");return}const s=e.target.closest(".modal-button");if(s){const{productId:r}=s.dataset,i=document.querySelector(".modal-color--selected");S=(i==null?void 0:i.dataset.colorValue)??null;const c={productId:r,color:S};r&&(b(),document.body.classList.remove("modal--order-open"),document.dispatchEvent(new CustomEvent("product-order-click",{detail:c})),console.log(c));return}}document.addEventListener("keydown",e=>{e.key==="Escape"&&(b(),document.body.classList.remove("modal--order-open"))});document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".list-categories");try{const t=await te(),a=[{_id:"all",name:"Всі товари"},...t];se(a),await A();const o=document.querySelector(".list-categories-item");o&&o.classList.add("active-item-category")}catch{p()}e&&e.addEventListener("click",async t=>{const a=t.target.closest(".list-categories-item");if(!a)return;e.querySelectorAll(".list-categories-item").forEach(s=>s.classList.remove("active-item-category")),a.classList.add("active-item-category");const o=a.dataset.categoryId;try{w(),o==="all"?await A():await re(o)}catch{p()}finally{$()}})});document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(!e.openModalBtn||!e.closeModalBtn||!e.modal)return;e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",a),document.addEventListener("click",s=>{e.modal.classList.contains("is-open")&&!s.target.closest(".mobile-menu-container")&&!s.target.closest("[data-menu-open]")&&o()}),e.modal.addEventListener("click",s=>{s.target.closest(".menu-nav-item")&&o()});function t(){const s=e.modal.classList.toggle("is-open");document.body.classList.toggle("menu-open",s)}function a(s){s.key==="Escape"&&o()}function o(){e.modal.classList.remove("is-open"),document.body.classList.remove("menu-open")}});const $e={pagination:document.querySelector(".pagination"),listElems:document.querySelector(".list-feedbacks")};document.addEventListener("DOMContentLoaded",async()=>{w();try{const e=await ie(),t=de(e);$e.listElems.innerHTML=t;const a=new G(".swiper",{modules:[J,Z,Q],slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch{p(message)}finally{$()}});new X(".accordion-container",{duration:400,onOpen:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="${n}#icon-chevron-up"></use>
    </svg>`},onClose:e=>{const t=e.querySelector(".faq-icon");t.innerHTML=`<svg width="32" height="32">
      <use href="${n}#icon-chevron-down"></use>
    </svg>`}});let Le,x;document.addEventListener("click",async e=>{const t=e.target.closest(".furniture-catalog-btn");if(!t)return;be();const a=t.dataset.imgid;w();try{const o=await me(a);ye(o),document.body.classList.add("modal--order-open"),Le=o.color,x=o._id}catch{p(message)}finally{$()}});document.addEventListener("click",we);const v=document.querySelector("[data-order]");document.addEventListener("click",e=>{const t=e.target.closest(".modal-button"),a=e.target.closest("[data-order-close]"),o=e.target===v;if(t){b(),v.classList.add("is-open"),document.body.classList.add("modal--order-open");return}(a||o)&&M()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&M()});function M(){v.classList.remove("is-open"),document.body.classList.remove("modal--order-open")}const E=document.querySelector(".modal-order-form"),ke=document.querySelector(".modal-order-submit-btn");E.addEventListener("input",()=>{ke.disabled=!E.checkValidity()});E.addEventListener("submit",async e=>{e.preventDefault();const{userName:t,phone:a,comment:o}=e.target.elements,s=o.value||"Без коментарів",r={name:t.value,phone:a.value,modelId:x,color:S,comment:s};try{const c=(await m.post("https://furniture-store-v2.b.goit.study/api/orders",r)).data,g=`Вітаю ${c.name}, Ви замовили ${c.model}, колір ${c.color}. Номер Вашого замовлення - ${c.orderNum}. Найближчим часом з Вами зв'яжеться наш менеджер для підтвердження замовлення. Дякуємо що обрали нас!`;oe(g),e.target.reset(),M()}catch(i){p(i.message)}});const F=document.querySelector('input[name="phone"]');Y({mask:"380999999999",showMaskOnHover:!1,showMaskOnFocus:!0}).mask(F);console.log(F);
//# sourceMappingURL=index.js.map
