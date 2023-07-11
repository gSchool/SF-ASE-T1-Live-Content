/*
 * id - unique identifier for the person.
 * first_name - given name of the person.
 * last_name - surname of person.
 * employer - (if present) id for the company this person works for.
 */
const people = [
  {"id":"a63f5a44-5166-4835-972d-55c4ee20e41e","first_name":"Shanie","last_name":"Sneezem"},
  {"id":"929da6f2-a1fe-4c55-84c7-122e03224286","first_name":"Alisha","last_name":"Harnell"},
  {"id":"a58e3674-8811-48eb-a90b-8c1ff89ff2b8","first_name":"Emiline","last_name":"Alyokhin"},
  {"id":"414c1d21-1ec5-48a5-bf7d-b1c46cca128b","first_name":"Michaelina","last_name":"Cyseley"},
  {"id":"1c576e5d-a622-42ca-8a46-13a14f0aff60","first_name":"Trever","last_name":"Behninck"},
  {"id":"25706870-a265-4c0a-8570-fe8efeb7c566","first_name":"Patience","last_name":"Stoyles"},
  {"id":"b53bcb25-ccc4-4b1f-ba53-e82ff997a9cf","first_name":"Marwin","last_name":"Armsden"},
  {"id":"a2f1f417-afd9-4abc-8f5a-dbb742f6f7fe","first_name":"Amandy","last_name":"Desorts"},
  {"id":"369dc231-fee4-490f-b2e1-fea695cc535f","first_name":"Codi","last_name":"Shiers"},
  {"id":"83ecff24-70dd-40d0-93d4-7ddc29cc9c20","first_name":"Robers","last_name":"Glazier"}
];

/*
* id - unique identifier for the movie.
* title - name of the movie.
* genres - the theatrical categories the movie fits into.
* release - year the movie was released in theatres.
* director - the person that directed the movie.
* actors - set of actors that starred in the movie.
* rating - a qualitative score for the movie between 1 and 5.
* tagline - short description of the movie.
*/
const movies = [
  {"id":"3ce461db-b27b-4fea-80b9-2c49a55ce6d3","title":"Unwanted Sequel Extravaganza","genres":["Drama","Romance"],"release":2008,"director":"a63f5a44-5166-4835-972d-55c4ee20e41e","actors":["929da6f2-a1fe-4c55-84c7-122e03224286","a58e3674-8811-48eb-a90b-8c1ff89ff2b8","414c1d21-1ec5-48a5-bf7d-b1c46cca128b","1c576e5d-a622-42ca-8a46-13a14f0aff60","25706870-a265-4c0a-8570-fe8efeb7c566"],"rating":3.5,"tagline":"The sequel nobody asked for, but we made it anyway because we ran out of ideas."},
  {"id":"fb83c7f0-cb0c-4f28-a5b1-15c0a0618c5c","title":"Mystery of the Endless Popcorn","genres":["Comedy"],"release":1998,"director":"b53bcb25-ccc4-4b1f-ba53-e82ff997a9cf","actors":["a2f1f417-afd9-4abc-8f5a-dbb742f6f7fe","369dc231-fee4-490f-b2e1-fea695cc535f","83ecff24-70dd-40d0-93d4-7ddc29cc9c20","a63f5a44-5166-4835-972d-55c4ee20e41e","929da6f2-a1fe-4c55-84c7-122e03224286"],"rating":1.9,"tagline":"A thrilling mystery that will keep you guessing until the very end... or until the popcorn runs out, whichever comes first."},
  {"id":"4f94c9a3-e8ef-40d5-b3c5-ea9eb1a1e373","title":"Rom-Com: Believe with Caution","genres":["Drama"],"release":2011,"director":"a58e3674-8811-48eb-a90b-8c1ff89ff2b8","actors":["414c1d21-1ec5-48a5-bf7d-b1c46cca128b","1c576e5d-a622-42ca-8a46-13a14f0aff60"],"rating":4.1,"tagline":"A romantic comedy that will make you believe in love... but only if you're gullible."},
  {"id":"2f4a4244-7940-4bf3-8096-9eb6b0efa664","title":"Love and Laughter Limits","genres":["Drama"],"release":2006,"director":"25706870-a265-4c0a-8570-fe8efeb7c566","actors":["b53bcb25-ccc4-4b1f-ba53-e82ff997a9cf","a2f1f417-afd9-4abc-8f5a-dbb742f6f7fe"],"rating":3.2,"tagline":"Love knows no limits, but this rom-com definitely does."},
  {"id":"9ba049d8-1b59-42e5-9dbf-469acc8b61af","title":"Rom-Com, The Oblivious Edition","genres":["Action","Western"],"release":1996,"director":"369dc231-fee4-490f-b2e1-fea695cc535f","actors":["83ecff24-70dd-40d0-93d4-7ddc29cc9c20","a63f5a44-5166-4835-972d-55c4ee20e41e","929da6f2-a1fe-4c55-84c7-122e03224286"],"rating":3.2,"tagline":"Love knows no boundaries, but this rom-com definitely should have some."}
];

function getPersonById(peopleID) {
  for(var i = 0; i < people.length; i++){
    const person = people[i]
    if(peopleID === person.id){
      return person
    }
  }
}

// find movie by id
// get person object for the director of the movie

// create loop to loop over movies
// check if id of current movie matches given movie id

function getDirectorName(movieID){
  for(var i = 0; i < movies.length; i++){
    const movie = movies[i]
    if(movieID === movie.id){

      const director = getPersonById(movie.director)
      return director.first_name + " " + director.last_name;
      // return movie.title
    }
  }
}

const person = getPersonById("a58e3674-8811-48eb-a90b-8c1ff89ff2b8");
console.log(person);

const director = getDirectorName("2f4a4244-7940-4bf3-8096-9eb6b0efa664");
console.log("Director:", director); // "Patience Stoyles"