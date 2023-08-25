let jewelleryTypes = ['Ring','Neckless','Bracelet','Earrings','Pendant']; 
let metals = ['Tungsten','Gold','Silver','Platnum','Titanium','Palladium']; 
let gems = ['Diamond','Opal','Spinel','Topaz','Beryl','Sapphire','Amethyst']; 

let items = [...gems,...jewelleryTypes,...metals];
// console.log(items);

// we could us an index to grab the items
// what we WANT: is given a string, what type of item is it?
// create a piece of jewelry with one element from each array

/*
Output example:
const ring = {
  type: 'Ring',
  metal: 'Gold',
  gem: 'Diamond'
};
*/

// 
function createJewelry(type, metal, gem) {
  if(jewelleryTypes.indexOf(type) < 0) {
    console.log(type, "is not a valid jewelry type.");
  } else if(metals.indexOf(metal) < 0) {
    console.log(metal, "is not a metal that exists, dude.");
  } else if(gems.indexOf(gem) < 0) {
    console.log(gem, "is not a gem that I have heard of.");
  } else {
    return {
      type: type,
      metal: metal,
      gem: gem
    };
  }

  return null;
}

createJewelry('superduperjewelrything', 'Gold', 'Diamond');
createJewelry('Ring', 'richumium', 'Diamond');
createJewelry('Ring', 'Gold', 'awesomecrystals');
const goldDiamondRing = createJewelry('Ring', 'Gold', 'Diamond');
console.log(goldDiamondRing);

// items.forEach(function(itemNew,index,arr) { 
//     console.log(`catalog: ${itemNew} \t index:${index + 1001}`) 
//   // catalog.set(itemNew,index + 1001); 
//  // console.log(catalog) 
//     } 
// )