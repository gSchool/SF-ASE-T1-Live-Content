function isOddWithoutModulo(num) {
  // your code here
  // with the (THIS THIS SHOULD NOT BE USED)
  // This confirms what we want to do
  let n = num;
  
  if(n < 0) {
    n = n * -1;
  }
  
  while(n > 1) {
    n = n - 2;
  }

  // if(n === 1) {
  //     return true;
  // } else {
  //     return false;
  // }
  
  return n === 1;
  
//   return isOddWithoutModulo(num / 2)
}