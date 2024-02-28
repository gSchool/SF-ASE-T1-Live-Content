//  Write a function called "pluck" that takes two arguments:
//    1. An array of objects, and
//    2. A string representing a key that each of these objects has.
function pluck(array, string){
    let newArray=[];
    for (let i = 0; i < array.length; i++){
        let obj = array[i];
        newArray.push(obj[string])
        // for(let key in obj){
        //     if (key === string){
        //         newArray.push(obj[key])
        //     }else {
        //         newArray.push(obj[key])
        //     }
        // }
    }
    //  The function should return a new array containing the values
    return newArray;

}
//  of each object at that key.  These values should be in the same 
//  order as in the original array.
//
//  For example, if our inputs are:
//    [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}], 'color'
//  The output should be:
//    ['red', 'blue', 'yellow']
//  A few more examples:
    let input = pluck([{color: 'red'}, {color: 'blue'}, {color: 'yellow'}], 'size');
//    output: [undefined, undefined, undefined]
//    ------------------------------------------------------------
    let inputTwo = pluck([{size: 'small'}, {size: 'medium'}, {size: 'large'}], 'size');
//    output: ['small', 'medium', 'large']
//    ------------------------------------------------------------
    let inputThree = pluck( [{size: 'small'}, {color: 'green'}, {size: 'large'}], 'size');
//    output: ['small', undefined, 'large']

let inputFour = pluck([{color: 'red', size: 'small'}, {color: 'blue', size: 'medium'}, {color: 'yellow', size: 'large'}], 'color');
// Input: [{color: 'red', size: 'small'}, {color: 'blue', size: 'medium'}, {color: 'yellow', size: 'large'}], 'color'
// Output: ['red', 'blue', 'yellow']

// console.log(input);
// console.log(inputTwo);
// console.log(inputThree);
// console.log(inputFour);


/** =============================================== **/

// write a function called “zipArray”.  This function takes two arrays as 
// arguments, and returns a new array with all the items from both 
// input arrays, in alternating order.  For example:
function zipArray(arr1, arr2){
//  Input: [1,2,3], [‘a’, ‘b’, ‘c’]
//  Output: [1, ‘a’, 2, ‘b’, 3, ‘c’]
// manually look at first arr to get 1 and second array get the another one. 
var newArray = [];
let shortestArray = Math.min(arr1.length, arr2.length)
for(var i = 0; i < shortestArray; i++){
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
console.log(i,arr1[i],arr2[i]);    
}
console.log(i);
if(arr1.length > arr2.length){
    newArray = newArray.concat(arr1.slice(i));
} else if(arr1.length < arr2.length){
    newArray = newArray.concat(arr2.slice(i));
}

console.log(newArray);
// If arrays with different lengths are passed, the items in the longer 
// array should be appended as-is to the end of the result array.  For
// example:
return newArray
}

var Input = zipArray([1,2,3,4,5], ['a', 'b', 'c']);
console.log(Input);
// Output:  [1, ‘a’, 2, ‘b’, 3, ‘c’, 4, 5]
