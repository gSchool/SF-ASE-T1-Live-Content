var myGarden = [
    { section: 'vegetables',
      plants: [
        { name: 'zucchini', quantity: 1, cost: 2.00, bed: 1},
        { name: 'lettuce', quantity: 4, cost: 3.50, bed: 2}, 
        { name: 'cucumber', quantity: 4, cost: 2.50, bed: 3},
        { name: 'greenbeans', quantity: 3, cost: 2.22, bed: 7},
    ]
  },
    {
      section: 'fruits',
      plants: [
      { name: 'strawberries', quantity: 5, cost: 3.00, bed: 4},
      { name: 'blueberries', quantity: 3, cost: 10.50, bed: 6}, 
      { name: 'grapes', quantity: 4, cost: 2.50, bed: 3},
      { name: 'tomatoes', quantity: 3, cost: 2.22, bed: 2},
      ]
    },
    {
      section: 'herbs', 
      plants: [
      { name: 'rosemary', quantity: 2, cost: 4.00, bed: 7},
      { name: 'cilantro', quantity: 2, cost: 1.50, bed: 7}, 
      { name: 'basil', quantity: 2, cost: 5.50, bed: 4},
      { name: 'peppermint', quantity: 1, cost: 6.45, bed: 7},
     ]
    }
    ];

//Problem 1: output an array of strings of the different plants in a garden based on the given type
function listItemsofType(gardenArray, type)
{
  let result = [];
  let foundSection;

  for (const section of gardenArray) {
    if (section.section === type) {
      foundSection = section;
      break;
    }
  }

  if (!foundSection) return result;
  
  for (const plant of foundSection.plants){
    result.push(plant.name);
  }

  return result;
}
const result = listItemsofType2(myGarden, "fruits");
console.log(result);
// assertEquals(listItemsofType(myGarden, "fruits"), ['strawberries', 'blueberries', 'grapes', 'tomatoes' ], "Testing listTypes" )

function listItemsofType2(gardenArray, type) {
  let result = [];
  for (const section of gardenArray) {
    if (section.section == type) {
      for (const plant of section.plants) {
        result.push(plant.name);
      }
      break;
    }
  }

  return result;
}

function listPlantsOfBed(gardenArray, bed) {
  let allPlants = [];
  for (const section of gardenArray) {
    for (const plant of section.plants)
    if (plant.bed === bed) {
      allPlants.push(plant.name);
    }
  }
  return allPlants;
}
let bedList = listPlantsOfBed(myGarden, 7);
console.log(bedList);