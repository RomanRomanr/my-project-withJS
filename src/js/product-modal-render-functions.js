import StarRating from 'star-rating.js';

const refs = {
  modal: document.querySelector('.modal'),
  modalWindow: document.querySelector('.modal-window'),
};

let modalRatingInstance = null;

const starSvgMarkup = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      class="gl-star-full"
      d="M12 2.25l2.835 5.743 6.34.921-4.588 4.472 1.083 6.314L12 16.718 6.33 19.7l1.083-6.314L2.825 8.914l6.34-.921L12 2.25z"
    />
  </svg>
`;

function renderStars(rating = 0) {
  const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const selectedRating = Math.round(normalizedRating);

  return `
    <div class="modal-rating" aria-label="Рейтинг ${normalizedRating.toFixed(1)} з 5">
      <select class="modal-star-rating" aria-label="Рейтинг товару" disabled>
        <option value="">Оберіть рейтинг</option>
        <option value="1" ${selectedRating === 1 ? 'selected' : ''}>1</option>
        <option value="2" ${selectedRating === 2 ? 'selected' : ''}>2</option>
        <option value="3" ${selectedRating === 3 ? 'selected' : ''}>3</option>
        <option value="4" ${selectedRating === 4 ? 'selected' : ''}>4</option>
        <option value="5" ${selectedRating === 5 ? 'selected' : ''}>5</option>
      </select>
    </div>
  `;
}

function renderColors(colors = []) {
  let colorList = [];

  if (Array.isArray(colors)) {
    colorList = colors;
  } else if (typeof colors === 'string' && colors.trim()) {
    colorList = [colors.trim()];
  }

  colorList = colorList.filter(Boolean);

  if (colorList.length === 0) {
    return '';
  }

  const colorsMarkup = colorList
    .map((color, index) => {
      const isSelected = index === 0;

      return `
        <li class="modal-colors-item">
          <button
            class="modal-color ${isSelected ? 'modal-color--selected' : ''}"
            type="button"
            style="background-color: ${color};"
            title="${color}"
            aria-label="Колір товару: ${color}"
            aria-pressed="${isSelected}"
            data-color-option
          ></button>
        </li>
      `;
    })
    .join('');

  return `
    <div class="modal-colors-block">
      <p class="modal-label">Колір</p>
      <ul class="modal-colors">
        ${colorsMarkup}
      </ul>
    </div>
  `;
}

function renderDescription(description = '') {
  if (!description) {
    return '';
  }

  return description
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => `<p>${item}</p>`)
    .join('');
}

function formatPrice(price) {
  if (price === null || price === undefined || price === '') {
    return '';
  }

  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return `${price} грн`;
  }

  return `${numericPrice.toLocaleString('uk-UA')} грн`;
}

function sanitize(str = '') {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function modalGallery(product) {
  if (!refs.modalWindow || !product) {
    return;
  }

  const images = Array.isArray(product.images) ? product.images : [];
  const [mainImage = '', secondImage = '', thirdImage = ''] = images;

  const title = sanitize(product.name || product.title || 'Товар');
  const category = sanitize(product.category?.name || product.category || 'Категорія не вказана');
  const price = formatPrice(product.price);
  const description = product.description || '';
  const size = sanitize(String(product.sizes || product.size || 'Не вказано'));
  const rating = product.rate || product.rating || 0;
  const colors = product.color || product.colors || [];
  const alt = sanitize(product.alt || product.name || product.title || 'Товар');
  const productId = sanitize(product._id || '');

  const placeholder = '/img/placeholder.jpg';
  const imgMain = mainImage || placeholder;
  const imgSecond = secondImage || mainImage || placeholder;
  const imgThird = thirdImage || mainImage || placeholder;

  refs.modalWindow.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрити модальне вікно">
      <svg class="icon-x" width="24" height="24" aria-hidden="true">
        <use href="/img/icons.svg#icon-x"></use>
      </svg>
    </button>

    <div class="modal-body">
      <div class="modal-gallery">
        <img
          class="modal-main-image"
          src="${imgMain}"
          alt="${alt}"
          onerror="this.src='${placeholder}'"
        />
        <div class="modal-small-images">
          <img
            class="modal-small-image"
            src="${imgSecond}"
            alt="${alt}"
            onerror="this.src='${placeholder}'"
          />
          <img
            class="modal-small-image"
            src="${imgThird}"
            alt="${alt}"
            onerror="this.src='${placeholder}'"
          />
        </div>
      </div>

      <div class="modal-info">
        <h2 class="modal-title">${title}</h2>
        <p class="modal-category">${category}</p>
        <p class="modal-price">${price}</p>
        ${renderStars(rating)}
        ${renderColors(colors)}
        <div class="modal-description">
          ${renderDescription(description)}
        </div>
        <p class="modal-size">Розміри: ${size}</p>
        <button
          class="modal-button"
          type="button"
          data-product-id="${productId}"
        >
          Перейти до замовлення
        </button>
      </div>
    </div>
  `;

  const ratingElement = refs.modalWindow.querySelector('.modal-star-rating');

  if (!ratingElement) {
    return;
  }

  modalRatingInstance?.destroy();
  modalRatingInstance = new StarRating(ratingElement, {
    clearable: false,
    maxStars: 5,
    tooltip: false,
    stars: star => {
      star.innerHTML = starSvgMarkup;
    },
  });
}

export function clearGallery() {
  if (!refs.modalWindow) {
    return;
  }

  refs.modalWindow.innerHTML = '';
}

export function showModal() {
  refs.modal?.classList.add('is-open');
}

export function hideModal() {
  refs.modal?.classList.remove('is-open');
}
