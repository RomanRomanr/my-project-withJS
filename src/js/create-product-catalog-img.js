import { createCatalogueFurniture } from './product-catalog-render';
import { getAllFurniture } from './api-product-catalog';

const ulCataloge = document.querySelector('.furniture-catalog-list');
const btnLoadMore = document.querySelector('.btn-load-more');
const limitPerPage = 8;
let page;
let categoryID;
let totalPage;

//  Create markup for all categories
export async function loadAllCategories() {
  page = 1;
  try {
    const responce = await getAllFurniture(page);
    const markup = createCatalogueFurniture(responce.furnitures);
    ulCataloge.innerHTML = markup;
    totalPage = Math.ceil(responce.totalItems / limitPerPage);
    checkBtnStatus();
  } catch (error) {}
}

// Create markup by category
export async function loadFurnitureByCaregory(categoryID, page) {
  try {
    const responce = await getFurnitureByCategory(categoryID, page);
    const markup = createCatalogueFurniture(responce.furnitures);
    ulCataloge.innerHTML = markup;
    totalPage = Math.ceil(responce.totalItems / limitPerPage);
    checkBtnStatus();
  } catch (error) {}
}

//Pagination  categories
btnLoadMore.addEventListener('click', loadMore); //треба додати в main ? функцію loadMore експортувати

async function loadMore() {
  page += 1;
  try {
    if (!categoryID) {
      const responce = await getAllFurniture(page);
      const markup = createCatalogueFurniture(responce.furnitures);
      ulCataloge.insertAdjacentHTML('beforeend', markup);
    } else {
      const responce = await getFurnitureByCategory(categoryID, page);
      const markup = createCatalogueFurniture(responce.furnitures);
      ulCataloge.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {}
}
// Check last page
function checkBtnStatus() {
  if (page >= totalPage) {
    btnLoadMore.disabled = true;
  } else {
    btnLoadMore.disabled = false;
  }
}
