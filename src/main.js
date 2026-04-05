import { getListCategories, createCategories } from './js/product-filter.js';
import {
  loadAllCategories,
  loadFurnitureByCategory,
} from './js/create-product-catalog-img.js';
import {
  ShowMessageError,
  ShowMessageInfo,
  showLoader,
  hideLoader,
} from './js/loader-notifications';

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
