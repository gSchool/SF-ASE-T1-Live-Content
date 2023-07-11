let myPet = {
    name: "Jimmy",
    species: {
        kind: "Dog",
        breed: "Malamute"
    },
    age: 5, 
    hungry: true,
    training: {
        sit: true,
        stay: false,
        shake: true,
        rollover: true
    }
}
let trickCheck = "sit";
if (myPet["training"]["stay"]) console.log("Pet Will Stay");
if (myPet.training.rollover) console.log("Pet can rollover"); 
if (myPet.training[trickCheck]) console.log("Pet can sit");

function Ok(value) {
    if (value instanceof Error) return false;
    if (typeof value == "undefined") return false;
    return true
}

function buildPetProfile(name, kind, breed, age, hungry, sit, stay, shake, rollover) {
    let petProfile = {};
    if (typeof name !== "string" && name) return new Error(`Name must be a string, recieved: ${name}`) 
    if (typeof kind !== "string" && kind) return new Error(`Kind must be a string, recieved: ${kind}`) 
    if (typeof breed !== "string" && breed) return new Error(`Breed must be a string, recieved: ${breed}`) 
    if (typeof age !== "number") return new Error(`Age must be a string, recieved: ${age}`) 
    petProfile.name = name;
    petProfile.species = {kind: kind, breed: breed};
    petProfile.age = age;
    petProfile.hungry = hungry;
    petProfile.training = {
        sit: sit,
        stay: stay,
        shake: shake,
        rollover: rollover
    };
    return petProfile;
}

const value = buildPetProfile("Max", "Bunny", "Flemmish Giant", "2", true, true, false, false, false);
if (Ok(value)) {
    console.log(value); 
} else {
    // Handling an error..
    winston.send(value)
}
let secondPet = {};

secondPet.name = "Bandit";
secondPet.species = {kind: "Cat", breed: "Persian"};
secondPet.age = 4;
secondPet.hungry = false;
secondPet.training = {};
secondPet.training.sit = false;
secondPet.training.stay = true;
secondPet.training.shake = false;
secondPet.training.rollover = true;


// console.log(myPet)
// console.log(secondPet)

let allPets = [];
allPets.push(myPet, secondPet);

for (let i = 0; i < allPets.length; i++) {
    console.log(allPets[i].name);
}

for (const pet of allPets) {
    console.log(pet.name);
}












