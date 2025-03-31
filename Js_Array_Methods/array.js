//  an array is a special type of object used to store multiple values in a single variable

// Creating an Array
const array = ["HTML", "CSS", "JAVASCRIPT"];
console.log(array); // output: [ 'HTML', 'CSS', 'JAVASCRIPT' ]
// Value of array can also access by indexs
console.log(array[0]); // output: HTML
console.log(array[1]); // output: CSS
console.log(array[2]); // output: JAVASCRIPT

// Another way to create array
const arrayNew = new Array("HTML", "CSS", "JAVASCRIPT");
console.log(arrayNew) // output is [ 'HTML', 'CSS', 'JAVASCRIPT' ]

// Adding an element
array.push("PYTHON"); // push() method add elements at the last of an array
console.log(array); // output: [ 'HTML', 'CSS', 'JAVASCRIPT', 'PYTHON' ]
array.unshift("JAVA"); // unshift() method add element at the first of an array
console.log(array); // output [ 'JAVA', 'HTML', 'CSS', 'JAVASCRIPT', 'PYTHON' ]

// Removing an element
array.pop(); // pop() method remove the last elemnt of an array
console.log(array); // output [ 'JAVA', 'HTML', 'CSS', 'JAVASCRIPT' ]
array.shift() // shift() method remove the first elemnt of an array
console.log(array) // output:[ 'HTML', 'CSS', 'JAVASCRIPT' ]

// Access array elemnt throw loop
const arrayLoop = ["India", "America", "China", "Japan"];

// Array on for loop
for (let i = 0; i < arrayLoop.length; i++){
    console.log(arrayLoop[i]);
}
// Array on foreach loop
arrayLoop.forEach((e) =>{
    console.log(e);
}) 
// Array on foreach loop using callbackfuntion
arrayLoop.forEach(function(index, value, array){ // calback funtion take one or three argiments(optional) index, value, array
    console.log(index, value);
})

