import axios from 'axios';
import 'css-star-rating/css/star-rating.css';
import { getAllFurniture } from './api-product-catalog';
import { getListCategories } from './product-filter';
const furnitureApi = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api',
});

export async function getFurnitureById(id) {
  const { data } = await furnitureApi.get(`/furnitures/${id}`);
  return data;
}

export async function getInitialFurnitureData() {
  const [furnitures, categories] = await Promise.all([
    getAllFurniture(),
    getListCategories(),
  ]);

  return {
    furnitures: furnitures.furnitures ?? [],
    categories,
  };
}
