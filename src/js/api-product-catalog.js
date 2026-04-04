import axios from 'axios';

// Fetch all catalog from API
export async function getAllFurniture(page) {
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

// Fetch catalog by category from API

async function getFurnitureByCategory(category, page) {
  const response = await axios(
    'https://furniture-store-v2.b.goit.study/api/furnitures',
    {
      params: {
        category: categoryID,
        page: page,
        limit: 8,
      },
    }
  );
  return response.data;
}
