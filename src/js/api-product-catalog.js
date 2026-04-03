import axios from 'axios';
import iziToast from 'izitoast';
import { createCatalogueFurniture } from './product-catalog-render';

const ulCataloge = document.querySelector('.furniture-catalog-list');

let page = 1;

// Fetch all catalog from API
async function getAllFurniture(page) {
  const apiResponse = await axios.get(
    'https://furniture-store-v2.b.goit.study/api/furnitures',
    {
      params: {
        page: page,
        limit: 8,
      },
    }
  );
  return apiResponse.data;
}

export async function handleLoadCategory() {
  try {
    const responce = await getAllFurniture(page);
    const markup = createCatalogueFurniture(responce.furnitures);
    ulCataloge.innerHTML = markup;
  } catch (error) {
    iziToast.show();
  }
}

// Fetch catalog by category from API

async function getFurnitureByCategory(category, page) {
  const response = await axios(
    'https://furniture-store-v2.b.goit.study/api/furnitures',
    {
      params: {
        category: category,
        page: page,
        limit: 8,
      },
    }
  );
  return response.data;
}
