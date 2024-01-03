const clients = [
  {"balance":720082,"first_name":"Addy","id":6,"credit":7,"last_name":"Wrassell"},
  {"balance":755414,"first_name":"Gardner","id":9,"credit":2,"last_name":"Lowers"},
  {"balance":623008,"first_name":"Pollyanna","id":13,"credit":6,"last_name":"Haysom"},
  {"balance":33389,"first_name":"Nata","id":24,"credit":1,"last_name":"Revitt"},
  {"balance":488592,"first_name":"Melonie","id":34,"credit":6,"last_name":"Ben"},
  {"balance":924596,"first_name":"Clem","id":41,"credit":10,"last_name":"Caras"},
  {"balance":683430,"first_name":"Loretta","id":79,"credit":3,"last_name":"Sparsholt"},
  {"balance":729873,"first_name":"Imojean","id":80,"credit":5,"last_name":"Niave"},
  {"balance":255420,"first_name":"Bev","id":90,"credit":2,"last_name":"Allbut"},
  {"balance":367722,"first_name":"Alasdair","id":103,"credit":6,"last_name":"Goosey"}
];

// This function is broken. Read through the funciton and the tests below
// to determine the problems and fix them.
function filterClients(balanceAbove, balanceBelow) {
  let filteredClients = []; // This needs to be an array because we want a sub-list of clients

  for(let c = 0; c < clients.length; c++) {
    const client = clients[c]; // We think this is good

    if(client.balance > balanceAbove && client.balance < balanceBelow) {
      filteredClients.push(client);
    }
  }
  
  return filteredClients;
}

const test1 = filterClients(300000, 500000);
console.log(test1);

const test2 = filterClients(700000, 1000000);
console.log(test2);