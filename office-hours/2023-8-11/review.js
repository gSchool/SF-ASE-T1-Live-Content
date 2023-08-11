// declare a function `addDinosToCollection`
// Loop over `dinosaurData`
// for each array of data:
// - create a new object for to represent the dino
// - the object should have three properties (keys): 
//   'name', 'species', and 'age'
// - add the object into the collection
// this function is not expected to return anything

// do not modify this array
const dinosaurData = [
  // [name, species, age]
  ['jerry', 'rex', 25],
  ['mary', 'tops', 20],
  ['stan', 'stego', 34]
];

// do not rename or move this array: the tests expect it to exist here
const dinosaursCollection = [];

function addDinosToCollection(){
  for(let i = 0; i < dinosaurData.length; i++){
    let dino = {  
      name: '',    
      species: '',
      age: 0
    };

    dino.name = dinosaurData[i][0];
    dino.species = dinosaurData[i][1];
    dino.age = dinosaurData[i][2];
    dinosaursCollection.push(dino);
    console.log(dino);
  }

  // dino.name = "Big Boi Dinoguy";
  // dinosaursCollection[1].name = "New Dino on the Block";

  // dinosaursCollection.push(dino[i]);
  console.log(dinosaursCollection);
}

// const output = addDinosToCollection();
// console.log(output);

// console.log(addDinosToCollection());

// console.log(addDinosToCollection);

addDinosToCollection();
