// Comparison Operators : Compare two values and return a boolean(true/false
// ).
// == : Equal to.
// === : Strict equal (checks value and type).
// != : Not equal.
// !== : Strict not equal.
// < ,  > ,  <= ,  >= : Less than, greater than, less than or equal to, greater than or equal to.

// Assigning variables
let val1 = 10;
let val2 = 20;
let val3 = "10";

// Equal to
console.log(val1 == val2) // false, because 10 is not equal to 20
console.log(val1 == val3) // true, because val1 and val3 both has same value 10
// Strict equal
console.log(val1 === val3) // false, becuase the value of both variables are same but data types are different (val1 is number but val3 is string)
console.log(10 === 10) // true, because the value and data types are same 
// Not equal
console.log(val1 != val2) // true, because a is not equal to val2
console.log(val1 != val3) // false, because val1 is equal to val3
