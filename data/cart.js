export let cart = JSON.parse(localStorage.getItem('cart')) || []

if ((!cart)){
     cart = 
    []
};


export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
};

export function countCart(){
    return cart.length;
}



export function addToCart(productId) {
    let matchingItem;
    const addedMessageTimeouts = {};

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-visible');

    const previousTimeoutId = addedMessageTimeouts[productId];
 
    if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
    }

    const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

    addedMessageTimeouts[productId] = timeoutId;

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId,
            quantity,
            deliveryOptionId: "1"
        });
    }
    updateCartQuantity();
    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if(productId !== cartItem.productId){
            newCart.push(cartItem)
        };

    });
    cart = newCart
    saveToStorage()
};

export function removeAllFromCart() {
    const newCart = [];
    cart = newCart;
    saveToStorage();
    updateCartQuantity()
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        };
    });
    if (matchingItem) {
        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
    } else {
        console.error("Matching item not found in the cart.");
    }
};

export function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });
    return cartQuantity
};
updateCartQuantity()

