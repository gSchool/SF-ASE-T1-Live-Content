const people = [
  "John Smith","Emily Johnson","David Davis","Sarah Lee","Michael Brown",
  "Galadriel Starlight","Frodo Baggins","Arya Stark","Darth Vader","Leia Skywalker",
  "Neo Anderson","Trinity Moss","Bilbo Baggins","Hermione Granger","Jon Snow",
  "Daenerys Targaryen","Luke Skywalker","Princess Zelda","Arthur Dent","Ford Prefect",
  "Gandalf Grey","Harry Potter","Walter White","Jesse Pinkman","Hannibal Lecter",
  "Ellen Ripley","Rick Sanchez","Morty Smith","Cthulhu R'lyeh"
];
// Create a function that will fill a vehicle with a subset of people//// this function should have two parameters: a start index and an end index
function peopleInVehicle (startIndex, endIndex) { // stindex and endex? :D
// this function should return a new array that has all the names from the people array that are found between the start and the end.
    //create a array to hold values through startIndex to endIndex
    let peopleInCar;
    if(endIndex === undefined){
      //continue
      peopleInCar = people.slice(startIndex);
      //return peopleInCar;
    } else {
      peopleInCar = people.slice(startIndex, endIndex + 1);
    }
    //return a new array from the inputted startIndex to the inputted endIndex
    //how do we get values from startIndex to endIndex 
    //array: people[startIndex] - first value 
    //       people[endIndex] - end value of array
    //how do we get ALL the values between 
    
    return peopleInCar;
  }



// Some examples:
console.log(peopleInVehicle(0,2))//output should be ["John Smith", "Emily Johnson", "David Davis"]
console.log(peopleInVehicle(5,7)) //output should be ["Galadriel Starlight", "Frodo Baggins", "Arya Stark"]
console.log(peopleInVehicle(0)) // output should be the ENTIRE array

// Stretch goal: allow for the end index parameter to be omitted (undefined)
// and default it to the end of the people array if omitted

// Dial it to 11: don't use any built in methods
