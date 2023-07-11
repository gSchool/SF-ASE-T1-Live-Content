// ---------- Phase 1 ---------- \\
// Create an array of fruits objects and their weights (in oz)
// It need not be perfectly factual

let fruits = [
    {name: "Mango", weight: 5},
    {name: "Apple", weight: 2},
    {name: "Orange", weight: 3},
    {name: "Banana", weight: 7},
    {name: "Pineapple", weight: 14}
]

// ---------- Phase 2 ---------- \\
// Create a function that takes in an array representing your backpack,
//      a quanity, and a fruit object from the array in Phase 1 to add.
// The function will attempt to add items to your backpack.
// Your backpack has a maximum weight of 64 oz.
// Return the updated backpack from the function.
function addToBackpack(backpack, quantity, fruitIndex, fruits) {
    // Data integrity checks
    if (fruitIndex == undefined) return backpack;
    if (typeof fruitIndex != "number") return backpack;
    if (fruitIndex > fruits.length - 1) return backpack;

    // Logic Checks
    if (getBackpackWeight(backpack) >= 64) return backpack;
    if (quantity < 1) return backpack;

    let pendingItems = [];
    for (let i = quantity; i > 0; i--) {
        pendingItems.push(fruits[fruitIndex]);
    }

    if (getBackpackWeight(pendingItems) + getBackpackWeight(backpack) > 64) return backpack;
    for (const pendingItem of pendingItems) {
        backpack.push(pendingItem);
    }

    return backpack;
}

function getBackpackWeight(backpack) {
    // for (let i = 0; i < backpack.length; i++) {
    //     const item = backpack[i];

    // }
    let totalWeight = 0;
    for (const item of backpack) {
        totalWeight += item.weight;
    }
    return totalWeight;
}
// ---------- Phase 3 ---------- \\
// Call the function from Phase 2 adding a variety of of different fruits with different function calls,
//    all of which add to the same backpack variable.

let backpack = addToBackpack([], 2, 0, fruits);
backpack = addToBackpack(backpack, 2, 1, fruits);
backpack = addToBackpack(backpack, 3, 4, fruits);
// ---------- Phase 4 ---------- \\
// Write another function that prints out all the contents of the backpack from Phase 1,
//    with a header. 
// List all items in the backpack including their weights, count and the name of the item, neatly. (No Bare Objects)

function priintBackpackContent(backpack) {
    console.log(`---------`);
    console.log(`My backpack stuff`);
    console.log(`---------`);
    
    let items = {};
    for (const item of backpack) {
       if (items[item.name] == undefined) {
           items[item.name] = [];
       } 
        items[item.name].push(item);
    }

    // Original intent of the lesson
    // If I hadn't screwed up the instructions.
    for (const item of backpack) {

        console.log(`Item: ${item.name} - Weight: ${item.weight}`)
    }
    
    // This is the solution, as written.
    // THIS IS WAY ABOVE TIER 1 ON ACCIDENT!
    for (const key in items) {
        const itemCount = items[key].length;
        const itemWeight = items[key][0].weight;
        console.log(`item: ${key} count: ${itemCount} weight: ${itemWeight * itemCount}`)
    }

    console.log(backpack);
    console.log(items);
}
priintBackpackContent(backpack)