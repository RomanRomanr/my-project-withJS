import axios from 'axios';
import 'css-star-rating/css/star-rating.css';

const serverApi = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api',
});

export const getFeedbacks = async () => {
  const res = await serverApi.get('/feedbacks', {
    params: {
      page: 1,
      limit: 10
    }
  });
  return res.data.feedbacks;
};

//Мій код з main.js

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
//   showLoader();
//   try {
//     const resApi = await getFeedbacks();
//     const markup = feedbacksTemplate(resApi);
//     refs.listElems.innerHTML = markup;
//     const swiper = new Swiper('.swiper', {
//       // configure Swiper to use modules
//       modules: [Navigation, Pagination],
//       slidesPerView: 1,
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 24,
//         },
//         1440: {
//           slidesPerView: 3,
//           spaceBetween: 24,
//         },
//       },
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
//     ShowMessageError(message);
//   } finally {
//     hideLoader();
//   }
// });
