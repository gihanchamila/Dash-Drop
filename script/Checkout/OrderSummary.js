import { cart, updateDeliveryOption, removeFromCart, updateCartQuantity, countCart, removeAllFromCart, saveToStorage, updateQuantity } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { products, getProduct } from "../../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliverOption } from "../../data/deliveryOption.js";
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary(){
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
      const productId = cartItem.productId;
      const matchingProduct = getProduct(productId);
  
      if (matchingProduct) { 
        cartSummaryHTML += `
        <div class="product-items product-items-${matchingProduct.id}">
          <i class="fa-sharp fa-solid fa-xmark" data-product-id="${matchingProduct.id}"></i>
          <div class="product-image">
              <img src="${matchingProduct.image}" alt="" class="product-image">
          </div>
          <div class="product-name">
              <h3>${matchingProduct.name}</h3>
              <div class="product-price">US $${formatCurrency(matchingProduct.priceCents)}</div>
              <div class="product-quantity-container">
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                <div>
                  <span class="product-quantity-span js-update-link" data-product-id="${matchingProduct.id}">Update</span>
                  <span class="product-quantity-span save-quantity-link js-save-link" data-product-id="${matchingProduct.id}">Save</span>
                </div>
              </div>
          </div>
          <div class="delivery-option">
              <h3 class="delivery-option-name">Choose delivery option</h3>
              <form action="">
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
              </form>
          </div>
          
      </div>
  
        `;
    } else {
        console.error(`Product with ID ${productId} not found.`);
      
    }
  });
  document.querySelector('.product-container').innerHTML = cartSummaryHTML;
  
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
  
  
  document.querySelectorAll('.fa-xmark').forEach((link) => 
  link.addEventListener('click', () => {
      const productId = link.dataset.productId
      removeFromCart(productId) 
      const container = document.querySelector(
        `.product-items-${productId}`
      );
      container.remove();
      renderPaymentSummary()
      renderOrderSummary()
    } 
  ));
  
  document.querySelectorAll('.delivery-option-container').forEach((option) => {
    option.addEventListener('click', () => {
      const productId = option.dataset.productId; 
      const deliveryOptionId = option.dataset.deliveryOptionId;
      updateDeliveryOption(productId, deliveryOptionId)
      renderOrderSummary()
      renderPaymentSummary()
    })
  })
  
  document.querySelector('.empty-cart').addEventListener('click', () => {
    localStorage.clear()
    removeAllFromCart()
    renderPaymentSummary()
    renderOrderSummary()
    saveToStorage()
  })
  
  let cartQuantityHTML = "";
  
  cartQuantityHTML += `
          <h2 class="cart-quantity">Cart(${updateCartQuantity()} Items)</h2>
  `
  document.querySelector('.cart-quantity-container').innerHTML = cartQuantityHTML
  
  document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        console.log(productId);
  
        const container = document.querySelector(
          `.product-items-${productId}`
        );
        container.classList.add('is-editing-quantity');
      });
    });
  
  document.querySelectorAll('.js-save-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      console.log(productId)
      const container = document.querySelector(
        `.product-items-${productId}`
      );
      container.classList.remove('is-editing-quantity');
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);
      updateQuantity(productId, newQuantity);
      renderPaymentSummary()
      renderOrderSummary()
    });
  });
}

