import axios from 'axios';

const BASE_URL = 'https://furniture-store-v2.b.goit.study/api/furnitures';
const limit = 8;

// Fetch all catalog from API
export async function getAllFurniture(page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      page,
      limit: limit,
    },
  });

  return response.data;
}

// Fetch catalog by category from API
export async function getFurnitureByCategory(categoryID, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      category: categoryID,
      page,
      limit: limit,
    },
  });

  return response.data;
}