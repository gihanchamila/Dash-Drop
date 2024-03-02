export const deliveryOptions = [{
    id: "1",
    deliveryDays: 21,
    priceCents:0
}, {
    id: "2",
    deliveryDays: 14,
    priceCents:999 
}, {
    id: "3",
    deliveryDays: 7,
    priceCents:1999 
}];

export function getDeliverOption(deliveryOptionId){
    let deliveryOption

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId) {
            deliveryOption = option
        }
    });
    return deliveryOption;
};

