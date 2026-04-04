import 'star-rating.js/css';
import { getCategories, getFurnitureById, getFurnitures } from './js/furniture-api';
import { modalGallery, showModal } from './js/product-modal-render-functions';

async function testFurnitureApi() {
  try {
    const [furnituresResponse, categories] = await Promise.all([
      getFurnitures(),
      getCategories(),
    ]);

    const furnitures = furnituresResponse.furnitures ?? [];

    console.log('Список товарів:', furnitures);
    console.log('Категорії:', categories);

    if (furnitures.length === 0) {
      console.log('API повернув порожній список товарів.');
      return;
    }

    const firstFurnitureId = furnitures[5]._id;
    const product = await getFurnitureById(firstFurnitureId);

    console.log('Деталі першого товару:', product);

    modalGallery(product);
    showModal();
  } catch (error) {
    console.error('Помилка перевірки API меблів:', error);
  }
}

testFurnitureApi();
