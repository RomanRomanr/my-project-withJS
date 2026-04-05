import { createCatalogueFurniture } from './product-catalog-render';
import { getAllFurniture, getFurnitureByCategory } from './api-product-catalog';

const ulCataloge = document.querySelector('.furniture-catalog-list');
const btnLoadMore = document.querySelector('.btn-load-more');

let page = 1;
let categoryID = null;
let totalPage = 0;
const limitPerPage = 8;

async function loadCategory(id = null) {
  page = 1;
  categoryID = id;

  let res;
  if (!categoryID) {
    res = await getAllFurniture(page);
  } else {
    res = await getFurnitureByCategory(categoryID, page);
  }

  ulCataloge.innerHTML = createCatalogueFurniture(res.furnitures);
  totalPage = Math.ceil(res.totalItems / limitPerPage);
  checkBtnStatus();
}

btnLoadMore.addEventListener('click', async () => {
  page += 1;

  let res;
  if (!categoryID) {
    res = await getAllFurniture(page);
  } else {
    res = await getFurnitureByCategory(categoryID, page);
  }

  ulCataloge.insertAdjacentHTML('beforeend', createCatalogueFurniture(res.furnitures));
  checkBtnStatus();
});

export function checkBtnStatus() {
  if (totalPage <= 1) {
    btnLoadMore.style.display = "none"; 
  } else if (page >= totalPage) {
    btnLoadMore.disabled = true;
    btnLoadMore.style.display = "none"; 
  } else {
    btnLoadMore.disabled = false;
    btnLoadMore.style.display = "block";
  }
}

export async function loadAllCategories() {
  await loadCategory(null);
}

export async function loadFurnitureByCategory(id) {
  await loadCategory(id);
}