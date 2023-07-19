/*
 * id - unique identifier for the person.
 * first_name - given name of the person.
 * last_name - surname of person.
 * employer - (if present) id for the company this person works for.
 */
const people = [
  {"id":"222b6ae1-2123-4bad-b25c-f15e73efff28","first_name":"Helaine","last_name":"Branthwaite"},
  {"id":"8b635247-2707-44e9-8d35-2df3adef1d6d","first_name":"Anastassia","last_name":"Case"},
  {"id":"82c2ce2e-13ec-4363-925a-d6af840e76ff","first_name":"Elli","last_name":"Cazereau"},
  {"id":"0a48d15f-e5e4-4b50-ba49-1012eb132cbb","first_name":"Karol","last_name":"Gunningham"},
  {"id":"8af39420-2525-4f76-ae6c-61787feebfb9","first_name":"Jaquenetta","last_name":"Wonfor"},
  {"id":"a4030623-cf79-4230-9efb-34a3f2a26a9e","first_name":"Kriste","last_name":"Conboy"},
  {"id":"ae6f1949-b363-47a8-a480-8c0762b09d05","first_name":"Frederigo","last_name":"Bufton"},
  {"id":"069f4a6b-e852-4898-a967-bea1256a498e","first_name":"Arlen","last_name":"Sentinella"},
  {"id":"c73e86a8-7828-49a4-a466-db7f6d327c65","first_name":"Merilyn","last_name":"Lambourn"},
  {"id":"6f2f4c16-90d0-4e8e-80f1-33bfbd77d441","first_name":"Johnathon","last_name":"Realy"}
];

/*
* id - employee number
* payrate - per-hour compensation for the employee
* paytype - the accrual mechanism for the employee's compensation - either salary or hourly.
* details - (if present) id for the people record that holds more details about the employee.
*/
const employees = [
  {"id":108,"payrate":35.29,"paytype":"hourly","details":"222b6ae1-2123-4bad-b25c-f15e73efff28"},
  {"id":41,"payrate":29.86,"paytype":"salary","details":"8b635247-2707-44e9-8d35-2df3adef1d6d"},
  {"id":269,"payrate":49.87,"paytype":"salary","details":"82c2ce2e-13ec-4363-925a-d6af840e76ff"},
  {"id":4,"payrate":42.88,"paytype":"hourly","details":"0a48d15f-e5e4-4b50-ba49-1012eb132cbb"},
  {"id":107,"payrate":15.98,"paytype":"salary","details":"8af39420-2525-4f76-ae6c-61787feebfb9"},
  {"id":480,"payrate":23.69,"paytype":"hourly","details":"a4030623-cf79-4230-9efb-34a3f2a26a9e"},
  {"id":425,"payrate":43.49,"paytype":"salary","details":"ae6f1949-b363-47a8-a480-8c0762b09d05"},
  {"id":495,"payrate":30.95,"paytype":"salary","details":"069f4a6b-e852-4898-a967-bea1256a498e"},
  {"id":267,"payrate":35.86,"paytype":"salary","details":"c73e86a8-7828-49a4-a466-db7f6d327c65"},
  {"id":304,"payrate":25.85,"paytype":"hourly","details":"6f2f4c16-90d0-4e8e-80f1-33bfbd77d441"}
];

// given an employee id, print out the employee's name and paytype
// Example:
// Helaine Branthwaite - Hourly

// a function that takes in employee id
// Inside of the function:
// search over employees to find the employee object for the given employee id
// store the details value from the found employee in a variable
// search over people to find the person with the same id as the details value from from the found employee
// store the first and last from the found person in a couple variables
// print the person's full name from the person object and the paytype from the employee object







