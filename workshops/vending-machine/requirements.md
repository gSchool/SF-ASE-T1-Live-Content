# The Infinite Vending Machine

Your is to create the logic for the infinite vending machine. 

Your solution should follow these requirements:
* You should create a function that accepts a location and an amount of money (in cents)
* The location is a letter + number combination, such as "B2"
* The number in the location starts at 1, not 0
* The number in the location represents the placement in the array, you will need to account for the numbers starting at 1
* A check should be made to make sure the location is valid
* Your logic must verify the money provided is enough to purchase the item at the location
* The function should return an object that contains the item and the change from the purchase
* If the given money is not enough, the returned item should be null and the change should be all the money given
* There should be a message printed if the location was not found
* There should be a message printed if the money is not enough
* There should be a message printed about the item purchased, using the return of the function

Keep in mind there is not just one solution to this project. Your solution might vary from others.

## Bonus Additions

* Add a random chance for the machine to fail at "picking" the item, returning nothing but still taking the money
* Start the code (outside the function) by printing out a vending machine graphic will all the items in it (with prices)