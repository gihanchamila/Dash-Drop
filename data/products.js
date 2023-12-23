export function getProductId(productId){
    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product
        };
    });
};

export const category = [
    {
        name:"Camera and Accessories",
        image:"Images/Category/camera-and-accessories.png",
        link:"Category/Camera and Accessories.html",
        products:[]
    },

    {
        name:"Books and Magazine",
        image:"Images/Category/Books & Magazine.png",
        link:"Category/Books and Magazine.html",
        products:[]
    },

    {
        name:"Cell Phone and Accessories",
        image:"Images/Category/cell-phone-and-accessories.png",
        link:"Category/Cell Phone and Accessories.html",
        products:[]
    },

    {
        name:"Clothing, Shoes and Accessories",
        image:"Images/Category/Clothing, Shoes & Accessories.png",
        link:"Category/Clothing, Shoes and Accessories.html",
        products:[]
    },

    {
        name:"Computers and Accessories",
        image:"Images/Category/Computers & Accessories.png",
        link:"Category/Computers and Accessories.html",
        products:[]
    }
]

export const products = [
    {
        id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image:"Images/DailyDeals/Dailydeals-Image01.jpg",
        name:"TITAN Black Dial Analog Watch for Men - Gents",
        rating: {
        stars: 4.5,
        count: 87
        },
        category:{
            name:"Clothing, Shoes & Accessories",
            link:"Clothing, Shoes & Accessories.html"
        },
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
        category:"Camera and Accessories",
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
        category:{
            name:"Cell phone and Accessories",
            link:"Cell phone and Accessories.html"
        },
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
        category:"Clothing, Shoes & Accessories",
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
        category:"Cell phone and Accessories",
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
        category:"Cell phone and Accessories",
        priceCents: 3499,
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
        category:"Computers and Accessories",
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
        category:"Computers and Accessories",
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
        category:"Clothing, Shoes & Accessories",
        priceCents: 3499,
        keywords: [
        "Desktop",
        "All in one"
    ]
    }
]



