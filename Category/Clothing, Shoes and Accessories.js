import { categories } from "../data/products.js";
import { formatCurrency } from "../script/utils/money.js";

let fashionHTML = '';

categories.fashionCategory.forEach((product) => {
    fashionHTML += `
    <div class="product-element">
                    <div class="product-content">
                        <div class="product-image">
                            <img src="../${product.image}"class="hover-image" alt="image">
                        </div>
                        <div class="product-text">
                            <div class="product-name">${product.name}</div>
                            <span class="product-price">$${formatCurrency(product.priceCents)}</span>
                        </div>
                        <label for="product-quantity-content">
                            <select class="product-quantity" name="product-quantity" id="product-quantity">
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
                        <button class="product-addtoCart-button">Add to Cart</button>
                    </div>
                </div>
    
    `
});
document.querySelector('.product-container').innerHTML = fashionHTML;

