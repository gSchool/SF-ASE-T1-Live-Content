// const doThings = function() {

// };

function addNumber(num1,num2) {
    var sum = num1 + num2
    // console.log(sum)
    return sum
}

// This does not work because sum only exists in the function
// console.log(sum);

addNumber // reference to a function (no ()s)
console.log(addNumber) // print a "string representation" of the function (you are passing the function itself to console.log)
addNumber(1,3) // invoking the function (notice the ()s)
var result = addNumber(1,3) // store the output (return) for later use
console.log(result)
var number = 5
var number2 = 3
console.log(addNumber(number, number2))
// We can't use the result of the invocation above
// because it was not stored anywhere