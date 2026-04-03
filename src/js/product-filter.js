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




// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import { getListCategories, createCategories } from "./js/product-filter.js";
// // import { getFurnitureByCategory } from "./js/api-product-catalog.js";
// // import { loadAllCategories } from "./js/create-product-catalog-img.js";


// document.addEventListener("DOMContentLoaded", async event => { 
//     try { 
//     const categories = await getListCategories();
//     const updatedCategories = [
//   {
//     _id: "all",
//     name: "Всі товари",
//   },
//   ...categories
// ];
//         createCategories(updatedCategories);
//         // await loadAllCategories();
//  const firstItem = document.querySelector(".list-categories-item");
// if (firstItem) {
//   firstItem.classList.add("active-item-category");
//   }
        
//     } catch (error) {
//         iziToast.error({
//         message: "Sorry, помилка при завантаженні категорій. Please try again!",
//         position: "topRight",
//       });
//         console.error("Помилка при завантаженні категорій:", error);
//     }
//     });





// const categoriesContainer = document.querySelector(".list-categories");

// categoriesContainer.addEventListener("click", async (event) => {
  
//   const categoryItem = event.target.closest(".list-categories-item");
//   if (!categoryItem) return;

//   const items = document.querySelectorAll(".list-categories-item");
//   items.forEach(item => item.classList.remove("active-item-category"));
//   categoryItem.classList.add("active-item-category");

//   const categoryId = categoryItem.dataset.categoryId;
//     try {
//         if (categoryId === "all") {
//             // await loadAllCategories();
//             console.log("Показати всі товари");
//         } else {
//             // await getFurnitureByCategory(categoryId, page = 1);
//             console.log(`Показати товари категорії: ${categoryId}`);
//         }
//     } catch (error) { 
//         iziToast.error({
//         message: "Sorry, помилка при завантаженні товарів за категорією. Please try again!",
//         position: "topRight",
//       });
//         console.error("Помилка при завантаженні товарів за категорією:", error);
//     }
    
// });
