export const deliveryOptions = [{
    id: "1",
    deliveryDays: 3,
    priceCents:499
}, {
    id: "",
    deliveryDays: 7,
    priceCents:999
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

