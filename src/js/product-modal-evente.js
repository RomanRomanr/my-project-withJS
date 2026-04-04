import { getFurnitureById } from './furniture-api';
import { hideModal, modalGallery, showModal } from './product-modal-render-functions';

document.addEventListener('click', async event => {
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

    if (productId) {
      hideModal();
      document.dispatchEvent(
        new CustomEvent('product-order-click', {
          detail: { productId },
        })
          
      );
        console.log(productId);
    }

      return;
//   як отримати id  в іншому місці
//   document.addEventListener('product-order-click', event => {
//   console.log(event.detail.productId);
// });
     
  }

  const productTrigger = event.target.closest('[data-product-id]');

  if (!productTrigger) {
    return;
  }

  const { productId } = productTrigger.dataset;

  if (!productId) {
    return;
  }

  try {
    const product = await getFurnitureById(productId);
    modalGallery(product);
    showModal();
  } catch (error) {
    console.error('Не вдалося завантажити товар для модалки:', error);
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});
