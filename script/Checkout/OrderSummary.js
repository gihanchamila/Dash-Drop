import { cart, updateDeliveryOption, removeFromCart, updateCartQuantity } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { products, getProduct } from "../../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliverOption } from "../../data/deliveryOption.js";

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);

    cartSummaryHTML += `

    <div class="product-items product-items-${matchingProduct.id}">
        <i class="fa-sharp fa-solid fa-xmark" data-product-id="${matchingProduct.id}"></i>
        <div class="product-image">
            <img src="${matchingProduct.image}" alt="" class="product-image">
        </div>
        <div class="product-name">
            <h3>${matchingProduct.name}</h3>
            <div class="product-price">US $${formatCurrency(matchingProduct.priceCents)}</div>
            <div class="product-quantity">
                <span>Quantity</span>
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
              </select>
            </div>
        </div>
        <div class="delivery-option">
            <h3 class="delivery-option-name">Choose delivery option</h3>
            <form action="">
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </form>
        </div>
    </div>
`
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = '';
  const radioGroupName = `delivery-option-${matchingProduct.id}`;

  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const priceString = deliveryOption.priceCents === 0
      ? 'FREE'
      : `$${formatCurrency(deliveryOption.priceCents)} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `

          <div class="delivery-option-container" data-product-id="${matchingProduct.id}"
              data-delivery-option-id="${deliveryOption.id}">
              <input type="radio" ${isChecked ? 'checked' : ''}
                  name="${radioGroupName}" id="${deliveryOption.id}">
              <label for="${deliveryOption.id}-shipping delivery-date">${dateString}</label>                                 
              <span class="shipping-cost delivery-date"> | ${priceString} Shipping</span> 
          </div>
    `
  })
  return html;
}

document.querySelector('.product-container').innerHTML = cartSummaryHTML;

document.querySelectorAll('.fa-xmark').forEach((link) => 
link.addEventListener('click', () => {
    const productId = link.dataset.productId
    removeFromCart(productId)

    const container = document.querySelector(
      `.product-items-${productId}`
    );
    container.remove();
  } 
));

document.querySelectorAll('.delivery-option').forEach((option) => {
  option.addEventListener('click', () => {
    const {productId, deliveryOptionId} = option.dataset
    updateDeliveryOption(productId, deliveryOptionId)
  })
})


