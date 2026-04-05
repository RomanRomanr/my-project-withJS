(() => {
  const refs = {
    // Додати атрибут data-order-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-order-open]'),
    // Додати атрибут data-order-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-order-close]'),
    // Додати атрибут data-order на бекдроп модалки
    modal: document.querySelector('[data-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
    // відміна скролу при відкритті модалки
    document.body.classList.add('modal--order-open');
  }
  // закриття модалки кнопкою esc
  document.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  // закриття модалки при кліку за межами модалки
  document.addEventListener('click', e => {
    // якщо меню відкрите і клік НЕ всередині контейнера меню
    if (
      refs.modal.classList.contains('is-open') &&
      !e.target.closest('.mobile-order-container') &&
      !e.target.closest('[data-order-open]')
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    refs.modal.classList.remove('is-open');
    document.body.classList.remove('modal--order-open');
  }
})();

// блокування сабміту при невалідній формі
const form = document.querySelector('.modal-order-form');
const button = document.querySelector('.modal-order-submit-btn');

form.addEventListener('input', () => {
  button.disabled = !form.checkValidity();
});
