function promiseMe() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    })
}

let p1 = promiseMe();