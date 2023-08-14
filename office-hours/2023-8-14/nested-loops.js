const data = [
  { name: 'Rich', interests: ['code','games','youtube']  } ,
  { name: 'Bob', interests: ['hIkiNG','biking','bbq']  } ,
  { name: 'Jim', interests: ['tv','movies','nothingelse']  } 
];

data.push({ name: 'Rich', interests: ['code','games','youtube']  });

for(let p = 0; p < data.length; p++) {
// for(let person of data) {

  console.log(data[p].name, 'Interests -', data[p].interests.join(', '));
  // console.log(person.name, 'Interests -', person.interests.join(', '));

  for(let interest of data[p].interests) {
  // for(let interest of person.interests) {
    // console.log(interest, interest.toLowerCase());
    if(interest.toLowerCase() === 'hiking') {
      // console.log(person.name, 'loves to hike!');
      console.log(data[p].name, 'loves to hike!');
    }
  }
}

/* 
rows  = [
  ['number 1'. 'number 2', etc...]
  [1, 2, 3, 4]
]
*/

const rows = [
  ['number 1', 'number 2']
];

for(let r = 0; r < 5; r++) {

  const row = [];
  for(let d = 0; d < rows[0].length; d++) {
    row.push(d * r, (d * r) + 1);
  }
  rows.push(row);
}

console.log(rows);

