import { products } from "./data/products.js";
import { formatCurrency } from "./script/utils/money.js";

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
            <h3>Delivery options</h3>
            <div class="delivery-option-container">
                <form action="">
                    <div>
                        <input type="radio">
                        <label for="delivery-option" class="delivery-date">Monday, February 12</label>
                        <label for="delivery-type" class="delivery-type">$4.99 - Shipping</label>
                    </div>
                    <div>
                        <input type="radio">
                        <label for="delivery-option" class="delivery-date">Monday, February 12</label>
                        <label for="delivery-type" class="delivery-type">$9.99 - Shipping</label>
                    </div>
                    <div>
                        <input type="radio">
                        <label for="delivery-option" class="delivery-date">Monday, February 12</label>
                        <label for="delivery-type" class="delivery-type">$9.99 - Shipping</label>
                    </div>
                </form>
            </div>
            <div>
                <button class="addToCart-button js-addToCart-button">Add to Cart</button>
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

