function getEvens(arrOfNums, tester) {
  const keeps = [];

  for(let i = 0; i < arrOfNums.length; i++) {
    if(tester(arrOfNums[i])) {
      keeps.push(arrOfNums[i]);
    }
  }

  return keeps;
}

function isEven(n) { return (n % 2 === 0) }

const nums = [2, 11, 3, 7, 5, 6];
console.log(getEvens(nums, isEven));

