import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { addToCart, updateCartQuantity } from "../data/cart.js";

function generateProductDetailsHTML(product) {
    return `
        <div class="swiper-container">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="${product.image}" alt=""></div>
                </div>
            </div>
        </div>
        <div class="product-details">
            <h2 class="product-name">${product.name}</h2>
            <span class="product-price">$${formatCurrency(product.priceCents)}</span>
            <h3>About this item</h3>
            <p class="product-description"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div>
                <button class="addToCart-button js-addToCart-button" data-product-id="${product.id}">Add to Cart</button>
            </div> 
        </div>  
    `;
}

// Fetching product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Sample getProduct function
function getProduct(productId) {
    return products.find(product => product.id === productId);
}

// Retrieving product details
const matchingProduct = getProduct(productId);

// Populating product details
if (matchingProduct) {
    const productDetailsContainer = document.getElementById('productDetailsContainer');
    productDetailsContainer.innerHTML = generateProductDetailsHTML(matchingProduct);
}

document.querySelectorAll('.js-addToCart-button').forEach((button) => {
    button.addEventListener('click', ()  => {
        const productId = button.dataset.productId;
        addToCart(productId);
        console.log(productId)
        updateCartQuantity();
    });
});

