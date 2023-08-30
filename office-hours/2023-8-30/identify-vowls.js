const str = "aso3ifn2vaoe6nwroiweasgp31upoiewqrnahvoiewqur[owirhteqon4zv";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsFound = "";


for(let c = 0; c < str.length; c++) {
  const char = str[c];
  if(vowels.indexOf(char) > -1) {
  // if(char === 'a' || char === 'e' || char === 'i' || char === 'u' || char === 'o') {
    vowelsFound += char;
  }
}

console.log(vowelsFound.length);
