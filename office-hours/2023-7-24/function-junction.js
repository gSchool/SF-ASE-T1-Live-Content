function giveMeFive() {
  return 5;
}

function giveMeTen() {
  // const f = giveMeFive();
  // return f + f;

  return giveMeFive() + giveMeFive();
}

giveMeFive();
const five = giveMeFive();
console.log(five);

const ten = giveMeTen();
console.log(ten);