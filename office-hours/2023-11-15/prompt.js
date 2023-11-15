// Write a function that accepts a string
function capIt(string){
   let newString = string.toUpperCase();
   let addDash = "";
   for(var i = 0; i < newString.length; i++){
    addDash += newString[i] + "-";//H-E-L-L-O-
   }
   let finalfinalfinalvariable = addDash.substring(0,addDash.length - 1);
   return finalfinalfinalvariable;
  //  return string.toUpperCase().split("").join("-");
}
var output = capIt("hello")
console.log(output)
// and outputs (return) an ALL CAPS version of it
// with dashes in-between each letter
// to maximize annoyance.
// Example" "hello" -> "H-E-L-L-0"







