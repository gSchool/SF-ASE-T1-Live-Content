/*
 * id - unique identifier for the little monster.
 * name - name of the monster
 * health - the max health the monster can have.
 * strength - the power the monster has.
 * constitution - the monster's natural ability to survive.
 */
const monsters = [
  {"id":79,"name":"Thornflame","health":50,"strength":7,"constitution":2},
  {"id":63,"name":"Electrazor","health":80,"strength":5,"constitution":6},
  {"id":102,"name":"Aeroquill","health":80,"strength":2,"constitution":6},
  {"id":21,"name":"Infernova","health":100,"strength":8,"constitution":9},
  {"id":78,"name":"Driftmoon","health":60,"strength":5,"constitution":9},
  {"id":65,"name":"Leafstrike","health":60,"strength":8,"constitution":2},
  {"id":86,"name":"Blitznova","health":100,"strength":7,"constitution":2},
  {"id":58,"name":"Terramoth","health":100,"strength":2,"constitution":1},
  {"id":28,"name":"Emberglide","health":120,"strength":3,"constitution":4},
  {"id":42,"name":"Celestialight","health":80,"strength":2,"constitution":9}
];

// Strings that describe cafeteria food the monsters can throw at each other
const foodsToThrow = [
  "a slice of rectangle pizza", "a handful of tater tots", "a plate of spaghetti with meatballs",
  "a couple fish sticks", "a PB&J sandwich", "a corn dog", "a slice of mystery meatloaf",
  "a bowl of macaroni and cheese", "a sloppy joes", "a pair of beef tacos",
  "a plate of nachos with cheese", "a chicken patty sandwich", "a grilled cheese sandwich",
  "a hot dogs with ketchup", "a cheeseburger", "a salisbury steak",
  "a handful of potato smiles", "a whole Lunchable", "a Fruit Roll-Up", "some Gushers",
  "a half-drunk Capri Sun", "a Hi-C Orange Lavaburst juice box", "a can of Surge",
  "a package of Dunkaroos", "a few Bagel Bites", "a Zebra Cake", "a Cosmic Brownie",
  "a Fruit by the Foot", "a small package of Nacho Cheese Doritos", "a few Oreo Cookies",
  "a fruit cup", "a pair of Twinkies", "a few dinosaur-shaped chicken nuggets",
  "a small bottle of SunnyD", "a few Butterfinger BBs",
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// The maximum is inclusive and the minimum is inclusive
function randomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Maybe try to do this later:
// need to track the health of all the monsters outside the objects (to prevent modifying the raw data)

// DONE - need to track which monsters are above 0 health 
// DONE - some way to pick a random monster that is IN the current round (to throw food AT) (good candidate for a function?)
// DONE - some way to pick a random food
// DONE - Loop over the active monsters and do their throws
// DONE - After the round finished, check which monsters from the round went below 0 health
// DONE - Any monsters that are left after that check, heal them per their constitution stat
// DONE - start simulation loop that ends when there is one or none monsters left above 0 health (or 500 rounds have passed)
// DONE - Do a final check to see if only one (or none) monster is left -- The win condition

// high level: output a "list" of some sort that only has monsters above 0 health
// specific: output an array of monster objects that are above 0 health
function getActiveMonsters(listOfMonsters) {
  const active = [];
  for(let mon of listOfMonsters) {
    if(mon.health > 0) {
      active.push({
        name: mon.name,
        health: mon.health,
        strength: mon.strength,
        constitution: mon.constitution
      });
    } else {
      console.log(mon.name, "was knocked out!");
      // print out a message "blah was knocked out!"
    }
  }
  return active;
}

// Example of objects being a reference
// const n = { "name":"richard" };
// const x = n;
// x.name = "Shalini";
// console.log(x, n);

// high level: take in an array of monsters and return one of them at random
function getRandomMonster(subsetOfMonsters) {
  return subsetOfMonsters[randomInt(0, subsetOfMonsters.length - 1)];
}

function getRandomFood() {
  return foodsToThrow[randomInt(0, foodsToThrow.length - 1)];
}

let activeMonsters = getActiveMonsters(monsters);

for(let r = 1; r <= 500; r++) {

  console.log(`Round ${r}:`);
  
  // Throw-Round loop
  for(let mon of activeMonsters) {
    const target = getRandomMonster(activeMonsters);
    target.health -= mon.strength;
    console.log(`${mon.name} threw ${getRandomFood()} at ${target.name}, causing ${mon.strength} damage!`);
    // console.log(mon.name + ' threw ' + getRandomFood() + ' at ' + target.name + ', causing ' + mon.strength + ' damage!');
  }

  activeMonsters = getActiveMonsters(activeMonsters);

  // Recoop Loop
  for(let mon of activeMonsters) {
    mon.health += mon.constitution;
  }

 if(activeMonsters.length <= 1) {
  break;
 }
}

console.log(activeMonsters);

if(!activeMonsters.length) {
  console.log("No monsters survived the onslaught of food.");
} else if(activeMonsters.length === 1) {
 console.log(`${activeMonsters[0].name} is the only monster to survive the food fight.`);
} else {
  let strongestIndex = 0;
  for(let m = 1; m < activeMonsters.length; m++) {
    if(activeMonsters[m].health > activeMonsters[strongestIndex].health) {
      strongestIndex = m;
    }
  }

  console.log(`Out of the ${activeMonsters.length} monsters left, ${activeMonsters[strongestIndex].name} is the healthiest.`);
}

// console.log(activeMonsters[0]);
// console.log(monsters[0]);

// Test for the random monster getter
// for(let m = 0; m < 30; m++) {
//   console.log(getRandomMonster(activeMonsters).name);
// }

// For of!!!!
// const nums = [9,3,80, -2, "hello!"];
// for(let i = 0; i < nums.length; i++) {
//   let n = nums[i];
//   console.log(i, n);
// }

// for(let n of nums) {
//   console.log(n);
// }
