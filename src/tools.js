// Comments
// Comments can be one line
/* Or comments can be
   multiple lines */

// Variables
// Variables are named chunks of memory.

// Var is the old way to specify variables.
// When you simply create a variable like this, it's called 'declaring' the variable.
var myVariable;

// Let is the new way, it should be preffered over var, and behaves more predictably.
let myLet;

// Constants are for values that never change, use them as your default.
// Constants require initialization
// Initialization is when you create a variable and assign it a value at the same time.
const myConst = 1;

// Variables allow value replacement, to use myConst's value, we simply put myConst.
myConst;  // This is the same as simply writing 1.

// Blocks
// A block is defined with {}
// Blocks control the lifetime of variables through a process known as scope.
// A variable declared outside of, and before a block can access by a block.
let blockOutside;
{
    let blockInside1; // Both blockOutside and blockInside1 exist here.
}                     // Only blockOutside exists here.
{
    let blockInside2; // blockOutisde and blockInside2 exist here, blockInside1 does not.
}                     // Only blockOutside exists here.


// Data Structures
// There are many data structures, but there are two that are overwhelmingly common.

// Arrays
// Arrays are lists with an index.
let myArray = []

// An index starts at 0 and counts up.
// This array is of length 3, has 3 items, and the last index is 2.
let anotherArray = ["b", "c", "d"]

// To put things into an array after initializing it, we can use push.
// Push places items at the end of the array.
anotherArray.push("e");
// anotherArray = ["b", "c", "d", "e"];

// It is possible to put items at the front of an array using unshift();
// This is slow and should only be used if truly required.
anotherArray.unshift("a");
// anotherArray = ["a", "b", "c", "d", "e"];

// Similarly we can remove items from the end of an array with pop.
anotherArray.pop();
// anotherArray = ["a", "b", "c", "d"];

// Lastly we can remove items from the front of an array using shift();
anotherArray.shift();
// anotherArray = ["b", "c", "d"];

// We can access the value of a specific index of an array using [];
anotherArray[1];  // This gives us the second element, as arrays start at 0.