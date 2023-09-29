const search = "green";
const stuff = "red green black blue yellow";

function searchForColor(colorToSearchFor, stringToSearch) {
  const colors = stringToSearch.split(" ");

  for(let c = 0; c < colors.length; c++) {
    const color = colors[c];
    if(color === colorToSearchFor) {
      return true;
    }
  }

  return false;
}

const wasFound = searchForColor(search, stuff);
console.log(wasFound);