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