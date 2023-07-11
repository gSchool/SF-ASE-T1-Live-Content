function modulo(num1, num2) {
    // your code here
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return NaN;
    if(num1 === 0) return 0;
    if(num2 === 0) return NaN;
    let remainder = Math.abs(num1);
    let isNegative = false;
    if(num1<0){
        if(num2>0) isNegative = true;
    }else{
        if(num2<0) isNegative = true;
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(remainder>=num2)
    {
        remainder-= num2;
    }
    if(isNegative) return -remainder;
    return remainder;
  }

// console.log(modulo(5, -2));
