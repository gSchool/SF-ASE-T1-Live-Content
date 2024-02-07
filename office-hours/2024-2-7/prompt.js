// Create a calculator function
function calculator(num1, num2, operator) {
// it should accept two numbers and an operation string ("+","-","*","/")
console.log(num1, operator, num2);

if(operator === "+") {
  return num1 + num2;
}
else if(operator === "-"){
  return num1 - num2;
}
else if(operator === "*"){
  return num1 * num2;
}
else if(operator === "/"){
  return num1 / num2;
}
else{
  return "unexpected operator";
}

// it should output the result of the calculation of the numbers,
// based on the operation given
switch(operator) {
  case "+":
    return num1 + num2;
  case "-":
    return num1 - num2;
  case "*":
      return num1 * num2;
  case "/":
      return num1 / num2;
  default:
    return "unexpected operator";
}
// examples: 
// provided with 2, 3, and "+" the function should output 5
// provided with 10, 5, and "/" the function should output 2
}
console.log("=", calculator(2, 3, "+"));
console.log("=", calculator(2, 3, "/"));
console.log("=", calculator(2, 3, "-"));
console.log("=", calculator(20, 3, "*"));