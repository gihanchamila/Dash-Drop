import { cart, updateCartQuantity } from "../../data/cart.js";
import { getDeliverOption } from "../../data/deliveryOption.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary(){

let productPriceCents = 0;
let shippingPriceCents = 0;

cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId)
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliverOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
});

const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
const taxCents = totalBeforeTaxCents * 0.1;
const totalCents = totalBeforeTaxCents + taxCents;

const paymentSummaryHTML = `
                            <h3 class="order-now-title">Order summary</h3>
                            <div>
                                <div class="payment-summary-row">
                                    <div>Items(${updateCartQuantity()})</div>
                                    <div class="payment-summary-money">${formatCurrency(productPriceCents)}</div>
                                </div>
                                <div class="payment-summary-row">
                                    <div>Shipping and handling</div>
                                    <div class="payment-summary-money">${formatCurrency(shippingPriceCents)}</div>
                                </div>
                                <div class="payment-summary-row">
                                    <div>Total before tax</div>
                                    <div class="payment-summary-money">${formatCurrency(totalBeforeTaxCents)}</div>
                                </div>
                                <div class="payment-summary-row css-payment-summary-money">
                                    <div>Estimeted tax(10%)</div>
                                    <div class="payment-summary-money css-payment-summary-money">${formatCurrency(taxCents)}</div>
                                </div>
                                <div class="payment-summary-row order-now">
                                    <div >Order Total</div>
                                    <div class="payment-summary-money">${formatCurrency(totalCents)}</div>
                                </div>
                                <button class="payment-summary-button">Buy Now</button>
                            </div>

`

document.querySelector('.order-summary-container').innerHTML = paymentSummaryHTML;
console.log(paymentSummaryHTML)

}

