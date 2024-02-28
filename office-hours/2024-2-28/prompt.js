//  Write a function called "pluck" that takes two arguments:
//    1. An array of objects, and
//    2. A string representing a key that each of these objects has.
function pluck(array, string){
    let newArray=[];
    for (let i = 0; i < array.length; i++){
        let obj = array[i];
        for(let key in obj){
            if (key === string){
                newArray.push(obj[key])
            }else {
                newArray.push(obj[key])
            }
        }
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

console.log(inputFour);
