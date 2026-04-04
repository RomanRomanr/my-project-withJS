import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: `${message}`,
  });
}

export function showSuccessMessage(message) {
  iziToast.success({
    title: 'OK',
    message: `${message}`,
  });
}

const loader = document.querySelector('#js-loader');

export function showLoader() {
  if (!loader) return;
  loader.classList.add('loader');
}

export function hideLoader() {
  if (!loader) return;
  loader.classList.remove('loader');
}
// https://cssloaders.github.io/ (встановити html та css з прикладів та додати ID на елемент)
