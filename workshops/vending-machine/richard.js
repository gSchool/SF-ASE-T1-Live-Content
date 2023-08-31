const machine = {
  'a': [
    {"name": "SnackNova Potato Crisps","price": 83},
    {"name": "Chippity Doo-Dahs","price": 447},
    {"name": "Tatertronics","price": 310},
    {"name": "Krusty Brand Imitation Potato Chips","price": 139}
  ],
  'b': [
    {"name": "WholesomeWhirl Snackin' Crisps","price": 191},
    {"name": "QuirkyCrunch Cheesy Animal Crackers","price": 201},
    {"name": "Taternado Potato Twisters","price": 334},
    {"name": "Crispy Crunchos","price": 442}
  ],
  'c': [
    {"name": "YumYam Crisps","price": 60},
    {"name": "CraveWave Corn Puffs","price": 275},
    {"name": "Completely Normal Potato Chips","price": 54},
    {"name": "CrispMagic Ultra Crispy Chips","price": 290}
  ],
  'd': [
    {"name": "VelvetCrunch Bar","price": 305},
    {"name": "MarshmallowWhirl Bar","price": 113},
    {"name": "SBLOUNSKCHED! Bar","price": 449},
    {"name": "PeanutPraline Perfection","price": 82},
    {"name": "ChocoBurst Delight","price": 403},
    {"name": "LemonLush Bar","price": 297}
  ],
  'e': [
    {"name": "Chunky Blast Offs","price": 150},
    {"name": "Mr. Candy Bar","price": 127},
    {"name": "Scooby Snack","price": 59},
    {"name": "Super Mega Ultra Giant Jawbreaker","price": 408},
    {"name": "Power Crunch Bar","price": 205}, 
    {"name": "Squishee Bar","price": 174}
  ]
};

// DONE - Create a function with two parameters: an item location and inserted money in cents
// REF: The function should return an object in the form { item: null or an item object, change: number }
// DONE -check the row letter to make sure it exists - make sure the machine object has a property for the letter
// DONE - if the letter does exist then check the item location number to make sure it is not outside the array bounds
// DONE - if either check fails, log "Invalid Location!" then exit the function, 
//    returning a null item and the change should be all the money given
// DONE - when the location is valid, retrieve the item at the specified location
// DONE - verify the money given is enough to purchase the item
// DONE - if the money is NOT enough, then log "More Coins Needed!" and exit the function,
//    returning a null item and the change should be all the money given
// DONE - when the money is enough, subtract the cost of the item from the money given,
//    then exit the function, returning the item and the left over money as change

function vend(location, funds) {
  const letter = location.substring(0, 1);
  const slot = parseInt(location.substring(1));
  const row = machine[letter];
  let item = null;
  let error = "";
  // let isValidRequest = true;
  // console.log(letter, slot, typeof slot);
  // console.log(letter + slot, letter, typeof slot);

  if(!row || slot < 1 || row.length < slot) {
    error = "Invalid Location: " + location;
    // console.log("Invalid Location:", location);
    // isValidRequest = false;
  } else {
    item = row[slot - 1];
  }

  // console.log(item);

  if(item && item.price > funds) {
    error = "Invalid Funds!";
    // console.log("Invalid Funds!");
    // isValidRequest = false;
  }

  if(error) {
  // if(!isValidRequest) {
    console.log(error);
    return {
      item: null,
      change: funds
    };
  }

  return {
    item: item,
    change: funds - item.price
  };
}

console.log(vend("h2", 200));
console.log(vend("c3", 50));
console.log(vend("c3", 100));
vend("e1001");

// Some example locations to use in testing:
// c1
// a3
// e5

