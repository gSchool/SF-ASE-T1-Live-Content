/*
Your solution should follow these requirements:
* Each monster with a health above 0 takes turns throwing a random food item
* The target of the tossed food is chosen at random
// These two combined tell us that we will be checking health and using random numbers (of some sort)
* The target monster has health taken away equal to the throwing monster's strength
// From here we known monsters have a strength in addition to health, and we will be taking health away based on that
* You must print information about the throw 
  * possible example: "MonsterX threw a pizza slice at MonsterY, cause X damage"
* Once all monsters above 0 health have thrown a piece of food, the round is over
// What is a round? A round is a collection of turns taken by monsters with above 0 health.
// What is turn? A turn is a single monster (above 0 health) throws a food item.
// A round is every monster above 0 health taking a turn throwing a food item.
* After each round all monsters with health above 0 gain health equal to their own constitution
// After a round (this is important), any monster left with health, heals a bit
* When there is only one or no monsters left with health above 0, the food fight is over
// Either there is a single surviving monster after a round, who is now the winner, OR all monsters
// are "thrown out"
// Win is probably the win condition or the conclusion of the simulation
// A monster can only participate in the food fight if they are above 0 health
// targets and foods are randomized
// turns and rounds are not the same thing, each round has multiple turns, the simulation has multiple rounds
*/

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
// Whole numbers ONLY!
function randomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// I need a loop that iterates rounds
// and I need a loop that iterations turns

// How many rounds? (or when does the simulation end?)
// The sim ends when there is one or no monsters with 1 or more health
// How do figure ^ this out?
// Check the health of the monsters is above 0
// Retrieve monsters health and check if it is above 0 or not
// start from the first monster and check the health, 
// if the health is above 0, proceed with next steps
// iterate over monsters, and for each monster, check its health
// Big question: what are we actually outputting from the process?
// What is the goal of doing this?
// The goal: filter monsters who are above 0 health?
// Knowing this^: what do we do if the monster is above 0 health?
// capture the monster who is above 0 health
// what would we do is a monster is 0 or less health?
// ignore that monster, do nothing
// How do we "capture" that monster that is above 0 health?
// use a variable to store that monster, or to put that monster inside of something

function getMonstersAboveZeroHealth() {
  // What are doing with this variable?
  // storing monsters above zero health
  // this needs to be an array because we are
  // storing more than one monster
  let monstersAboveZero = [];
  for(let m = 0; m < monsters.length; m++) {
    if(monsters[m].health > 0) {
      monstersAboveZero.push(monsters[m]);
    }
  }

  return monstersAboveZero;
}

// This loop (for rounds in the sim) ends if 
// there are one or none active monsters

let activeMonsters = monsters;

while(activeMonsters.length > 1) {

  // How many turns? (or When does a round end?)
  for(let a = 0; a < activeMonsters.length; a++) {
    // What happens each turn?
    // Active monster will have to throw food
    // how do we get the "active monster"?
    // activeMonsters[a];
    // How can the active monster throw food?
    // OR
    // What happens when the active monster throws food?
    // A random food is thrown at a random target.
    // What does this ^ mean in more detail?
    // The target monster has health taken away 
    // equal to the the active monster's strength
    // How can we get a random target?
    // Get a random monster from the active monsters array
    // To do this:
    // Use randomInt to generate a random index
    // between 0 (the static first index of any array)
    // and the last index of the active monsters list
    const randomTargetIndex = randomInt(0, activeMonsters.length - 1);

    // What do we do with the random target index?
    // Use it to reference a random target to subtract health from
    const target = activeMonsters[randomTargetIndex];

    // What do we do with the target?
    // Subtract the health of the target
    // What value are we subtracting from the health?
    // the active monster's strength
    const monsterThatIsActive = activeMonsters[a];
    target.health -= monsterThatIsActive.strength;

    // Is there anything else that needs to happen each turn?
    // Yes, we need to print what happened
    // Ex: "MonsterX threw a pizza slice at MonsterY, causing X damage"
    // In order to detail the food that was thrown, we need to get a random food
    // How do we get a random food?
    // Pull a random index from the food array
    // then pull a random food from that food array using the random index
    // Another way to describe this code:
    // generate a random index between 0 and the last index of the food array
    // store that index in a variable
    // use that random index to pull a random food description from the foods
    // array (maybe store it in a variable for use later)
    const randomFoodIndex = randomInt(0, foodsToThrow.length - 1);
    const foodDescription = foodsToThrow[randomFoodIndex];
    console.log(monsterThatIsActive.name, "threw", foodDescription, "at", target.name);
  }

  // update the list of active monsters, because the
  // active monsters could have changed after everyone
  // has thrown food
  activeMonsters = getMonstersAboveZeroHealth();
}