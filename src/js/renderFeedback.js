export function feedbackTemplate(item) {
  return `<li class="feedback">
          <div class="rating value-${item.rate}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-filled">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-filled">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-filled">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-filled">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-filled">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="tetx-feedback">${item.descr}</p>
          <p class="name-author">${item.name}</p>
        </li>`;
}
export function feedbacksTemplate(items) {
  return items.map(feedbackTemplate).join('');
}
