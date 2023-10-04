
// Write a function the will take a sentence string and capitalize each word
// It should have one parameter, the sentence, and return a capitalized version of it
 

function capitalizeSentence(sentenceString){
    let splitString = sentenceString.split(" ");        // [ '0 ', '0 ', '0 '  ]
     for (let i = 0; i < splitString.length; i++) {
      const word = splitString[i];
      const firstLetter = word[0];

      splitString[i] = word.replace(firstLetter, firstLetter.toUpperCase());
      splitString[i] = firstLetter.toUpperCase() + word.substring(1);
     //this only would be //H //I //M //K  from "hello its me kenny"
     
    }
     
     return splitString.join(" ");
}
console.log(capitalizeSentence("hehllo its me kenny"));

const s1 = "this is a sentence to capitalize.";
const s2 = "this is another sentence that needs to be capitalized.";

// let splitString = sentenceString.split()
   // let splitString = sentenceString.split( );
// loop string 

//  maybe charAt(0).toUpperCase
// return

//from W3 Schools
// String replace() method replaces a specified value with another value in a string
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "microsoft");
// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement