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
    const toppingHeader = `----------=={ Topping Options }==---------`;
    console.log(toppingHeader);
    for (const topping of toppings) {
        let dots = toppingHeader.length - topping.displayName.length - topping.price.toString().length - 2;
        console.log(`${topping.displayName} ${createDots(dots)} ${topping.price}`);
    }

}

printMenu();