// function fewerApples(x, y) {

//     if (x < y) {
//        console.log('There are fewer apples than oranges');
//     }

//     if (1 < 2) {
//         console.log('hi');
//     }
//     return "There are fewer apples than oranges.."
// }


// console.log(fewerApples(500,2));


// wholesalePriceOfFruitcake = 3;











// function calculateMarkup(inputPrice) {
//     if (typeof inputPrice != Number) {
//         return "Invalid inputs."
//     }

//     var total = inputPrice + (inputPrice * .3);
//     return total;
// }

// console.log(calculateMarkup(3));
// console.log(calculateMarkup('Wholesale Fruitcake Suppliers, Inc'));












// function validLengthPassword(password) {
//      if (password.length > 4 && password.length < 15) {  
//        return 'Password length is valid';   
//     }
//    }
    


// validLengthPassword('ksjhfgkjhasf')


// var myObj = {
//     groceries: [
//         "tomatoes",
//         "apples"
//     ]
// }
// console.log(myObj.groceries[1]);





function findAgent(agentList, agentToSearchFor) {
    if (agentList.indexOf(agentToSearchFor) > -1) { // if agentToSearchFor is present within agentList
      return agentToSearchFor + ' is present within Agent list';   // return '{agentToSearchFor} is present within Agent list'
    } 
  }

  var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);