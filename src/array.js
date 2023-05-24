let myVal = "something"
let myArray = ["string", 6, true, { key: ["innerArray"] }, () => { }, undefined, myVal];

// if (myArray[0] === "string") {
//     console.log(`it equals true!`)
// }
// let i = 6;
// if (myArray[i] === "something") {
//     console.log(`Also true.`)
// }

for (let i = 0; i < myArray.length; i += 2) {
    // console.log(myArray[i]);
}
const valu = myArray[3].key[0]
// console.log(valu);
// if (valu === "innerArray") {
//     console.log(`correct!`)
// }

let veggies = [{}]
let veggie = {kind: "Carrot", weight: 12, season: ["summer","fall"]};
veggies.push(veggie);
let veggie2 = {kind: "Potato", weight: 12, season: ["summer","fall"]};
veggies.push(veggie2);
const newValu = veggies[1].season[1];
// console.log(newValu)
// if (newValu == "fall") {
//     console.log(`New Value is correct!`);
// }
for (let i = 0; i < veggies.length; i++) {
    const veggie2 = veggies[i]
    // if (veggie2.kind == undefined) continue;
    // console.log(veggie2.kind);

    if (veggie2.kind) console.log(veggie2.kind);
}