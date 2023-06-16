function modulo(dividend, divisor) {

    let remainder;
    let isNegative = false;

    if (divisor === 0) return NaN;

    if (dividend === 0) return 0;

    if (dividend === NaN || divisor === NaN) return NaN;

    if (dividend < 0) isNegative = true;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    // for (dividend; dividend < divisor; dividend = dividend - divisor) {
    //     remainder = dividend;
    // }

    // Dividend = 5
    // Division = 2
    // quoteint = 2.5
    let quotient = dividend / divisor;
    // integerVal = 2
    let integerVal = Math.floor(quotient);
    // remiander = 1 (5 - (2 * 2))
    remainder = dividend - (divisor * integerVal);

    if (isNegative) return -remainder;
    return remainder;
}
const externDividend = -14;
const externDivisor = 5;
console.log(`Output Modulo: ${modulo(externDividend, externDivisor)}`);
console.log(`In-Built Modulo: ${externDividend % externDivisor}`);