var word = "abc";
var newword = "A";

for(var i = 0; i < word.length; i++){
   newword += newword + word[i];
   // newword = newword + newword + word[i];
   // word[i] = "a" or "b" or "c"
   // i = 0: newword becomes "AAa"
   // i = 1: newword becomes "AAaAAab"
   // i = 2: newword becomes "AAaAAabAAaAAabc"
   console.log(newword);
}

console.log(newword);

// Primitive data
let x = 9;
const y = x;
x = x + 4;

let fullname = "Richard";
fullname += " Key"; // fullname = fullname + " Key";
// fullname = "Richard Key"

// Non-primitive data
let nums = [1,2,3,4,5];
// nums = [9,8,7,6,5];
const numsAgain = nums;
// nums = [9,8,7,6,5];
const doAThing = function() {};

doAThing();
nums.push(6);
numsAgain.push(7);

console.log(nums);
console.log(numsAgain);
// Two things happening: 
// retriving the array THROUGH the variable reference (nums)
// AND
// you are using the array that is returned from that reference to do something
// with it
