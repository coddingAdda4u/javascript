// What is string ?
// A string is a data type used to represent text. Strings are sequences of characters enclosed in either single quotes ('), double quotes ("), or backticks (`).

// Creating a string 
let string = "Hi, I am Javascript";
console.log(string); // output Hi, I am Javascript

let str2 = "Javascript";
console.log(str2[5]); // output "c", because 5 in a index value of "c"


// String Methods //

// substring methods
let strLenght = string.length; // get the length of string
console.log(string) // output 19

let strIndex = string.indexOf("am"); // retun theindex of fist character index of substring
console.log(strIndex);// output is 6
let strIndexLast = string.lastIndexOf("am"); // return the index of last character index of substring
console.log(strIndexLast); // output is 7

let string2 = "The golden hues of the setting sun cast long, gentle shadows across the quiet cobblestone street";
let strSearch = string2.search("quiet"); //return the indes of quite
console.log(strSearch); // output is 72 

// Extracting string
let strSlice = string2.slice(0,23); // extract a section of string from 0-20 and return as a new string
console.log(strSlice); // output is The golden hues of the
let strSubstring = string2.substring(0,23); // extract a section of string from 0-20 and return as a new string
console.log(strSubstring); // output is The golden hues of the

// Note : slice() methods can take negative value but substring() method cannot. 

// Replacing string
let strReplace = string2.replace("golden", "silver"); // replace a existing string to new string 
console.log(strReplace); // output is "The silver hues of the setting sun cast long, gentle shadows across the quiet cobblestone street"

// Triming sentence
let string3 = "        setting sun cast long        "; 
let strTrim = string3.trim(); // replace the extra white spaces from the sentence
console.log(strTrim); 

// Upper case/Lower case
let string4 = "javascript";
console.log(string4.toUpperCase());
console.log(string4.toLowerCase());

// Concatenate strings
let a = "Hello ";
let b = "World";
let c = "!";
let output =  a + b + c; 
console.log(output); // output is Hello World!