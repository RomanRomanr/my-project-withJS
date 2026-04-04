

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getListCategories, createCategories } from "./js/product-filter.js";
import { loadFurnitureByCategory, loadAllCategories } from "./js/create-product-catalog-img.js";


document.addEventListener("DOMContentLoaded", async () => { 
    try { 
    const categories = await getListCategories();
    const updatedCategories = [
  {
    _id: "all",
    name: "Всі товари",
  },
  ...categories
];
        createCategories(updatedCategories);
        await loadAllCategories();
 const firstItem = document.querySelector(".list-categories-item");
if (firstItem) {
  firstItem.classList.add("active-item-category");
  }
        
    } catch (error) {
        iziToast.error({
        message: "Sorry, помилка при завантаженні категорій. Please try again!",
        position: "topRight",
      });
        console.error("Помилка при завантаженні категорій:", error);
    }
    });


 


const categoriesContainer = document.querySelector(".list-categories");

categoriesContainer.addEventListener("click", async (event) => {
   
  
  const categoryItem = event.target.closest(".list-categories-item");
  if (!categoryItem) return;

  const items = categoriesContainer.querySelectorAll(".list-categories-item");
  items.forEach(item => item.classList.remove("active-item-category"));
  categoryItem.classList.add("active-item-category");

  const categoryId = categoryItem.dataset.categoryId;
    try {
        if (categoryId === "all") {
            await loadAllCategories();
            console.log("Показати всі товари");
        } else {
            await loadFurnitureByCategory(categoryId);
            console.log(`Показати товари категорії: ${categoryId}` );
        }
    } catch (error) { 
        iziToast.error({
        message: "Sorry, помилка при завантаженні товарів за категорією. Please try again!",
        position: "topRight",
      });
        console.error("Помилка при завантаженні товарів за категорією:", error);
    }
    
});
