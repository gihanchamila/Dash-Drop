import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { category } from "../data/category.js";
import { cart } from "../data/cart.js";

// Generate HTML for products

    let productsHTML = "";

    products.forEach((product) => {
        productsHTML +=
        `
            <div class="p-element">
                <div class="p-content">
                    <div class="p-image">
                        <img src="${product.image}" class="hover-image">
                    </div>
                    <div class="p-text">
                        <div class="p-name">${product.name}</div>
                        <span class="p-price">$${formatCurrency(product.priceCents)}</span>
                    </div>
                    <label for="p-quantity-content">
                        <select class="p-quantity" name="p-quantity" id="p-quantity">
                            <option value="1">1</option>
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
                    <button class="addtoCart-button js-addToCart-button" data-product-id="${product.id}">Add to Cart</button>
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
        }
    }
};

// Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElement =document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => {
    observer.observe(el)
});

document.querySelectorAll("js-addToCart-button").forEach((button) => {
    button.addEventListener('Click',() => {
        const productId = data.dataset.productId
        addToCart(productId)
    })
});
