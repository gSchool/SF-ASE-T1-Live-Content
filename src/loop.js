const numbers = [
    [-4, 2, 1],
    [0, -1, 2],
    [2, 2, 3]
  ];
// let i = 0;
//   console.log(numbers[i][0])
//   i = i + 1;
//   console.log(numbers[i][0])
//   i = i + 1;
//   console.log(numbers[i][0])

//   console.log(numbers[0])

function addNestNumbers(inputArray, index) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        // let numberArray = inputArray[i];
        sum += inputArray[i][index];
    }
    return sum;
}

console.log(addNestNumbers(numbers, 2));

function createTodo(message) {
    return {message: message, isCompleted: false}
}

console.log(createTodo("My Message"));


