//Question 1

//Follow the comments below to convert the base data into a collection (array of objects).

// Loop over the base data and for each iteration:

// - convert the entry to an object

// - the object should have three properties (keys):

//   'name', isWeekEnd,  and index

// - push the object into the daysOfWeekCollection

const weekBaseA = [

    // [name, isWeekend, index]

    ['Monday', false, 1],

    ['Tuesday', false, 2],

    ['Wednesday', false, 3],

    ['Thursday', false, 4],

    ['Friday', false, 5],

    ['Saturday', true, 6],

    ['Sunday', true, 0]

]





const daysOfWeekCollection = [];




function convertBaseArray(baseArray) {
    newArray = []
    for (let i = 0; i < baseArray.length; i++) {
        const entry = baseArray[i]
        obj = {
            name: "",
            isWeekEnd: false,
            index: 0,
        }
        // //   for(j=0; j<baseArray[i].length; j++){
        // console.log(baseArray[i][0])
        // console.log(baseArray[i][1])
        // console.log(baseArray[i][2])
        // // }
        obj.name = entry[0];
        obj.isWeekEnd = entry[1];
        obj.index = entry[2];
        console.log(obj)

        newArray.push(obj)
        console.log(`Inner Array Print:`);
        console.log(newArray)
    }
    const week = baseArray;
    for (const day of week) {
        let dayEntry = {
            name: day[0],
            isWeekEnd: day[1],
            index: day[2]
        }
        newArray.push(dayEntry);
    }

    return newArray;
}

console.log(convertBaseArray(weekBaseA))

expectedArray = [

    { name: 'Monday', isWeekEnd: false, index: 1 },

    { name: 'Tuesday', isWeekEnd: false, index: 2 },

    { name: 'Wednesday', isWeekEnd: false, index: 3 },

    { name: 'Thursday', isWeekEnd: false, index: 4 },

    { name: 'Friday', isWeekEnd: false, index: 5 },

    { name: 'Saturday', isWeekEnd: true, index: 6 },

    { name: 'Sunday', isWeekEnd: true, index: 0 }

]
