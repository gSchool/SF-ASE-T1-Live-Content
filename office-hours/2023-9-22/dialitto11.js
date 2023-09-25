// Dial it to 11: don't use any built in methods
// Authored by Laurie, Rachel, Josh, Beckham, Denise (in spirit)
const people = [
  "John Smith","Emily Johnson","David Davis","Sarah Lee","Michael Brown",
  "Galadriel Starlight","Frodo Baggins","Arya Stark","Darth Vader","Leia Skywalker",
  "Neo Anderson","Trinity Moss","Bilbo Baggins","Hermione Granger","Jon Snow",
  "Daenerys Targaryen","Luke Skywalker","Princess Zelda","Arthur Dent","Ford Prefect",
  "Gandalf Grey","Harry Potter","Walter White","Jesse Pinkman","Hannibal Lecter",
  "Ellen Ripley","Rick Sanchez","Morty Smith","Cthulhu R'lyeh"
];

function peopleInVehicle(startIndex, endIndex) { // stindex and endex? :D
  let addPeople = [];

  if (endIndex < startIndex) {
    // throw new Error('End index must be greater than start index.');
    // return;
    // return addPeople;
    return "error"
  }

  // if(endIndex === undefined)
  let end = endIndex;
  if (!endIndex) {
    console.log('Hello');
    // for (let i = startIndex; i < people.length; i++) {
    //   addPeople.push(people[i])
    // }
    end = people.length - 1;
  }

  for (let i = startIndex; i <= end; i++) {
    addPeople.push(people[i]);
  }

  return addPeople;
}

console.log(peopleInVehicle(4, 6));
console.log(peopleInVehicle(4));