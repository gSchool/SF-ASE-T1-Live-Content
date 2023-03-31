let answerArray = [];

function countBy(increment, iterations) {
    for (var i = increment; (increment * iterations) >= i; i += increment) {

        answerArray.push(i);

    }
}
countBy(2, 10);
console.log(answerArray);