// import StarRating from 'star-rating.js';
import spriteUrl from '../img/icons.svg';
import 'css-star-rating/css/star-rating.css';

const refs = {
  modal: document.querySelector('.modal'),
  modalWindow: document.querySelector('.modal-window'),
};

function getRatingClasses(rating = 0) {
  const rounded = Math.round(rating * 2) / 2;
  const whole = Math.floor(rounded);
  const hasHalf = rounded % 1 !== 0;
  return `rating star-svg value-${whole}${hasHalf ? ' half' : ''}`;
}

function renderStars(rating = 0) {
  const classes = getRatingClasses(rating);
  return `
    <div class="${classes}">
      <div class="star-container">
        ${[...Array(5)]
          .map(
            () => `
          <div class="star">
            <svg class="star-empty"><use href="${spriteUrl}#icon-star"></use></svg>
            <svg class="star-half"><use href="${spriteUrl}#icon-star-half"></use></svg>
            <svg class="star-filled"><use href="${spriteUrl}#icon-star-filled"></use></svg>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderColors(colors = []) {
  const list = Array.isArray(colors)
    ? colors
    : typeof colors === 'string' && colors.trim()
      ? [colors.trim()]
      : [];

  if (!list.length) return '';

  return `
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${list
          .map(
            (color, idx) => `
          <li class="modal-colors-item">
            <button
              class="modal-color ${idx === 0 ? 'modal-color--selected' : ''}"
              type="button"
              style="background-color: ${color}"
              title="${color}"
              aria-pressed="${idx === 0}"
              data-color-option
              data-color-value="${color}"
            ></button>
          </li>`
          )
          .join('')}
      </ul>
    </div>
  `;
}

function renderDescription(description = '') {
  return description
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => `<p>${item}</p>`)
    .join('');
}

function formatPrice(price) {
  const numeric = Number(price);
  return Number.isNaN(numeric)
    ? `${price} грн`
    : `${numeric.toLocaleString('uk-UA')} грн`;
}

function sanitize(str = '') {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function modalGallery(product) {
  if (!refs.modalWindow || !product) return;

  const images = Array.isArray(product.images) ? product.images : [];
  const [mainImage = '', secondImage = '', thirdImage = ''] = images;

  const title = sanitize(product.name || product.title || 'Товар');
  const category = sanitize(
    product.category?.name || product.category || 'Категорія не вказана'
  );
  const price = formatPrice(product.price);
  const description = product.description || '';
  const size = sanitize(String(product.sizes || product.size || 'Не вказано'));
  const rating = product.rate || product.rating || 0;
  const colors = product.color || product.colors || [];
  const alt = sanitize(product.alt || product.name || product.title || 'Товар');

  const placeholder = '/img/placeholder.jpg';
  const imgMain = mainImage || placeholder;
  const imgSecond = secondImage || mainImage || placeholder;
  const imgThird = thirdImage || mainImage || placeholder;

  refs.modalWindow.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрити">
      <svg class="icon-x" width="24" height="24"><use href="${spriteUrl}#icon-x"></use></svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img class="modal-main-image" src="${imgMain}" alt="${alt}" onerror="this.src='${placeholder}'" />
        <div class="modal-small-images">
          <img class="modal-small-image" src="${imgSecond}" alt="${alt}" onerror="this.src='${placeholder}'" />
          <img class="modal-small-image" src="${imgThird}" alt="${alt}" onerror="this.src='${placeholder}'" />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${title}</h2>
        <p class="modal-category">${category}</p>
        <p class="modal-price">${price}</p>
        ${renderStars(rating)}
        ${renderColors(colors)}
        <div class="modal-description">${renderDescription(description)}</div>
        <p class="modal-size">Розміри: ${size}</p>
        <button class="modal-button" type="button" data-order-open>
          Перейти до замовлення
        </button>
      </div>
    </div>
  `;
}

export function clearGallery() {
  if (refs.modalWindow) refs.modalWindow.innerHTML = '';
}

export function showModal() {
  refs.modal?.classList.add('is-open');
}

export function hideModal() {
  refs.modal?.classList.remove('is-open');
}