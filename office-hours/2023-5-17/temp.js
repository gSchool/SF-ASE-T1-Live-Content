{
    let aNumber;
    var name;
    const alchemist = "";
    let object = {};
}
let i = 2;
{
    // console.log(array[i]);
}

let faveColor = {Ivy: "Pink", Laurie: "Purple", Saajid: "Red"}
console.log(faveColor.Ivy);
console.log(faveColor.Laurie);
console.log(faveColor.Shalini = "Green");
console.log(faveColor);

for (let key in faveColor) {
    console.log(`${key}: ${faveColor[key]}`);
}



const array = [1,2,3];
// The arguements to a function initialize the parameters as variables in the scope of the function.
function adder(inputArray) {
    let sum = 0;
    
    for (const element of inputArray) {
        sum += element;
    }
    return sum;
}

console.log(adder(array));



let secondSun = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    secondSun += element;
}