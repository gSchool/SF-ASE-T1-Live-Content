const crusts = [
    {
        identifier: "crustThin",
        displayName: "Thin",
        price: 0
    },
    {
        identifier: "crustHandTossed",
        displayName: "Hand-Tossed",
        price: .50
    },
    {
        identifier: "crustDeepDish",
        displayName: "Deep Dish",
        price: 2
    },
    {
        identifier: "crustStuffed",
        displayName: "Stuffed",
        price: 3
    },
    {
        identifier: "crustFungus",
        displayName: "Mushroom",
        price: 8
    }
]

const sauces = [
    {
        identifier: "sauceSpicyTomato",
        displayName: "Spicy Tomato",
        price: 5
    },
    {
        identifier: "sauceTomatoBased",
        displayName: "Marinara",
        price: 0
    },
    {
        identifier: "sauceAlfredo",
        displayName: "Alfredo",
        price: 27
    },

]

const toppings = [
    {
        identifier: "toppingPepperoni",
        displayName: "Pepperoni",
        price: 1
    },
    {
        identifier: "toppingOlives",
        displayName: "Black Olives",
        price: 4
    },
    {
        identifier: "toppingFungus",
        displayName: "Mushroom",
        price: 3
    }
]

function createDots(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += ".";
    }
    return result;
}

function printMenu() {
    const crustHeader = `---------- Crust Options ----------`;
    console.log(crustHeader);
    for (const crust of crusts) {
        let dots = crustHeader.length - crust.displayName.length - crust.price.toString().length - 2;
        console.log(`${crust.displayName} ${createDots(dots)} ${crust.price}`);
    }
    console.log("");

    const sauceHeader = `---------- Sauce Options ----------`;
    console.log(sauceHeader);
    for (const sauce of sauces) {
        let dots = sauceHeader.length - sauce.displayName.length - sauce.price.toString().length - 2;
        console.log(`${sauce.displayName} ${createDots(dots)} ${sauce.price}`);
    };
    console.log("");

    const toppingHeader = `----------=={ Topping Options }==---------`;
    console.log(toppingHeader);
    for (const topping of toppings) {
        let dots = toppingHeader.length - topping.displayName.length - topping.price.toString().length - 2;
        console.log(`${topping.displayName} ${createDots(dots)} ${topping.price}`);
    }

}

printMenu();
// addTopping, addSauce, addCrust -- Possible entries for the Change. Return an error if you get an unknown change.
// Only 4 toppings max. return an error message if they try to add another.
// You can only have 1 sauce, and we replace sauces when we already have one.
// Same for crust.
function modifyOrder(existOrder, change, identifier) {

    if (change !== "addTopping" || change !== "addSauce" || change !== "addCrust") {
        return "Incorrect Input for 'change'. Must be one of addTopping, addSauce, addCrust";
    }

    if (!identifier) return "Identifier must be defined."

    if (change === "addTopping") {
        if (existOrder.toppings.length >= 4) return `Cannot add topping, 4 toppings already present.`;


    }

    var updatedOrder = existOrder + change;

    // return updatedOrder;
}