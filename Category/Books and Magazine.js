import { products } from "../data/products.js";
import { categories } from "../data/products.js";
import { formatCurrency } from "../script/utils/money.js";
import { addToCart, updateCartQuantity } from "../data/cart.js";

let booksMagHTML = '';

categories.booksCategory.forEach((product) => {
    booksMagHTML += `
    <div class="product-element">
        <div class="product-content">
            <div class="product-image">
                <img src="../${product.image}" class="hover-image" alt="image">
            </div>
            <div class="product-text">
                <div class="product-name">${product.name}</div>
                <span class="product-price">$${formatCurrency(product.priceCents)}</span>
            </div>
            <label for="product-quantity-content">
                <select class="product-quantity" name="product-quantity" id="product-quantity">
                    ${[...Array(10)].map((_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
            </label>
            <button class="product-addtoCart-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
    </div>
    `;
});

document.querySelector('.product-container').innerHTML = booksMagHTML;

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function getProduct(productId) {
    return products.find(product => product.id === productId);
}

const matchingProduct = getProduct(productId);

if (matchingProduct) {
    const productDetailsContainer = document.getElementById('productDetailsContainer');
    productDetailsContainer.innerHTML = generateProductDetailsHTML(matchingProduct);
}

document.querySelectorAll('.product-addtoCart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        console.log(productId);
        updateCartQuantity();
    });
});