let fruits = [
    {name: "Mango", weight: 5},
    {name: "Apple", weight: 2},
    {name: "Orange", weight: 3},
    {name: "Banana", weight: 7},
    {name: "Pineapple", weight: 14}
]

const FRUIT_MAX_WEIGHT = 15;
function isFruitLight(fruit) {
    return (fruit.weight < FRUIT_MAX_WEIGHT)
}


let isLight = true;
for (let i = 0; i < fruits.length; i++) {
    if (!isFruitLight(fruits[i])) isLight = false;
}

for (const fruit of fruits) {
    if (!isFruitLight(fruit)) isLight = false;
}

isLight = fruits.every(isFruitLight);

let isLight3 = fruits.every((fruit) => (fruit.weight < FRUIT_MAX_WEIGHT));
console.log(isLight3)

let isLight2 = fruits.every(() => this.weight < FRUIT_MAX_WEIGHT);
console.log(isLight2);

let fruitChecks = fruits.map((fruit) => (fruit.weight < FRUIT_MAX_WEIGHT));

for (const value of fruitChecks) {
    if (!value) {
        isLight = false;
        break;
    }
}