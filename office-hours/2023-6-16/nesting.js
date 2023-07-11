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

    // console log the whole array
    function getPlant(gardenArray, sectionNumber, plantNumber) {
        let section = gardenArray[sectionNumber];
        console.log(section);
        console.log(`Section is named: ${section.section}`);
        let plants = section.plants;
        console.log(plants);
        let chosenPlant = plants[plantNumber];
        console.log(chosenPlant);
        let cost = chosenPlant.cost;
        console.log(`${chosenPlant.name} costs: ${cost}`);
        console.log(`${gardenArray[sectionNumber].plants[plantNumber].name} costs: ${cost}`);
    }
    getPlant(myGarden, 1, 2);

