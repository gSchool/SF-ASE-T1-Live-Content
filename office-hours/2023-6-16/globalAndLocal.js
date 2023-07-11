let character = {

}
// Reach can be one of: Close, Short, Medium, Long
let weapons = [
    {
        identifier: "weaponSword",
        displayName: "Sword",
        damageType: "cutting",
        reach: "close",
        energyCost: "medium",
        minimumDamage: 12,
        maximumDamage: 15
    },
    {
        identifier: "weaponThrowingKnife",
        displayName: "Throwing Knife",
        damageType: "piercing",
        reach: "short",
        energyCost: "small",
        minimumDamage: 4,
        maximumDamage: 8
    }
]
let enemy = {
    attack: 25,
    health: 50
}

let attackers = [];

const baseCharacter = {
    health: 100,
    mana: 100,
    energy: 100
}

const charOffsets = [
    {
        identifier: "classMage",
        className: "Mage",
        health: -50,
        mana: 50,
        energy: -50
    },
    {
        identifier: "classWarrior",
        className: "Warrior",
        health: 50,
        mana: -50,
        energy: 50
    },
    {
        identifier: "classJester",
        className: "Jester",
        health: 0,
        mana: 25,
        energy: 25
    }
]

function createCharacter(name, charClass) {
    if (!name) return "You must provide a name";
    if (!charClass) return "You must provide a class";
    character.name = name;
    character.inventory = [];
    for (let charOffset of charOffsets) {
        if (charOffset.identifier == charClass) {
            character.className = charOffset.className;
            character.health = baseCharacter.health + charOffset.health;
            character.mana = baseCharacter.mana + charOffset.mana;
            character.energy = baseCharacter.energy + charOffset.energy;
            return;
        }
    }
    return "OH NO THERE WAS AN ERROR";

}

function addToInventory(character, weapon, quantity) {
    for (var i = 0; i < weapons.length; i++) {
        if (weapons[i].identifier == weapon) {
            let newInventoryEntry = {};
            newInventoryEntry.item = weapons[i];
            newInventoryEntry.quantity = quantity;
            character.inventory.push(newInventoryEntry);
        }
    }
    return character;
}

createCharacter("Conan", "classWarrior")
character = addToInventory(character, "weaponSword", 1)
console.log(character);

