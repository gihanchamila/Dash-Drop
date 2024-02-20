export let cart = JSON.parse(localStorage.getItem('cart'))

if ((!cart)){
     cart = 
    [/*{
        id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image:"Images/DailyDeals/Dailydeals-Image01.jpg",
        name:"TITAN Black Dial Analog Watch for Men - Gents",
        rating: {
        stars: 4.5,
        count: 87
        },
        category:"fashionCategory",
        priceCents: 10900,
        keywords: [
        "watch",
        "analog watch",
        "TITAN" ]
    },

    {   id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "Images/DailyDeals/Dailydeals-Image02.png",
        name: "ASUS Vivobook 15 (X1504) 13th gen",
        rating: {
        stars: 4.5,
        count: 56
        },
        category:"computersCategory",
        priceCents: 103000,
        keywords: [
        "Asus",
        "Vivobook 15",
        "13th gen"
        ],
        type: "Laptop",

    }*/]
};


export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
};

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        };
    });

    if (matchingItem){
        matchingItem.quantity += 1
    } else {
        cart.push ({
            productId: productId,
            quantity:1,
            deliveryOptionId: "1"
        })
    };
    saveToStorage();
};

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
    cart = newCart; // Emptying the cart array
    saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        };
    });
     matchingItem.deliveryOptionId = deliveryOptionId;
     saveToStorage()
};

export function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });
};