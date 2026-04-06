import axios from 'axios';

const furnitureApi = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api',
});

export async function getFurnitures(params = {}) {
  const { data } = await furnitureApi.get('/furnitures', { params });
  return data;
}

export async function getFurnitureById(id) {
  const { data } = await furnitureApi.get(`/furnitures/${id}`);
  return data;
}

export async function getCategories() {
  const { data } = await furnitureApi.get('/categories');
  return data;
}

export async function getInitialFurnitureData() {
  const [furnitures, categories] = await Promise.all([getFurnitures(), getCategories()]);

  return {
    furnitures: furnitures.furnitures ?? [],
    categories,
  };
}
