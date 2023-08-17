const consoleSomething = function() {
  console.log('Hello!');
  //...
  //...
  const thing = 'thing';
};

const roster = [
  { name: 'Brian', age: 45 },
  { name: 'Jessica', age: 24 },
  { name: 'Tony', age: 34 },
  { name: 'Frank', age: 52 },
  { name: 'Lisa', age: 31 },
  { name: 'Alex', age: 29 }
];

function sortBrackets(personRoster) {
  // Bracket for people 35 and below
  const bracketOne = [];

  // Bracket for people over 35
  const bracketTwo = [];

  // Loop over the roster and for each person:
  for (var i = 0; i < personRoster.length; i++){
  // - if their age is less than or equal to 35,
  //   add them to bracket one
    if(personRoster[i].age <= 35){
      bracketOne.push(personRoster[i]);
    } else {
      bracketTwo.push(personRoster[i]);
    }
  }

  return {
    bracket35AndBelow: bracketOne, 
    bracketAbove35: bracketTwo
  };
}

consoleSomething();

function newFunction(p1, p2) {

}

