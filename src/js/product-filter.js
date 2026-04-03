// отримання категорій з API
import axios from "axios";

export async function getListCategories() {
  const response = await axios.get("https://furniture-store-v2.b.goit.study/api/categories");

  return response.data;
}


// створення категорій на сторінці
const categoriesContainer = document.querySelector(".list-categories");

export function createCategories(categories) {
  const markup = categories
    .map(
      (category) => `
      <li class="list-categories-item" data-category-id="${category._id}">
              <p class="list-categories-name">${category.name}</p>
            </li>
      `
    )
    .join("");

  categoriesContainer.innerHTML = markup;
}




