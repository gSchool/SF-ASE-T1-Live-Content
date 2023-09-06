let thing = "a string";
thing = "new string";

// function definition
// self-contained block of code that can be invoked later, on demand
// function input: what data does my function take in, this includes 
// the name, data type, and usage within the function
function addTwo(/* parameters */ x, y) {
  // This is the function body, which a "code block"
  console.log('Hello World', x, y);

  // output data for use after the invocation of this function
  return x + y;
}

console.log('hello world');

// functions differ from if statements
// because if (else if, else) code blocks
// are executed because their condition is true
// NOT on demand
if(8 > 9) {
  console.log('hello world');
}

// functions differ from loops
// because loops execute code inline
// a certain number of times
for(let i = 0; i < 5; i++) {
  console.log('hello world');
}

// Invocation (calling the function, a call)
addTwo(/* arguments */ 1, 2);

// pass the returned value from the addTwo invocation
// as the argument for the log function
console.log(addTwo(/* arguments */ 3, 6));

// We can do the same thing like this:
const sum36 = addTwo(/* arguments */ 3, 6);
console.log(sum36);
