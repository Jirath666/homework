// LAB 1 Declare String Variables
var myFirstName = "Jirath";
var myLastName = "Phawan;"

// LAB 2 Escaping Literal Quotes in StringsPassed
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// LAB 3 Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// LAB 4 Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine" // Change this line

// LAB 5 Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end."; // Change this line

// LAB 6 Concatenating Strings with the Plus Equals Operator
// Only change code below this line

var myStr = "This is the first sentence.";
myStr +=" This is the second sentence.";


// LAB 7 Constructing Strings with Variables
// Only change code below this line
var myName = "Jirath";
var myStr = "My name is " + myName +"and I am well";

// LAB 8 Appending Variables to Strings
// Change code below this line

var someAdjective = "TryHard";
var myStr = "Learning to code is ";
myStr += someAdjective;

// LAB 9 Find the Length of a StringPassed
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// LAB 10 Use Bracket Notation to Find the First Character in a String
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// LAB 11 Use Bracket Notation to Find the Nth Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// LAB 12 Use Bracket Notation to Find the Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

// LAB 13 Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

// LAB 14 Understand String Immutability
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// LAB 15 Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "" + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ""; // Change this line
// Only change code above this line