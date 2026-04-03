(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
    document.body.classList.add('menu-open');
    if (refs.modal.classList.contains('is-open')) {
      refs.openModalBtn.style.display = 'none';
    } else {
      refs.openModalBtn.style.display = 'flex';
    }
  }

  document.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  document.addEventListener('click', e => {
    // якщо меню відкрите і клік НЕ всередині контейнера меню
    if (
      refs.modal.classList.contains('is-open') &&
      !e.target.closest('.mobile-menu-container') &&
      !e.target.closest('[data-menu-open]')
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    refs.modal.classList.remove('is-open');
    refs.openModalBtn.style.display = 'flex';
    document.body.classList.remove('menu-open');
  }
})();
