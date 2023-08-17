/*
 * name - name of the salad
 * ingredients - array of items found in the salad
 */
const salads = [
  { name: 'Cobb', ingredients: ['lettuce', 'tomato', 'chicken', 'bacon', 'avocado', 'egg'] },
  { name: 'Caesar', ingredients: ['lettuce', 'croutons', 'cheese', 'egg', 'lemon'] },
  { name: 'Waldorf', ingredients: ['lettuce', 'mayo', 'apple', 'walnuts', 'celery'] },
  { name: 'Greek', ingredients: ['cucumber', 'tomato', 'onion', 'olives', 'cheese'] },
  { name: 'Macaroni', ingredients: ['macaroni', 'mayo', 'onion', 'carrots'] },
  { name: 'Potato', ingredients: ['potato', 'mayo', 'egg', 'carrots', 'cucumber'] }
];

// array of unknown plates to identify
const unknowns = [
  ['cheese', 'cucumber', 'onion', 'olives', 'tomato'],
  ['mayo', 'egg', 'potato', 'carrots', 'cucumber'],
  ['lettuce', 'avocado', 'tomato', 'chicken', 'egg', 'bacon'],
  ['mayo', 'apple', 'walnuts', 'beats', 'lettuce']
];

// DONE - loop over the salads and test a single ingredient (could be function?)
// DONE - loop over the ingredients in an unknown salad
// DONE - loop over the salads to compare their ingredient lists
// DONE - if the current mystery ingredient isn't found, skip that salad (and remove it from the possibilities?)
// DONE - test each salad against the mystery ingredients (a single array of mystery ingredients)
// DONE - count the number of ingredient matches, then compare that to the possible salad match
// DONE - once all of the ingredients match in a salad, that is the salad

// takes in a salad object and an ingredient (string) and return true or false based
// on that ingredients inclusion in the salad
function hasIngredient(salad, ingredient) {
  return salad.ingredients.indexOf(ingredient) > -1;
}

// take in a salad object and an array of ingredients
// return the number of mystery ingredients that match in that salad
function ingredientMatchCount(salad, ingredients) {
  let matches = 0;

  for(let ingredient of ingredients) {
    if(hasIngredient(salad, ingredient)) {
      matches++;
    } else {
      break;
    }
  }

  return matches;
}

// take in an array of salad objects and an array of ingredients
// return a string for the salad that matches all the ingredient
function getNameFromIngredients(saladsToTest, ingredients) {
  for(let salad of saladsToTest) {
    // const salad = saladsToTest[i];
    if(salad.ingredients.length === ingredientMatchCount(salad, ingredients)) {
      return salad.name;
    }
  }

  return "No Match Found.";
}

for(let ingredientArray of unknowns) {
  console.log(getNameFromIngredients(salads, ingredientArray));
}

// test saladMatch
// console.log(getNameFromIngredients(salads, unknowns[0]));

// test hasIngredient
// console.log(hasIngredient(salads[0], 'tomato'), hasIngredient(salads[3], 'car'));