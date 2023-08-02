// name - name of the produce item
// type - type of produce (fruit, veggie, dairy, meat)
// price - price in cents
const produce = [
  {
    name: "strawberries",
    type: "fruit",
    price: 50
  },
  {
    name: "potato",
    type: "veggie",
    price: 100
  },
  {
    name: "steak",
    type: "meat",
    price: 40000
  }
];

// outer = aisle, inners = shelves
const aisle = [[], [], [], []];

//use index of 1 to reference the correct shelf array in the aisle array
aisle[0].push(produce[2]);
aisle[1].push(produce[0]);
aisle[2].push(produce[1]);
aisle[2].push(produce[1]);

// put all produce on all shelves

// for(var i = 0; i < produce.length; i++){

//   for (var j = 0; j<aisle.length; j++) {
//     aisle[j].push(produce[i]);
   
//   }
// }
//clear shelf before adding stuff to it
for(var i = 0; i < aisle.length; i++){
  aisle[i].splice(0, aisle[i].length);
  //good job Laurie!
  // other options include:
  aisle[i] = [];
  aisle[i].length = 0;
  for (var j = 0; j < produce.length; j++) {
    aisle[i].push(produce[j]);
  }
}

console.log(aisle);
