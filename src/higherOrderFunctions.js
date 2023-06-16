let heroes = ["Static Shock", "Hulk", "Flash", "Thor", "Captain America"];

let heroWorship3 = heroes.map();

let heroWorship2 = heroes.map((elem) => {
    return elem = `${elem} is the best!`
})

let heroWorship = heroes.map((elem) => `${elem} is the best!`)
console.log(heroWorship);
console.log(heroWorship2);