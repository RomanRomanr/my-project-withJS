import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


new Accordion(".accordion-container", {
  duration: 400,
  
  onOpen: (el) => {
    const icon = el.querySelector(".faq-icon");
    icon.innerHTML = `<svg width="32" height="32">
      <use href="/img/icons.svg#icon-chevron-up"></use>
    </svg>`;
  },

  onClose: (el) => {
    const icon = el.querySelector(".faq-icon");
    icon.innerHTML = `<svg width="32" height="32">
      <use href="/img/icons.svg#icon-chevron-down"></use>
    </svg>`;
  }
});