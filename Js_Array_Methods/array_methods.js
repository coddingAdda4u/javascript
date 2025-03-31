// Creating array to string
const array = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
const arrayToString = array.join(); // join () method convert array to new string
console.log(arrayToString) // output: HTML,CSS,JAVASCRIPT,PYTHON
// String to array
const string = "People moved like threads in a tapestry, each carrying a story";
const stringToArray = string.split(" "); // split method convert string to array seperated by space
console.log(stringToArray) // output: ['People', 'moved', 'like', 'threads', 'in', 'a', 'tapestry,', 'each', 'carrying', 'a', 'story' ]

// Mergin two or more strings
const array2 = ["C", "C++", "C#", "PHP"];
const concatArray = array.concat(array2); // concat() method concatinate two or more arrays
console.log(concatArray); // output: [ 'HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'C', 'C++', 'C#', 'PHP' ]

// Search for element in array
const incArray = concatArray.includes("PHP"); // includes() return true if element found in array 
console.log(incArray); // output: true

// Slice array
const sliceArray = concatArray.slice(0,5); // slice(start, end) method extract element between start and end and return new array  
console.log(sliceArray); // output: [ 'HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'C' ]


