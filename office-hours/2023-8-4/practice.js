const numbers = [1,[2],[3,[[4]]]],
      strings = [[["a"]],[["b"]]],
      numbers2 = [1,[],[3,[[4]]]];

// take an array and return an array of numbers, no matter how deep the numbers are
function flatten(nestedArray) {
  let flattened = [];

  for(let value of nestedArray) {
    if(Array.isArray(value)) {
      flattened = flattened.concat(flatten(value));
    } else {
      flattened.push(value);
    }
  }
 
  return flattened;
}

console.log(flatten(numbers));
console.log(flatten(numbers2));
console.log(flatten(strings));

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
}

const string = "dinosaur";
console.log(string, capitalize(string));
const title = "lord of the rings: the two towers";
console.log(title, title.split(' ').map(capitalize).join(' '));

const simpleNumbers = [1, 2, 3];
console.log(simpleNumbers, simpleNumbers.map(function(n) { return n > 2; }));
