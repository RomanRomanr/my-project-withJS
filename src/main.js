import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getListCategories, createCategories } from "./js/product-filter.js";
import { loadAllCategories, loadFurnitureByCategory } from "./js/create-product-catalog-img.js";

function showLoader() {
  console.log("loading...");
}

function hideLoader() {
  console.log("done");
}

function showError(msg) {
  iziToast.error({ message: msg });
}

document.addEventListener("DOMContentLoaded", async () => {
  const categoriesContainer = document.querySelector(".list-categories");

  try {
    // Завантажуємо категорії з API
    const categories = await getListCategories();
    const updatedCategories = [
      { _id: "all", name: "Всі товари" },
      ...categories,
    ];

    createCategories(updatedCategories);
    await loadAllCategories(); // Перший рендер всіх товарів

    // Активна перша категорія
    const firstItem = document.querySelector(".list-categories-item");
    if (firstItem) firstItem.classList.add("active-item-category");

  } catch (error) {
    showError("Помилка при завантаженні категорій");
    console.error("Помилка:", error);
  }

  // Клік по категорії
  if (categoriesContainer) {
    categoriesContainer.addEventListener("click", async (event) => {
      const categoryItem = event.target.closest(".list-categories-item");
      if (!categoryItem) return;

      // Знімаємо активність з інших категорій
      categoriesContainer
        .querySelectorAll(".list-categories-item")
        .forEach(item => item.classList.remove("active-item-category"));

      categoryItem.classList.add("active-item-category");

      const categoryId = categoryItem.dataset.categoryId;

      try {
        showLoader();

        if (categoryId === "all") {
          await loadAllCategories();
        } else {
          await loadFurnitureByCategory(categoryId);
        }

      } catch (error) {
        showError("Помилка при завантаженні товарів");
      } finally {
        hideLoader();
      }
    });
  }
});