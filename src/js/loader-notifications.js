const Loader = (() => {
  const loaderEl = document.getElementById('loader');
  return {
    show: () => loaderEl.style.display = 'flex',
    hide: () => loaderEl.style.display = 'none'
  };
})();


const Notifications = (() => {
  const container = document.getElementById('notifications');

  function create(message, type = 'info', duration = 3000) {
    const note = document.createElement('div');
    note.className = 'notification';
    note.textContent = message;

    if (type === 'success') note.style.background = '#2ecc71';
    if (type === 'error') note.style.background = '#e74c3c';
    if (type === 'warning') note.style.background = '#f39c12';

    container.appendChild(note);

    setTimeout(() => note.classList.add('show'), 50);
    setTimeout(() => {
      note.classList.remove('show');
      setTimeout(() => container.removeChild(note), 400);
    }, duration);
  }

  return { create };
})();
 

