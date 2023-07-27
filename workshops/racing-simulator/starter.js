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

const finishLine = 1000;