export function createCatalogueFurniture(items) {
  function itemTemplate(item) {
    const { images, name, price, color, _id } = item;
    return ` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${images[0]}" alt="${name}" width="500px" />
          <h2 class="furniture-catalog-title">${name}</h2>
          <ul class='color-list'>
            ${color.map(c => `<li class='color-items' style="background-color: ${c};"></li>`).join('')}
          </ul>
          <p class="furniture-catalog-price">${price} грн</p>
          <button class="furniture-catalog-btn" type="button" data-imgid='${_id}'>детальніше</button>
        </li>
        `;
  }

  return items.map(itemTemplate).join('');
}
