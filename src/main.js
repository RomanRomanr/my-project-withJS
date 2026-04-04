import { getFeedbacks } from './js/feedbackApi';
import { feedbacksTemplate } from './js/renderFeedback';

const listElems = document.querySelector('.list-feedbacks');

document.addEventListener('DOMContentLoaded', async () => {
  const resApi = await getFeedbacks();
  console.log(resApi);
  
  const markup = feedbacksTemplate(resApi);
  listElems.innerHTML = markup;
});
