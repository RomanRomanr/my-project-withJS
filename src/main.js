
import { getListCategories, createCategories } from "/js/product-filter";
import { createCatalogueFurniture } from "/js/product-catalog-render";
import { getAllFurniture, getFurnitureByCategory } from '/js/api-product-catalog';
import { loadAllCategories, loadFurnitureByCaregory, loadMore, checkBtnStatus } from '/js/create-product-catalog-img';
import { ShowMessageError, ShowMessageInfo, showLoader, hideLoader} from "./js/loader-notifications";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const btnLoadMore = document.querySelector('.btn-load-more');


// Завантаження категорій при завантаженні сторінки
document.addEventListener("DOMContentLoaded", async event => { 
    try { 
    const categories = await getListCategories();
    const updatedCategories = [
  {
    _id: "all",
    name: "Всі товари",
  },
  ...categories
];
        createCategories(updatedCategories);
        await loadAllCategories();
 const firstItem = document.querySelector(".list-categories-item");
if (firstItem) {
  firstItem.classList.add("active-item-category");
  }
        
    } catch (error) {
        iziToast.error({
        message: "Sorry, помилка при завантаженні категорій. Please try again!",
        position: "topRight",
      });
        console.error("Помилка при завантаженні категорій:", error);
    }
    });




// Додавання обробника подій для категорій
const categoriesContainer = document.querySelector(".list-categories");

let categoryId;

categoriesContainer.addEventListener("click", async (event) => {
  
  const categoryItem = event.target.closest(".list-categories-item");
  if (!categoryItem) return;

  const items = document.querySelectorAll(".list-categories-item");
  items.forEach(item => item.classList.remove("active-item-category"));
  categoryItem.classList.add("active-item-category");

  const categoryId = categoryItem.dataset.categoryId;
    try {
        if (categoryId === "all") {
            await loadAllCategories();
            console.log("Показати всі товари");
            
        } else {
            await loadFurnitureByCaregory(categoryId);
            console.log(`Показати товари категорії: ${categoryId}`);
            
        }
      
    } catch (error) { 
        iziToast.error({
        message: "Sorry, помилка при завантаженні товарів за категорією. Please try again!",
        position: "topRight",
      });
        console.error("Помилка при завантаженні товарів за категорією:", error);
    }
    return categoryId;
});








btnLoadMore.addEventListener('click', loadMore);






// header JS block 
// =====================================================


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
    document.body.classList.remove('menu-open');
  }
})();