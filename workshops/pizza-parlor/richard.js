/*
 * id - name of the ingredient.
 * type - category of the ingredient, such as 'crust' or 'cheese'.
 * price - retail cost for adding the ingredient to a pizza, in dollars.
 */
const ingredients = [
  // Crusts
  {"id":"thin crust","type":"crust","price":0.25},
  {"id":"pan crust","type":"crust","price":0},
  {"id":"stuffed crust","type":"crust","price":2.5},
  {"id":"deep dish","type":"crust","price":1.5},
  // Sauces
  {"id":"marinara","type":"sauce","price":0},
  {"id":"spicy marinara","type":"sauce","price":0.25},
  {"id":"pesto","type":"sauce","price":1},
  {"id":"creamy alfredo","type":"sauce","price":1.5},
  // Cheeses
  {"id":"mozzarella","type":"cheese","price":0},
  {"id":"provolone","type":"cheese","price":0.25},
  {"id":"parmesan","type":"cheese","price":0.5},
  {"id":"cheddar","type":"cheese","price":0.25},
  // Meats
  {"id":"pepperoni","type":"meat","price":0.5},
  {"id":"sausage","type":"meat","price":0.75},
  {"id":"spicy sausage","type":"meat","price":0.75},
  {"id":"chicken","type":"meat","price":1.5},
  {"id":"hamburger","type":"meat","price":1},
  {"id":"bacon","type":"meat","price":0.5},
  {"id":"ham","type":"meat","price":0.5},
  // Others
  {"id":"banana peppers","type":"other","price":0.25},
  {"id":"green peppers","type":"other","price":0.25},
  {"id":"tomatoes","type":"other","price":0.5},
  {"id":"onions","type":"other","price":0.25},
  {"id":"mushrooms","type":"other","price":0.25},
  {"id":"olives","type":"other","price":0.5},
  {"id":"pineapple","type":"other","price":0.5}
];

const tonysOrder = {
  "crust": "deep dish",
  "sauce": "marinara",
  "cheese": "mozzarella",
  "toppings": [
    "ham",
    "pineapple",
    "thin crust",
    "creamy alfredo"
  ]
};

const franksOrder = {
  "crust": "thin crust",
  "sauce": "spicy marinara",
  "cheese": "mozzarella",
  "toppings": [
    "parmesan",
    "pepperoni",
    "sausage",
    "spicy sausage",
    "bacon",
    "banana peppers",
    "green peppers"
  ]
};

const tax = 0.05;

// Things we need to do:
// 1. Find an ingredient by id (name) - DONE
// 2. Get the ingredent objects for the ingredients in the order - DONE
// 3. Calculate the total based on the prices in the ingredient objects
// 4. Refactor to make more reusable

function findIngredient(idToFind) {
  // for(let i = 0; i < ingredients.length; i++) {
  //   const ingredient = ingredients[i];
  //   if(ingredient.id  === idToFind) {
  //     return ingredient;
  //   }
  // }
  for(let ingredient of ingredients) {
    if(ingredient.id  === idToFind) {
      return ingredient;
    }
  }
}

// findIngredient verification
// const target = "marinara";
// const found = findIngredient(target);
// console.log(found);

function calculateTotalCost(order) {
  const orderedIngredients = [];
  
  console.log(order.crust);
  orderedIngredients.push(findIngredient(order.crust));
  orderedIngredients.push(findIngredient(order.sauce));
  orderedIngredients.push(findIngredient(order.cheese));
  
  for(let topping of order.toppings) {
    const ingredient = findIngredient(topping);
    if(ingredient.type !== "crust" && ingredient.type !== "sauce") {
       orderedIngredients.push(ingredient);
    } else {
      console.log("HEY! Only one crust and sauce per pizza!");
    }
  }
  
  console.log(orderedIngredients);
  
  let totalCost = 0;
  for(let ingredient of orderedIngredients) {
    totalCost += ingredient.price + (ingredient.price * tax);
  }

  return totalCost;
}

const tonysBill = calculateTotalCost(tonysOrder);
const franksBill = calculateTotalCost(franksOrder);

console.log("$" + tonysBill.toFixed(2));
console.log("$" + franksBill.toFixed(2));
// console.log(totalCost, totalCost.toFixed(2));

// Calculate 5% tax on the order
// totalCost += (totalCost * 0.05);

// console.log("$" + totalCost.toFixed(2));
