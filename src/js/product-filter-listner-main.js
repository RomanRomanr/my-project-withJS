
// import { getListCategories, createCategories } from "./js/product-filter.js";
//  import { loadFurnitureByCategory, loadAllCategories } from "./js/create-product-catalog-img.js";

// // Завантаження категорій при завантаженні сторінки
// document.addEventListener("DOMContentLoaded", async event => { 
//     try { 
//         showLoader();
//         const categories = await getListCategories();
//         const updatedCategories = [
//         {
//         _id: "all",
//         name: "Всі товари",
//         },
//         ...categories
//         ];
//         createCategories(updatedCategories);
//         await loadAllCategories();
//         const firstItem = document.querySelector(".list-categories-item");
//          if (firstItem) {
//         firstItem.classList.add("active-item-category");
//         }  
//     } catch (error) {
//         ShowMessageError();
//     }
//     finally {
//         hideLoader();
//     }
// });




// // Додавання обробника подій для категорій
// const categoriesContainer = document.querySelector(".list-categories");

// categoriesContainer.addEventListener("click", async (event) => {
//   const categoryItem = event.target.closest(".list-categories-item");
//   if (!categoryItem) return;

//   const items = document.querySelectorAll(".list-categories-item");
//   items.forEach(item => item.classList.remove("active-item-category"));
//   categoryItem.classList.add("active-item-category");

//   const categoryId = categoryItem.dataset.categoryId;
//     try {
//       showLoader();
//         if (categoryId === "all") {
//             await loadAllCategories();
//         } else {
//             await loadFurnitureByCategory(categoryId);
//         }
//     } catch (error) { 
//         ShowMessageError();
//     }
//     finally {
//         hideLoader();
//     }
// });
