import axios from "axios";

export async function getListCategories() {
  const response = await axios.get("https://furniture-store-v2.b.goit.study/api/categories");

  return response.data;
}



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




// import {getListCategories, createCategories} from "./js/product-filter.js";


// document.addEventListener("DOMContentLoaded", async event => { 
//   const categories = await getListCategories();
//   const updatedCategories = [
//   {
//     _id: "all",
//     name: "Всі товари",
//   },
//   ...categories
// ];
//   createCategories(updatedCategories);
//  const firstItem = document.querySelector(".list-categories-item");
// if (firstItem) {
//   firstItem.classList.add("active-item-category");
//   }
// });




// const categoriesContainer = document.querySelector(".list-categories");

// categoriesContainer.addEventListener("click", (event) => {
  
//   const categoryItem = event.target.closest(".list-categories-item");
//   if (!categoryItem) return;

//   const items = document.querySelectorAll(".list-categories-item");
//   items.forEach(item => item.classList.remove("active-item-category"));
//   categoryItem.classList.add("active-item-category");

//   const categoryId = categoryItem.dataset.categoryId;
//   if (categoryId === "all") {
//   console.log("Показати всі товари");
// } else {
//     console.log(`Показати товари категорії: ${categoryId}`);
// }
// });
