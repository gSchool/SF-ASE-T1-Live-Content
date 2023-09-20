const sentence = [
  "Dinosaurs wo",
  "re disco shoes and sung",
  "lasses while battling giant",
  " inflatable pizza slices i",
  "n ancient jungle dance-offs!"
];

// Create a function that will take a string array and combine it into a single string
// create string variable
//loop through arrayOfStrings
function combineString(arrayOfStrings){
  let newString = "";

  for (let i = 0; i < arrayOfStrings.length; i++){
    newString += arrayOfStrings[i];
    // newString = newString + arrayOfStrings[i];
    // when i = 0:
    // newString = "" + "Dinosaurs wo";
  }

  return newString;//a single combined string
}
// It should accept a string array as a parameter and return a single combined string
// Rules: 
// * you CANNOT use join
// * you CANNOT use the sentence directly, you must use the parameter of the function

console.log(combineString(sentence));
