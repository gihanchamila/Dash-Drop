import { cart, updateDeliveryOption, removeFromCart, updateCartQuantity } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { products, getProduct } from "../../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliverOption } from "../../data/deliveryOption.js";

console.log("Hi")

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliverOption(productId);
/*
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );
    console.log(productId)
*/

    cartSummaryHTML += `

    <div class="product-items-${matchingProduct.id}">
        <i class="fa-sharp fa-solid fa-xmark"></i>
        <div class="product-image">
            <img src="${matchingProduct.image}" alt="" class="product-image">
        </div>
        <div class="product-name">
            <h3>${matchingProduct.name}</h3>
            <div class="product-price">${matchingProduct.price}</div>
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
                <div>
                    <input type="radio" id="1">
                    <label for="free-shipping delivery-date">wednesday, March 20</label>                                 
                    <span class="shipping-cost delivery-date"> | Free - Shipping</span> 
                </div>
                <div>
                    <input type="radio" id="2">
                    <label for="free-shipping delivery-date">Thursday, March 05</label>                        
                    <span class="shipping-cost delivery-date"> | $9.99 - Shipping</span>
                </div>
                <div>
                    <input type="radio" checked id="3">
                    <label for="free-shipping delivery-date">Thursday, February 27</label>
                    <span class="shipping-cost delivery-date"> | $19.99 - Shipping</span>
                </div> 
            </form>
        </div>
    </div>


`
console.log(cartSummaryHTML)
});


