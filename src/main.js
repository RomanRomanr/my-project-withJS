// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
// import { getFeedbacks } from './js/feedbackApi';
// import { feedbacksTemplate } from './js/renderFeedback';

// const refs = {
//   pagination: document.querySelector('.pagination'),
//   listElems: document.querySelector('.list-feedbacks'),
// };

// document.addEventListener('DOMContentLoaded', async () => {
//   try {
//     const resApi = await getFeedbacks();
//     console.log(resApi);
//     const markup = feedbacksTemplate(resApi);
//     refs.listElems.innerHTML = markup;

//     const swiper = new Swiper('.swiper', {
//       // configure Swiper to use modules
//       modules: [Navigation, Pagination],
//       slidesPerView: 1,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   } catch (error) {
//     iziToast.error({
//       title: 'Error',
//       message: `Opssss, ${error}`,
//     });
//   }
// });

////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
////dsdsdsds
// import { getListCategories, createCategories } from '/js/product-filter';
// import { createCatalogueFurniture } from '/js/product-catalog-render';
// import {
//   getAllFurniture,
//   getFurnitureByCategory,
// } from '/js/api-product-catalog';
// import {
//   loadAllCategories,
//   loadFurnitureByCaregory,
//   loadMore,
//   checkBtnStatus,
// } from '/js/create-product-catalog-img';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const btnLoadMore = document.querySelector('.btn-load-more');

// // Завантаження категорій при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', async event => {
//   try {
//     const categories = await getListCategories();
//     const updatedCategories = [
//       {
//         _id: 'all',
//         name: 'Всі товари',
//       },
//       ...categories,
//     ];
//     createCategories(updatedCategories);
//     await loadAllCategories();
//     const firstItem = document.querySelector('.list-categories-item');
//     if (firstItem) {
//       firstItem.classList.add('active-item-category');
//     }
//   } catch (error) {
//     iziToast.error({
//       message: 'Sorry, помилка при завантаженні категорій. Please try again!',
//       position: 'topRight',
//     });
//     console.error('Помилка при завантаженні категорій:', error);
//   }
// });

// // Додавання обробника подій для категорій
// const categoriesContainer = document.querySelector('.list-categories');

// let categoryId;

// categoriesContainer.addEventListener('click', async event => {
//   const categoryItem = event.target.closest('.list-categories-item');
//   if (!categoryItem) return;

//   const items = document.querySelectorAll('.list-categories-item');
//   items.forEach(item => item.classList.remove('active-item-category'));
//   categoryItem.classList.add('active-item-category');

//   const categoryId = categoryItem.dataset.categoryId;
//   try {
//     if (categoryId === 'all') {
//       await loadAllCategories();
//       console.log('Показати всі товари');
//     } else {
//       await loadFurnitureByCaregory(categoryId);
//       console.log(`Показати товари категорії: ${categoryId}`);
//     }
//   } catch (error) {
//     iziToast.error({
//       message:
//         'Sorry, помилка при завантаженні товарів за категорією. Please try again!',
//       position: 'topRight',
//     });
//     console.error('Помилка при завантаженні товарів за категорією:', error);
//   }
//   return categoryId;
// });

// btnLoadMore.addEventListener('click', loadMore);
