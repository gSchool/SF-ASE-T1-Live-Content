/*
 * vin - unique identifier for the vehicle.
 * color - The physical color of the vehicle.
 * make - Manufacturer of the vehicle.
 * model - The model name of the vehicle.
 * year - The year the vehicle was manufactured.
 * maxSpeed - The top speed of the vehicle.
 */
const vehicles = [
  {"vin":"WVGAV7AX9CW672131","color":"Puce","make":"GMC","model":"Jimmy","year":1999,"maxSpeed":277},
  {"vin":"1HGCP2F37AA685147","color":"Crimson","make":"Rolls-Royce","model":"Phantom","year":2010,"maxSpeed":108},
  {"vin":"3C6JD7BP6CG981499","color":"Fuscia","make":"Ford","model":"Explorer","year":1996,"maxSpeed":131},
  {"vin":"1G6DP1E34D0881994","color":"Violet","make":"Buick","model":"Electra","year":1987,"maxSpeed":198},
  {"vin":"5XYZG3AB9BG567289","color":"Goldenrod","make":"Ford","model":"E150","year":1984,"maxSpeed":269}
];

/*
* id - unique identifier for the report.
* vin - Id of the vehicle involved in the accident.
* date - When the incident happened.
* description - Short explanation of the incident.
*/
const accidents = [
  {"id":"116ce83e-828d-4784-ae78-b3e5f5477408","vin":"WVGAV7AX9CW672131","date":"2/22/2017","description":"My car got caught in a 'renaissance revelry' as performers danced around it, leaving behind a pattern of footprints and a dent on the hood."},
  {"id":"6b818270-7b8f-4352-84ea-d31773a16ea6","vin":"1HGCP2F37AA685147","date":"7/31/2006","description":"While superheroes were investigating a 'phantom ghost swarm,' my car experienced a 'ghostly encounter dent' with an otherworldly apparition."}
];

// How far a car must travel in order to win
const finishLine = 1000;

// DONE - figure out how to keep track of the distance each vehicle has traveled
// DONE - iterate and each iteration increase the distance each vehicle has traveled using some magic formula (see requirements)
// DONE - after increasing everyone's distance, check if anyone has traveled to the finish line (the distance is >= finishLine)
// DONE - track which vehicles reached the finish line
// DONE - if more than one has crossed the finish line, determine who traveled the furthest
// print out the results of the race

// const progress = {
  // "WVGAV7AX9CW672131": 0,
  // "1HGCP2F37AA685147": 0,
  // "3C6JD7BP6CG981499": 0,
  // "1G6DP1E34D0881994": 0,
  // "5XYZG3AB9BG567289": 0
// }

// If we wanted to be more flexible
// we could dynamicall build the progress object
// for(let vehicle of vehicles) {
//   progress[vehicle.vin] = 0;
// }

// const progress = [
//   { "vin": "WVGAV7AX9CW672131", "distance": 0 }
// ];

// inputs: array of current distances, a collection of vehicles
// output: new array of distances
function moveForward(currentDistances, vehicles) {
  const newDistances = [];

  for(let v = 0; v < vehicles.length; v++) {
    const vehicle = vehicles[v];
    newDistances[v] = (currentDistances[v] || 0) + Math.round(vehicle.maxSpeed * Math.random());
  }

  return newDistances;
}

// inputs: array of vehicle indexes for the vehicles that have finished, array of distances travels (ordered by vehicle index)
// output: index of the vehicle that won the race
function getWinner(finishedIndexes, distances) {
  if(finishedIndexes.length === 1) {
    return finishedIndexes[0];
  } else {
    let indexWithMost = finishedIndexes[0];
    for(let f = 1; f < finishedIndexes.length; f++) {
      if(distances[finishedIndexes[f]] > distances[indexWithMost]) {
        indexWithMost = finishedIndexes[f];
      }
    }
    return indexWithMost;
  }
}

const vehiclesFinished = [];
let progress = [];

let raceOver = false;
while(!raceOver) {
  progress = moveForward(progress, vehicles);

  // You could probably put this in a function too
  for(let v = 0; v < vehicles.length; v++) {
    if(progress[v] >= finishLine) {
      raceOver = true;
      vehiclesFinished.push(v);
    }
  }
}

const winner = getWinner(vehiclesFinished, progress);

console.log(progress, vehiclesFinished, winner);

console.log("-------------------------------------");
console.log("|              WINNER               |");
console.log("-------------------------------------");
const winnerVehicle = vehicles[winner];
console.log("     ", winnerVehicle.color, winnerVehicle.make, winnerVehicle.model, "     ");
console.log("-------------------------------------");
for(let v = 0; v < vehicles.length; v++) {
  const vehicle = vehicles[v];
  console.log( vehicle.color, vehicle.make, vehicle.model, "traveled", progress[v], "distance units", (v === winner ? "(WINNER)" : ""),);
  console.log("-------------------------------------");
}



