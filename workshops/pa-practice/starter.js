/*----------------------------------------------------------------*\
|                         THE BOTTOM LINE                          |
\*----------------------------------------------------------------*/

var companies = [
  {"name": "FunkyPants Inc.", "revenue": 627, "expenses": 14},
  {"name": "ZippyZoo LLC", "revenue": 293, "expenses": 941},
  {"name": "HappyHarbor Ventures", "revenue": 899, "expenses": 304},
  {"name": "BumbleBerry Inc.", "revenue": 756, "expenses": 169},
  {"name": "Socktopia Corp.", "revenue": 60, "expenses": 419},
  {"name": "WackyWidgets Ltd.", "revenue": 167, "expenses": 513},
  {"name": "ChuckleCheese Food Co.", "revenue": 974, "expenses": 562},
  {"name": "GoofyGadgets Ltd.", "revenue": 248, "expenses": 414},
  {"name": "QuirkCrafters Inc.", "revenue": 850, "expenses": 832},
  {"name": "PajamaLlamas LLC", "revenue": 640, "expenses": 711}
];

// Create a variable for storing "profitable companies" and assign it an empty array

// Create a second variable for storing "red companies" and assign it an empty array

// returns the absolute value for a number
function getAbs(n) {
  return Math.abs(n);
}

//-----------| Is It Profitable? Function |-----------\\

// Define a function that will be used to determine if a company is profitable or not
// It should have one parameter: the company object to check
// It should return true if the company has more revenue than expenses, and false otherwise

//-----------| Sort Companies Function |-----------\\

// Define a function that will put each company into the profitable or red array
// This function will not have any parameters or return
// The function logic should iterate over the companies
// Each iteration, use the function you defined right before this  
// to determine if the company was profitable
// If it was profitable, the company should be put into the profitable array
// If it was not, the company should be put into the red array

//-----------| Sort the Companies |-----------\\

// Use the function you just defined to sort the companies

//-----------| Print the Top Companies |-----------\\

// Print the first three elements from the profitable and red arrays
// so that the out looks like:

// --- Profitable Companies ---
// FunkyPants Inc. | $### in Profit
// etc.

// --- Companies in the Red ---
// ZippyZoo LLC | $### in the Red
// etc.

// You will need to calculate the profit/red values so you can print them. 
// Use the getAbs() function to convert the negative values to positive for 
// printing "in the red" values.

// Note: the companies were pre-sorted, so focus on just printing the first
// three elements in each array.
