// Create a variable that will store the clothes someone would wear
// Assign this variable an object literal with the following properties/keys:
//  name, hat, mask, shirt, pants, shoes
// The values you assign to these properties is up to you.

// Create a function that accepts a "clothes" parameter
// This parameter is expected to be a clothes object like the one defined above

// Using the object, build a string that includes all the clothes, 
    //create a string 
       //let description = "The party dress will include " + ${partyDress.hat} + partyDress.mask + partyDress.shirt + partyDress.pants + partyDress.shoes";
     //include all object clothes/values in created string
// IE a natural language description of the outfit

// return this string

// Invoke the function and use the clothes object you defined as the argument
// print out the returned description

let partyDress = {
    name: "party dress",
    hat: "bowler hat",
    mask: "kitten",
    shirt: "peasant blouse",
    pants: "black leather pants",
    shoes: "combat boots"
}

let secondOutfit = {
  name: "halloween costume",
  hat: "cowboy hat",
  mask: "bandanananana",
  shirt: "button-up",
  pants: "jeans",
  shoes: "cowboy boots"
}

function pickClothes(clothes){
    let description = `The ${clothes.name} will include a ${clothes.hat}, a ${clothes.mask} mask, a ${clothes.shirt}, ${clothes.pants}, and ${clothes.shoes}.`;
    return description;
}

console.log(pickClothes(partyDress));

// call the function with second outfit, capture/store the output to log instead of logging directly.
let output = pickClothes(secondOutfit);
console.log(output);
// console.log(`${partyDress.hat}`)