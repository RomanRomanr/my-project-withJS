
import { getFurnitureByCategory } from './api-product-catalog';
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
  categoryID = null;
  try {
    const responce = await getAllFurniture(page);
    const markup = createCatalogueFurniture(responce.furnitures);
    ulCataloge.innerHTML = markup;
    totalPage = Math.ceil(responce.totalItems / limitPerPage);
    checkBtnStatus();
  } catch (error) {}
}

// Create markup by category
export async function loadFurnitureByCategory(id) {
  page = 1;
  categoryID = id;
  try {
    const responce = await getFurnitureByCategory(categoryID, page);
    const markup = createCatalogueFurniture(responce.furnitures);
    ulCataloge.innerHTML = markup;
    totalPage = Math.ceil(responce.totalItems / limitPerPage);
    checkBtnStatus();
  } catch (error) {}
}

//Pagination  categories
if (btnLoadMore) {
  btnLoadMore.addEventListener('click', loadMore);
}

export async function loadMore() {
  checkBtnStatus();
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
export function checkBtnStatus() {
  if (page >= totalPage) {
    btnLoadMore.disabled = true;
  } else {
    btnLoadMore.disabled = false;
  }
}
