// do not modify this array
const dinosaurData = [
    // [name, species, age]
    ['jerry', 'rex', 25],
    ['mary', 'tops', 20],
    ['stan', 'stego', 34]
];

// do not rename or move this array: the tests expect it to exist here
let dinosaursCollection = [];

function addDinosToCollection2(dinos) {
    // We expect that 'dinos' is an array
    for (const dino of dinos) {
        dinosaursCollection.push({
            name: dino[0],
            species: dino[1],
            age: dino[2]
        });
    }
}

function addDinosToCollection() {

    for (var i = 0; i < dinosaurData.length; i++) {
        const dino = dinosaurData[i];
        var Name = dino[0];
        var Species = dino[1];
        var Age = dino[2];
        var dinoObj = {
             name: Name,
             species: Species,
             age: Age
        }
        dinosaursCollection.push(dinoObj);
    }
}


addDinosToCollection();
console.log(dinosaursCollection);
dinosaursCollection = [];
addDinosToCollection2(dinosaurData);
console.log(dinosaursCollection);