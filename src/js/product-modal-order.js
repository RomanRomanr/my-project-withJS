const form = document.querySelector('.modal-order-form');
const button = document.querySelector('.modal-order-submit-btn');

form.addEventListener('input', () => {
  button.disabled = !form.checkValidity();
});
