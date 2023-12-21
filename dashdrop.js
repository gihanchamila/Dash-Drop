import { products } from "./data/products.js";

let productsHTML = "";

products.forEach((product) => {
    productsHTML +=
     `
        <div class="dailydeal-element">
            <div class="dd-content">
                <div class="dd-image">
                    <img src="${product.image}" class="hover-image">
                </div>
                <div class="dd-text">
                    <div class="dd-name">${product.name}</div>
                    <span class="dd-price">${product.priceCents}</span>
                </div>
                <label for="dd-quantity-content">
                    <select class="dd-quantity" name="dd-quantity" id="dd-quantity">
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
            </div>
        </div>
    `
});

document.querySelector(".dd-container").innerHTML = productsHTML;

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
