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

const order = {
  "crust": "deep dish",
  "sauce": "marinara",
  "toppings": [
    "ham",
    "pineapple"
  ]
};

// your code here

