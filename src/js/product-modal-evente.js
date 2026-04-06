import 'css-star-rating/css/star-rating.css';

import { hideModal } from './product-modal-render-functions';

export let selectedColor;

export function closeOverlay(event) {
  const closeButton = event.target.closest('.modal-close');
  const overlay = event.target.classList.contains('modal-overlay');

  if (closeButton || overlay) {
    hideModal();
    return;
  }

  const colorOption = event.target.closest('[data-color-option]');

  if (colorOption) {
    const colorOptions = document.querySelectorAll('[data-color-option]');

    colorOptions.forEach(option => {
      option.classList.remove('modal-color--selected');
      option.setAttribute('aria-pressed', 'false');
    });

    colorOption.classList.add('modal-color--selected');
    colorOption.setAttribute('aria-pressed', 'true');
    return;
  }

  const orderButton = event.target.closest('.modal-button');

  if (orderButton) {
    const { productId } = orderButton.dataset;
    const selectedColorButton = document.querySelector(
      '.modal-color--selected'
    );
    selectedColor = selectedColorButton?.dataset.colorValue ?? null;
    const dataColorId = {
      productId,
      color: selectedColor,
    };

    if (productId) {
      hideModal();
      document.dispatchEvent(
        new CustomEvent('product-order-click', {
          detail: dataColorId,
        })
      );
      console.log(dataColorId);
    }

    return;
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});
