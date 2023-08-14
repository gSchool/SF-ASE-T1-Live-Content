const roster = [
  { name: 'Brian', age: 45 },
  { name: 'Jessica', age: 24 },
  { name: 'Tony', age: 34 },
  { name: 'Frank', age: 52 },
  { name: 'Lisa', age: 31 },
  { name: 'Alex', age: 29 }
];

// Bracket for people 35 and below
const bracketOne = [];

// Bracket for people over 35
const bracketTwo = [];

function bracketByAge() {
  // Loop over the roster and for each person:
  for (var i = 0; i < roster.length; i++){
  // - if their age is less than or equal to 35,
  //   add them to bracket one
    if(roster[i].age <= 35){
      bracketOne.push(roster[i]);
    } else {
      bracketTwo.push(roster[i]);
    }
  }
}

bracketByAge();
console.log(bracketOne, bracketTwo);