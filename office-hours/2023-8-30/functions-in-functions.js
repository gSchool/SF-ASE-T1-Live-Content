function giveMeANumber(multiplier) {
  return 5 * multiplier;
}

const fiveMultiple = 5;
const anotherFive = fiveMultiple;
const twentyfive = giveMeANumber(anotherFive);

function giveMeAString(numToMultipleByFive) {
  const argumentToPass = numToMultipleByFive;
  const fifty = giveMeANumber(argumentToPass);
  return "hello!" + giveMeANumber();
}

console.log(giveMeAString(10));