function getRating(rate) {
  const roundRate = Math.round(rate * 2) / 2;
  const baseRate = Math.floor(roundRate);
  const halfRate = roundRate % 1 != 0 ? 'half' : '';

  return { baseRate, halfRate };
}

export function feedbackTemplate(item) {
  const { baseRate, halfRate } = getRating(item.rate);
  return `<li class="swiper-slide feedback">
          <div class="rating rating-fb star-svg value-${baseRate} ${halfRate}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use             
                    href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use 
                    href="/img/icons.svg#icon-star-filled"
                  ></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star"
                  ></use>
                </svg>
                <svg class="star-half" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-half"
                  ></use>
                </svg>
                <svg class="star-filled" width="20" height="20">
                  <use
                    href="/img/icons.svg#icon-star-filled"
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
