# Running Back Runner

Your task is to build out a running back simulator. This running back will run down the field  until they get tackled or score.

Your solution should follow these requirements:
* The runner will start at 0 yards
* For each yard the runner gains, there is a chance they are tackled
* The number of tackle attempts and the chance to get tackled are as follows:
    * number of tackle attempts: yards / 20 (minimum 1, always floored)
    * tackle success chance: 
      * 50% when between 1 and 50 yards
      * 20% between 51 and 75
      * 10% between 76 and 99
* If tackled, the runner stops making progress and does not score
* If the runner reaches 100 yards, they have scored
* Print all relevant events, such as running started, when tackled, and when scored.

Keep in mind there is not just one solution to this project. Your solution might vary from others.

## Bonus Additions

* Make the main function accept a starting point for the runner, instead of always starting at 0 yards
* (Dialing it to 11) Use what you created to simulate a game with two teams, complete with downs and score keeping
    * Keep in mind this will add much more logic to the code, but not necessarily require a lot of changes to what is already there