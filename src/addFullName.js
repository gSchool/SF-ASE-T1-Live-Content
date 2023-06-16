

let fruits = ["apples", "cucumbers", "potatoes"];

// Apples
fruits[0];

// First Name from object
// person2["firstName"];


let property = "age";

// Doesn't work
// person2[age];

// Does work
// person2[property];

// Dot notation is preffered.
// person2.age;

let person2 = {
    firstName: "Bob",
    lastName: "Martin",
    age: 50
}

var person = {
    firstName: 'Jade',
    lastName: 'Smith'
};

addFullNameProperty(person);
addFullNameProperty(person2);
console.log(person.fullName); // --> 'Jade Smith'

function addFullNameProperty(personToUpdate) {
    // let personToUpdate = <WHATEVER I AM PASSED>;
    console.log(`Hello ${personToUpdate.firstName}, I see you are a ${personToUpdate.lastName}.`)
    console.log("Hello " + personToUpdate.firstName + " , I see you are a " + personToUpdate.lastName + ".");
    personToUpdate.fullName = `${personToUpdate.firstName} ${personToUpdate.lastName}`;
    personToUpdate.fullName = personToUpdate.firstName + " " + personToUpdate.lastName;
    console.log(personToUpdate);
    // person.fullName = firstName + lastName;
}
