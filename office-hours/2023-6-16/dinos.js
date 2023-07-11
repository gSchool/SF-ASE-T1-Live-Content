// // do not modify this array
// const dinosaurData = [
//     // [name, species, age]
//     ['jerry', 'rex', 25],
//     ['mary', 'tops', 20],
//     ['stan', 'stego', 34]
// ];

// // do not rename or move this array: the tests expect it to exist here
// const dinosaursCollection = [];

// // declare a function `Collection`
// function addDinosToCollection(dinosaurData) {
//     // Loop over `dinosaurData`
//     for (var i = 0; i < dinosaurData.length; i++) {
//         var dinoArray = dinosaurData[i];
//         // for each array of data:
//         // - create a new object for to represent the dino
//         var dinoObject = {};
//         // - the object should have three properties (keys): 
//         //   'name', 'species', and 'age'
//         for (var x = 0; x < dinoArray.length; x++) {
//             var keys = ['name', 'species', 'age'];
//             var key = keys[x];
//             var value = dinoArray[x];
//             dinoObject[key] = value;
//             // - add the object into the collection
//         }
//         dinosaursCollection.push(dinoObject);
//     }

// }
//   // this function is not expected to return anything
//   addDinosToCollection(dinosaurData);
//   console.log(dinosaursCollection);

// do not modify this array
const dinosaurData = [
    // [name, species, age]
    ['jerry', 'rex', 25],
    ['mary', 'tops', 20],
    ['stan', 'stego', 34]
  ];
  
  // do not rename or move this array: the tests expect it to exist here
  const dinosaursCollection = [];
  
  // declare a function `addDinosToCollection`
  function addDinosToCollection(dinosaurData) {
  // Loop over `dinosaurData`
  for(var i = 0; i < dinosaurData.length; i++) {
      //var dinoArray = dinosaurData[i];
  // for each array of data:
  // - create a new object for to represent the dino
      var dinoObject = {};
  // - the object should have three properties (keys): 
  //   'name', 'species', and 'age'
  for(var j = 0; j < dinosaurData[i].length; j++) {
      var keys = ['name', 'species', 'age'];
      var key = keys[j]; 
      var value = dinosaurData[i][j]; 
  dinoObject[key] = value;
  // - add the object into the collection
  }
  dinosaursCollection.push(dinoObject); 
  }
  }
  // this function is not expected to return anything
  addDinosToCollection(dinosaurData);
  console.log(dinosaursCollection);


  