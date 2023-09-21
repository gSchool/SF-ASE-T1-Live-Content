const items = [
  "Old photographs",
  "Vintage clothing",
  "Antique books",
  "Dusty records",
  "Broken toys",
  "Yellowed letters",
  "Christmas decorations",
  "Retro electronics",
  "Faded newspapers",
  "Family heirlooms",
  "Board games",
  "Seasonal clothing",
  "Sports memorabilia",
  "Vintage magazines",
  "Quilts and blankets",
  "Collectible figurines",
  "Aged musical instruments",
  "Rusted tools",
  "Vintage jewelry",
  "Tattered comic books",
  "Historical documents",
  "Costume masks",
  "wedding dress",
  "Fragile porcelain dolls",
  "Rusted bicycles",
  "Childhood artwork",
  "Tarnished silverware",
  "Vintage postcards",
  "Dusty board games"
];

// This will end up as a 2-dimensional array (array of arrays)
// Outer array is the storage unit, inner arrays ar the boxes with items
const storageUnit = [];

// create the first box
// go through all the items
// for each item, we need to do the following:
// check the current box's item count
// if the item count is at 4, add the box to the SU, create a new box and it is now the "current box"
// add the current item to the current box

function processItem(itemToAdd, boxToAddTo, boxCapacity) {
  // if boxToAddTo is undefined, return a new box with the item
  // if boxToAddTo is at capacity, add the box to the SU, and return a new box with the item
  if(boxToAddTo === undefined) {
    return [ itemToAdd ];
  }

  if(boxToAddTo.length === boxCapacity) {
    storageUnit.push(boxToAddTo);
    return [ itemToAdd ];
  }

  boxToAddTo.push(itemToAdd);
  return boxToAddTo;
}

let box;

for(let i = 0; i < items.length; i++) {
  const item = items[i];
  box = processItem(item, box, 6);
  console.log(box);
}

storageUnit.push(box);
console.log(storageUnit);

// the box will start empty
// let box = [];

// for(let i = 0; i < items.length; i++) {
//   // length is not only the number of elements in the box array
//   // abstractly, this also represents the number of items in the box
//   if(box.length === 4) {
//     storageUnit.push(box);
//     box = [];
//   }

//   const item = items[i];
//   box.push(item);
//   // console.log(box.length);


//   // if(i === items.length - 1) {
//   //   storageUnit.push(box);
//   // }
// }

// when the loop is done, there is ALWAYS the last box, which with ALWAYS have
// at least one item in it, so after the loop is finished, we need to add that
// last box manually.
// storageUnit.push(box);

// console.log(storageUnit);
