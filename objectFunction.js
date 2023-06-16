let holder = {
    name: "Chris", 
    counts: {        
        i: 0,
    },
    countUp: function () {
        this.counts.i++;
        console.log(this.counts.i);
    }
}

holder.countUp();
holder.countUp();
console.log(holder);



let holder2 = {
    name: "Chris",
    i: 0
}

function countUp(increaseI) {
    increaseI.i++;
    return increaseI;
}
countUp(holder2);
countUp(holder2);
console.log(holder2);