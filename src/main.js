import { getListCategories, createCategories } from "./js/product-filter.js";
import { loadAllCategories, loadFurnitureByCategory } from "./js/create-product-catalog-img.js";
import { ShowMessageError, ShowMessageInfo, showLoader, hideLoader} from "./js/loader-notifications";


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
    await loadAllCategories();

    
    const firstItem = document.querySelector(".list-categories-item");
    if (firstItem) firstItem.classList.add("active-item-category");

  } catch (error) {
    ShowMessageError();
  }

  
  if (categoriesContainer) {
    categoriesContainer.addEventListener("click", async (event) => {
      const categoryItem = event.target.closest(".list-categories-item");
      if (!categoryItem) return;

      
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
        ShowMessageError();
      } finally {
        hideLoader();
      }
    });
  }
});