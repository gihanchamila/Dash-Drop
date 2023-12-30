export function getProductId(productId){
    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product
        };
    });
};



export const products = [
    {
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
        "TITAN"
        ]
    },

    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
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
    },

    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "Images/DailyDeals/Dailydeals-Image03.jpg",
        name: "Samsung Galaxy s23 ultra promax",
        rating: {
        stars: 5,
        count: 2197
        },
        category:"cellPhoneCategory",
        priceCents: 100000,
        keywords: [
        "Samsung",
        "S23",
        "Galaxy"
        ]
    },

    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "Images/DailyDeals/Dailydeals-Image04.jpg",
        name: "Quilty Medium Satchel Handbag",
        rating: {
        stars: 4,
        count: 37
        },
        category:"fashionCategory",
        priceCents: 2067,
        keywords: [
        "Handbag"
        ]
    },

    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "Images/DailyDeals/Dailydeals-Image05.jpg",
        name: "Apple iphone 15 Pro Max | 256GB",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"cellPhoneCategory",
        priceCents: 3499,
        keywords: [
        "Apple",
        "Iphone 15"
    ]
    },

    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "Images/DailyDeals/Dailydeals-Image06.jpeg",
        name: "Haylou S35 ANC Headphones - Activated Noise Cancellation Headphone - Premium Quality",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"cellPhoneCategory",
        priceCents: 3599,
        keywords: [
        "Headphones",
        "Noise Cancellation"
    ]
    },

    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c73",
        image: "Images/DailyDeals/Dailydeals-Image07.jpeg",
        name: "Buy Gandiva® Economical 18.5-inch All in One CI5 Desktop Computer",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"computersCategory",
        priceCents: 3499,
        keywords: [
        "Desktop",
        "All in one"
    ]
    },

    {
        id: "9c9c52b5-5a19-4bcb-a5d1-158a74787c73",
        image: "Images/DailyDeals/Dailydeals-Image08.webp",
        name: "DC Comics, 12-inch Combat Batman Action Figure",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"Toys",
        priceCents: 3499,
        keywords: [
        "Desktop",
        "All in one"
    ]
    },

    {
        id: "9b9c52b5-5a19-4bcb-a5d1-158a74787c73",
        image: "Images/DailyDeals/Dailydeals-Image09.jpeg",
        name: "Intel Core I7-13700 Processor 30M Cache, Up To 5.20 GHz",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"computersCategory",
        priceCents: 3499,
        keywords: [
        "Desktop",
        "All in one"
    ]
    },
    
    {
        id: "9b9c52b5-5a19-4bcb-a5d1-158a74787c73",
        image: "Images/DailyDeals/Dailydeals-Image10.png",
        name: "Moose Comfort Fit Crew Neck T Shirt - Olympic Blue",
        rating: {
        stars: 4.5,
        count: 175
        },
        category:"fashionCategory",
        priceCents: 3499,
        keywords: [
        "Desktop",
        "All in one"
    ]
    },

    {
        id: "9b9c52b5-5a19-4bcb-a5d1-158a74987c73",
        image: "Images/DailyDeals/Dailydeals-Image11.jpg",
        name: "Diary Of A Wimpy Kid Box Of Books Books 1-13 Diy Book ",
        rating: {
        stars: 4.8,
        count: 175
        },
        category:"booksCategory",
        priceCents: 3499,
        keywords: [
        "Diary Of A Wimpy Kid",
        "Books"
    ]
    },

    {
        id: "9b9c52b5-5a19-4bcb-a6d1-158a74987c73",
        image: "Images/DailyDeals/Dailydeals-Image12.jpg",
        name: "Nikon D5600 DSLR Camera with 18-55mm Lens - Hypercart",
        rating: {
        stars: 4.8,
        count: 175
        },
        category:"camaraCategory",
        priceCents: 85050,
        keywords: [
        "Nikon",
        "Nikon D5600",
        "DSLR"

    ]
    }
]

export const categories = {
    camaraCategory: [],
    booksCategory: [],
    cellPhoneCategory: [],
    fashionCategory: [],
    computersCategory: [],
};

products.forEach((product) => {
    if (Array.isArray(product.category)) {
        product.category.forEach((categoryName) => {
            if (categories.hasOwnProperty(categoryName)) {
                categories[categoryName].push(product);
            }
        });
    } else {
        if (categories.hasOwnProperty(product.category)) {
            categories[product.category].push(product);
        }
    }
});

console.log(categories)