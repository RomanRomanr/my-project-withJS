import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { getListCategories, createCategories } from './js/product-filter.js';
import {
  loadAllCategories,
  loadFurnitureByCategory,
} from './js/create-product-catalog-img.js';
import {
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
import { modalGallery, showModal } from './js/product-modal-render-functions';
import { closeOverlay } from './js/product-modal-evente';
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

document.addEventListener('click', async event => {
  const buttonCatalog = event.target.closest('.furniture-catalog-btn');
  if (!buttonCatalog) return;

  showModal();

  const btnId = buttonCatalog.dataset.imgid;
  showLoader();
  try {
    const product = await getFurnitureById(btnId);
    modalGallery(product);
  } catch (error) {
    ShowMessageError(message);
  } finally {
    hideLoader();
  }
});
document.addEventListener('click', closeOverlay);
