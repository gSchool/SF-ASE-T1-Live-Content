/*
 * id - unique identifier for the person.
 * first_name - given name of the person.
 * last_name - surname of person.
 * employer - (if present) id for the company this person works for.
 */
const people = [
    {},
    {"id":"ea9cd5b3-78c0-4e3a-929b-30e4d422a4f5","first_name":"Georgiana","last_name":"Voelker"},
    {"id":"8519cdd4-b6af-4a37-bcaa-3fc74578188a","first_name":"Fionna","last_name":"Friel"},
    {"id":"a0882676-66f2-4754-be6d-066eabddbcae","first_name":"Hyacinthie","last_name":"Whooley"},
    {"id":"dc201ab4-8da6-475f-aa6c-a52d5221d345","first_name":"Casper","last_name":"O'Loghlen"},
    {},
    {"id":"ab8a80a6-214e-4593-a2ca-f49ec0442a81","first_name":"Hilliard","last_name":"Addlestone"},
    {"id":"162ce33e-ce66-4cf8-aeef-48188b134d2c","first_name":"Weider","last_name":"De Gouy"},
    {"id":"f86c3969-bacc-4301-9c2f-b601dbd281e5","first_name":"Petr","last_name":"Smail"},
    {"id":"dd64e23e-437a-44be-b8c2-1e99b8334de6","first_name":"Kerwin","last_name":"Saphin"},
    {},
    {"id":"01f968cf-6216-46c1-b04c-530b0e1cb8c0","first_name":"Pamelina","last_name":"Pescott"},
    {"id":"ea1c7787-391a-4369-b35d-291ee9e16b5e","first_name":"Neille","last_name":"Ruggiero"},
    {}
];

// create a function that accepts a single person object and prints the full name
// DO NOT print anything if the object does not have first and last name
function printFullName(person){
    if(person.first_name && person.last_name) console.log(person.first_name, person.last_name);

    // if(person.first_name === undefined || person.last_name === undefined) {
    //     return;
    // } 
    // else {
    //     console.log(person.first_name, person.last_name);
    // }

    // console.log(person.first_name, person.last_name);

}
// var whateverwewant = people[0];
// printFullName(whateverwewant); // Georgiana Voelker

// loop over all the people and use the print function to print ALL the full names
for (var i = 0; i < people.length; i++) {
    // const person = people[i];
    // printFullName(person);
    printFullName(people[i]);
}
