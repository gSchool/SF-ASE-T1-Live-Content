// https://stackoverflow.com/a/23089052
function getRandomPercent() {
  return Math.floor(Math.random() * 100) + 1;
}

// two main pieces (big tasks) to this problem: 
// 1. -DONE-  determine if runner was tackled (all the tackling logic)
// 2. runner logic (run a yard, do stuff, check yardage, etc.)

// define a function that will return true if the runner is tackled
// and false if not
// parameters: # of yards
function wasTackled(yards) {
  // calculate # of attempts (store that number in a variable)
  let attempts = Math.floor(yards / 20) + 1;
  // console.log(attempts);

  // Loop X number of times, where X is the tackle attempts
  // each iteration represents a tackle attempt
  for(let t = 0; t < attempts; t++) {
    // console.log(t);
    // get attempt percentage (and store it in a variable)
    let at = getRandomPercent();
    console.log(`Tackle attempt #${t + 1} at the ${yards} yard line with a power of ${at}.`);

    // use the percentage with the yardage checks to determine if
    // the tackle was successful
    // * 50% when between 1 and 50 yards
    // * 20% between 51 and 75
    // * 10% between 76 and 99
    let tackled = false;

    if(yards > 0 && yards < 51 && at < 11) {
      tackled = true;
    }
    
    if(yards > 50 && yards < 76 && at < 21) {
      tackled = true;
    }

    if(yards > 75 && yards < 100 && at < 31) {
      tackled = true;
    }

    if(tackled) {
      console.log('Runner was tackled!');
      return true;
    }
  }

  // if the loop completes, then no attempt was successful
  return false;
  // if(tackled) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// for testing # of attempts calculation
// for(let y = 0; y < 100; y += 5) {
//   wasTackled(y);
// }

// test number of attempt iterations
// wasTackled(49);

// test the full logic of wasTackled()
// for(let y = 0; y < 100; y += 20) {
//   console.log(wasTackled(y));
//   console.log('------------------------------------------------------');
// }


// RUNNER LOGIC
// create a loop that iterates for 100 "yards"
// there is no concept of "yards" - just the number of "units" the runner moves each iteration
let yardline = 0;
// for(let y = 0; y < 100; y++) {
  // if the runner made it to the 100 yard line
  // print a victory message
  // if(y === 100) {
  //   console.log('TOUCHDOWN!');
  //   break;
  // }

  // determine if the runner was tackled
  // const tackled = wasTackled(yardline);

  // if the runner was tackled, print a notification and break from the loop
//   if(tackled) {
//     break;
//   }

//   yardline++;
// }

while(!wasTackled(yardline) && yardline < 100) {
  yardline++;
}

// if the runner made it to the 100 yard line
// print a victory message
if(yardline === 100) {
  console.log('TOUCHDOWN!');
}
