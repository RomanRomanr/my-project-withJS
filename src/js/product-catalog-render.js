function itemTemplate(item) {
  const { images, name, price, color } = item;
  return ` <li class="furniture-catalog-items">
          <img class="furniture-catalog-img" src="${images[0]}" alt="${name}" width="500px" />
          <h2>${name}</h2>
          <ul class='color-list'>
            ${color.map(c => `<li class='color-items' style="background-color: ${c};"></li>`).join('')}
          </ul>
          <p>${price} грн</p>
          <button class="btn-furniture-catalog" type="button">детальніше</button>
        </li>
        `;
}

function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}
