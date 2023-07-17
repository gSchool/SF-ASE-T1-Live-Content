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
  {"id":"d0491f83-7c18-4701-8e7f-786ece846ed0","title":"The Quest Beyond Time","genres":["Action"],"release":2007,"director":"Leonore Sugar","actors":["Ines McRinn","Georas Norwich","Abigale Jarrette","Feodor Hartzogs"],"rating":2.3,"tagline":"Prepare for the ultimate adventure beyond your wildest dreams!"},
  {"id":"9201e92c-9ef5-4e73-b485-6c6595535aca","title":"Takeout: The Tough's Choice","genres":["Crime","Drama","Mystery","Thriller"],"release":2002,"director":"Grantley Broadstock","actors":["Hermy Springtorpe","Ninette Murfett","Berny Waitland","Zechariah Greaser"],"rating":3.4,"tagline":"When the going gets tough, the tough order takeout."},
  {"id":"4f94c9a3-e8ef-40d5-b3c5-ea9eb1a1e373","title":"Rom-Com: Believe with Caution","genres":["Drama"],"release":2011,"director":"Bartholomeus Janota","actors":["Hillier Wilbore","Cointon Meechan"],"rating":4.1,"tagline":"A romantic comedy that will make you believe in love... but only if you're gullible."},
  {"id":"512ae958-6f74-4d85-bb9d-3aac360d26d9","title":"Intrigue and Pizza Coupons","genres":["Drama"],"release":1998,"director":"Madella Botham","actors":["Barbee Bradwell","Debee Brinkley","Aylmar Desbrow","Ulrika Enefer"],"rating":3,"tagline":"A gripping tale of intrigue, betrayal, and missing pizza delivery coupons."},
  {"id":"1bda5c1a-d9c8-4e5a-9dfa-210667596859","title":"Love, Betrayal, and the Ex","genres":["Comedy"],"release":2009,"director":"Minni Hofner","actors":["Quill Panswick","Burgess Sycamore","Boot Moquin","Prue Fey"],"rating":3.7,"tagline":"An epic tale of love, betrayal, and a really clingy ex."},
  {"id":"a3e5a009-8bc6-45eb-b9bf-c9ab199aac78","title":"Contractually Obligated Sequel","genres":["Comedy","Musical","Romance","War"],"release":1998,"director":"Prinz Housen","actors":["Birch Scothorn","Padriac Lind","Wittie Reggio","Paulo Somerton"],"rating":3.6,"tagline":"The sequel nobody wanted, but we made it anyway because we're contractually obligated."},
  {"id":"ca4f689b-0d89-4473-9a01-9dfad8ca2c62","title":"Fear the Ice Cream Truck Jingle","genres":["Drama"],"release":2009,"director":"Brant Couroy","actors":["Uriah Kunzler","Katusha Hounsom"],"rating":2.2,"tagline":"This summer, forget about the heat. Fear the ice cream truck jingle!"},
  {"id":"22596704-dfc5-4d69-aa25-7c526764b8db","title":"City Chaos: Stove's Lasting Flame","genres":["Comedy","Romance"],"release":2009,"director":"Margy Yankin","actors":["Cirillo Coghlin","Marc Tidridge","Asia Covey","Linc Gilbertson","Winn Garrioch"],"rating":1.3,"tagline":"In a world of chaos, one person will rise... and then realize they left the stove on."},
  {"id":"5a00b079-b97b-4ac9-b497-55162b7e4e0a","title":"Twists, Turns, and Plotline Confusion","genres":["Western"],"release":1995,"director":"Sukey Trayling","actors":["Pandora Baldocci","Taite Walkinshaw"],"rating":2.7,"tagline":"Get ready for a wild ride through a labyrinth of twists, turns, and really confusing plotlines."},
  {"id":"86b9a5e9-c17a-4f3b-9c64-3609a61db688","title":"Haunted House Bills","genres":["Horror","Thriller"],"release":2006,"director":"Kerk Goodinson","actors":["Patty Hulmes","Owen Yellowlea","Aubrey Jopson"],"rating":3.2,"tagline":"The only thing scarier than the haunted house is the mortgage payments."}
];

// Write a function that takes a single movie object as an argument
// and prints as much of the details of that movie as possible.
function printMovieDetails(movie){
  var movieID = movie.id;
  console.log('Movie ID:', movieID, '\nTitle:', movie.title);
  // console.log('Title:', movie.title); // This also works
  let genreBuffer = movie.genres.join(" and ");
  console.log("Genres:", genreBuffer);

  let printGenres = 'Genres: ';
  for (var i = 0; i < movie.genres.length; i++) {
    if(i === movie.genres.length - 1){
      printGenres += movie.genres[i];
    } else{
      printGenres += movie.genres[i] + ' and ';
    }

    // Same thing but check the opposite to avoid
    // repeating some code
    // printGenres += movie.genres[i];
    // if(i !== movie.genres.length - 1) {
    //   printGenres += ' and ';
    // }
  }
  console.log(printGenres);
  
  // console.log('Genres:' movie.genres[0] 'and' movie.genres[1] )
}

var movieToPrint = movies[1];
printMovieDetails(movieToPrint);
// Movie ID: id-of-the-movie-being-printed
// Title: title-of-the-movie
// Genres: genre1 and genre2 and etc...