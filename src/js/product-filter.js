// отримання категорій з API
import axios from "axios";

const BASE_URL = "https://furniture-store-v2.b.goit.study/api";

export async function getListCategories() {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
}

// створення категорій на сторінці
export function createCategories(categories) {
  const container = document.querySelector(".list-categories");
  if (!container) return;

  const markup = categories
    .map(
      ({ _id, name }) => `
        <li class="list-categories-item" data-category-id="${_id}">
          <p class="list-categories-name">${name}</p>
        </li>
      `
    )
    .join("");

  container.innerHTML = markup;
}




