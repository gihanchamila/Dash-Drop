import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { category } from "../data/category.js";
import { addToCart, cart, removeAllFromCart, updateCartQuantity } from "../data/cart.js";
import { renderOrderSummary } from "./Checkout/OrderSummary.js";

// Generate HTML for products
let productsHTML = "";

products.forEach((product) => {
    productsHTML +=
    `
        <div class="p-element">
            <div class="p-content">
            
                <div class="p-image">
                    <a href="product-details.html?id=${product.id}" target="_blank">
                        <img id="contentImage" data-product-id="${product.id}" src="${product.image}" class="hover-image">
                    </a>
                </div>
                <div class="p-text">
                    <div class="p-name">${product.name}</div>
                    <span class="p-price">$${formatCurrency(product.priceCents)}</span>
                    <div class="added-to-cart js-added-to-cart-${product.id}">
                        <i class="fa-solid fa-check"></i>
                        Added
                    </div>
                </div>
                <label for="p-quantity-content">
                    <select class="js-quantity-selector-${product.id} p-quantity">
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
                </label>
                
                <button class="cart-button js-cart-button" data-product-id="${product.id}">Add to Cart</button>
            </div>
            
        </div>
    `
});


document.querySelector(".p-container").innerHTML = productsHTML;
    
let categoryHTML = "";

category.forEach((category) => {
    categoryHTML += `
        <li class="popular-destination-element">
            <img src="${category.image}" alt="image 01" class="hover-image">
            <div class="popular-catagories-name">${category.name}</div>
            <div class="ps-show-more"><button class="show-more-button"><a href="${category.link}">Show More</a></button></div>
        </li>
    `
});

document.querySelector('.popular-slider-ul').innerHTML = categoryHTML;

export const addProductToCategory = (productId, categoryName) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
        const categoryIndex = category.findIndex((c) => c.name === categoryName);
        if (categoryIndex !== -1) {
            category[categoryIndex].products.push(product);
        };
    };
};

// Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        };
    });
});

const hiddenElement =document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => {
    observer.observe(el)
});

document.querySelectorAll('.js-cart-button').forEach((button) => {
    button.addEventListener('click', ()  => {
        const {productId} = button.dataset;
        addToCart(productId);
        updateCartQuantity();
        renderOrderSummary()
    });
});

document.querySelectorAll('.hover-image').forEach(image => { // Step 4
    image.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const productId = event.target.getAttribute('data-product-id'); // Step 5
        const productDetailsUrl = `product-details.html?id=${productId}`; // Step 6
        window.open(productDetailsUrl, '_blank'); // Step 7
    });
});

document.querySelector(".fa-cart-shopping").addEventListener('click', (event) => {
    const checkoutHTML = "./Checkout.html"
    window.open(checkoutHTML, "_blank")
})

document.querySelector(".nav-signin-button").addEventListener('click', (event) => {
    const signInHTML = "./Navigation Links/Signin.html"
    window.open(signInHTML, "_blank")
});

document.querySelector(".nav-signup-button").addEventListener('click', () => {
    const signUpHTML = ".././Navigation Links/SignUp.html"
    window.open(signUpHTML, "_blank")
})

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.dropdown-menu-nav');
    const section = document.querySelectorAll('section');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        section.classList.toggle('menu-open');

    });
});