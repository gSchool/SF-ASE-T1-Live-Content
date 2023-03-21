function modulo(dividend, divisor) {
    // Modulo returns the remainder of a division operation.

    // loop over numbers to determine parts
    let remainder;

    // any number divided by 0 is NaN
    if (divisor === 0) return NaN;

    // 0 divided by any number is 0
    if (dividend === 0) return 0;
    
    // if either number is Nan than the result is NaN
    if (dividend === NaN || divisor === NaN) return NaN;

    // Preserve the sign
    // Case A: dividend = 1;
    // Case B: dividend = -1;
    if (dividend < 0) var Positive = false;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    // for (dividend; dividend < divisor; dividend = dividend - divisor) {
    //     remainder = dividend;
    // }

    let quotient = dividend / divisor
    let integerVal = Math.floor(quotient)
    quotient = quotient - integerVal;
    remainder = dividend - (divisor * integerVal);
    
    if (Positive == false) remainder = remainder * -1;
    return remainder;
}

console.log(`Output Modulo: ${modulo(-14, 5)}`);
console.log(`In-Built Modulo: ${-14 % 5}`);