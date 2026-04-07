import axios from 'axios';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { getListCategories, createCategories } from './js/product-filter.js';
import {
  loadAllCategories,
  loadFurnitureByCategory,
} from './js/create-product-catalog-img.js';
import {
  ShowMessageInfo,
  ShowMessageError,
  showLoader,
  hideLoader,
} from './js/loader-notifications';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Описаний у документації
import { getFeedbacks } from './js/feedbackApi';
import { feedbacksTemplate } from './js/renderFeedback';

// import 'star-rating.js/css';
import { getFurnitureById } from './js/furniture-api';
import {
  modalGallery,
  showModal,
  hideModal,
} from './js/product-modal-render-functions';
import { closeOverlay, selectedColor } from './js/product-modal-evente';
export let firstFurnitureId;

document.addEventListener('DOMContentLoaded', async () => {
  const categoriesContainer = document.querySelector('.list-categories');

  try {
    // Завантажуємо категорії з API
    const categories = await getListCategories();
    const updatedCategories = [
      { _id: 'all', name: 'Всі товари' },
      ...categories,
    ];

    createCategories(updatedCategories);
    await loadAllCategories();

    const firstItem = document.querySelector('.list-categories-item');
    if (firstItem) firstItem.classList.add('active-item-category');
  } catch (error) {
    ShowMessageError();
  }

  if (categoriesContainer) {
    categoriesContainer.addEventListener('click', async event => {
      const categoryItem = event.target.closest('.list-categories-item');
      if (!categoryItem) return;

      categoriesContainer
        .querySelectorAll('.list-categories-item')
        .forEach(item => item.classList.remove('active-item-category'));

      categoryItem.classList.add('active-item-category');

      const categoryId = categoryItem.dataset.categoryId;

      try {
        showLoader();

        if (categoryId === 'all') {
          await loadAllCategories();
        } else {
          await loadFurnitureByCategory(categoryId);
        }
      } catch (error) {
        ShowMessageError();
      } finally {
        hideLoader();
      }
    });
  }
});
// btnLoadMore.addEventListener('click', loadMore);

// header JS block
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  document.addEventListener('keydown', handleKeyDown);

  document.addEventListener('click', e => {
    if (
      refs.modal.classList.contains('is-open') &&
      !e.target.closest('.mobile-menu-container') &&
      !e.target.closest('[data-menu-open]')
    ) {
      closeMenu();
    }
  });

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  function closeMenu() {
    refs.modal.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
});

// for feedback (testimonial)
// !====================================================!

const refs = {
  pagination: document.querySelector('.pagination'),
  listElems: document.querySelector('.list-feedbacks'),
};

document.addEventListener('DOMContentLoaded', async () => {
  showLoader();
  try {
    const resApi = await getFeedbacks();
    const markup = feedbacksTemplate(resApi);
    refs.listElems.innerHTML = markup;
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } catch (error) {
    ShowMessageError(message);
  } finally {
    hideLoader();
  }
});

// for FAQ
// !====================================================!

new Accordion('.accordion-container', {
  duration: 400,

  onOpen: el => {
    const icon = el.querySelector('.faq-icon');
    icon.innerHTML = `<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-up"></use>
    </svg>`;
  },

  onClose: el => {
    const icon = el.querySelector('.faq-icon');
    icon.innerHTML = `<svg width="32" height="32">
      <use href="../img/icons.svg#icon-chevron-down"></use>
    </svg>`;
  },
});

// for product modal
// !====================================================!
// відкриття модального вікна

let color;
let itemId;
document.addEventListener('click', async event => {
  const buttonCatalog = event.target.closest('.furniture-catalog-btn');
  if (!buttonCatalog) return;

  showModal();

  const btnId = buttonCatalog.dataset.imgid;
  showLoader();
  try {
    const product = await getFurnitureById(btnId);
    modalGallery(product);
    document.body.classList.add('modal--order-open');
    color = product.color;
    itemId = product._id;
  } catch (error) {
    ShowMessageError(message);
  } finally {
    hideLoader();
  }
});
document.addEventListener('click', closeOverlay);

// !=================================================

const modal = document.querySelector('[data-order]');
(() => {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('.modal-button');
    const closeBtn = event.target.closest('[data-order-close]');
    const isBackdropClick = event.target === modal;

    // відкриття
    if (openBtn) {
      hideModal();
      modal.classList.add('is-open');
      document.body.classList.add('modal--order-open');

      return;
    }

    // закриття
    if (closeBtn || isBackdropClick) {
      closeModal();
    }
  });

  // ESC
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();

function closeModal() {
  modal.classList.remove('is-open');
  document.body.classList.remove('modal--order-open');
}

// блокування сабміту при невалідній формі
const form = document.querySelector('.modal-order-form');
const button = document.querySelector('.modal-order-submit-btn');

form.addEventListener('input', () => {
  button.disabled = !form.checkValidity();
});

// запит POST /orders
form.addEventListener('submit', async e => {
  e.preventDefault();
  const { userName, phone, comment } = e.target.elements;
  const textarea = comment.value || 'Без коментарів';

  const formData = {
    name: userName.value,
    phone: phone.value,
    modelId: itemId,
    color: selectedColor,
    comment: textarea,
  };
  try {
    const response = await axios.post(
      'https://furniture-store-v2.b.goit.study/api/orders',
      formData
    );
    const orderData = response.data;
    const message = `Вітаю ${orderData.name}, Ви замовили ${orderData.model}, колір ${orderData.color}. Номер Вашого замовлення - ${orderData.orderNum}. Найближчим часом з Вами зв'яжеться наш менеджер для підтвердження замовлення. Дякуємо що обрали нас!`;
    ShowMessageInfo(message);
    e.target.reset();
    closeModal();
  } catch (error) {
    ShowMessageError(error.message);
  }
});
