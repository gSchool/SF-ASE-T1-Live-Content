const data  = [
  { name: 'Richard', skills: ['being a smarty-pants', 'eating']  },
  { name: 'Joe', skills: ['driving', 'climbing a really steep set of stairs', 'being joe']  },
  { name: 'Julie', skills: ['swimming', 'expert programming']  },
  { name: 'Karen', skills: ['asking questions that are awkward', 'woodcutting']  }
];

// create a function that:
// loop over the data given, and print out the name of the person and their skills (comma-separated list)
// Example:
// Name: Richard
// Skills: being a smarty-pants, eating
function printData(){
  var currentData = "";
  
  for (let i = 0; i < data.length; i++){
    currentData += data[i].name + " " + data[i].skills.toString() + "\n";
  }

  return currentData;
}

let output = printData();
console.log(output);

// printData()
