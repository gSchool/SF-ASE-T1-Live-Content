let character = {

}

let enemy = {
    attack: 25,
    health: 50
}

let attackers = [];

const baseCharacter = {
    health: 100,
    mana: 100
}

const charOffset = {
    mage: [-50, 50],
    warrior: [50, -50]
}

// const mageOffset = {
//     health: -50,
//     mana: 50
// }

// const warriorOffset = {
//     heath: 50,
//     mana: -50
// }
const charOffsets = [
    {
        identifier: "classMage",
        className: "Mage",
        health: -50,
        mana: 50 
    },
    {   
        identifier: "classWarrior",
        className: "Warrior",
        health: 50,
        mana: -50
    }
]


function createCharacter(name, charClass) {
    if (!name) return "You must provide a name";
    if (!charClass) return "You must provide a class";
    let player = "Tiffany";
    character.name = name;
    character.classIdentifier = charClass;
    character.health = baseCharacter.health;
    character.mana = baseCharacter.mana;
    for (let charOffset of charOffsets) { 
        if (charOffset.identifier == charClass) {
            character.className = charOffset.className;
            character.health += charOffset.health;
            character.mana += charOffset.mana;
            return;
        }
    }
    return "OH NO THERE WAS AN ERROR";

}

createCharacter("Conan", "classWarrior")
console.log(character);

for (let x = 0; x < charOffsets.length; x++) {
    let charOffset = charOffsets[x];

}