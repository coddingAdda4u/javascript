// Logical Operators : Combine or invert boolean values.
// && : Logical AND.
// || : Logical OR.
// ! : Logical NOT.

// Assigning variables
let a = 10;
let b = 20;

// Logical And
console.log(a > 5 && b > 15); // true, because both conditions are true
console.log(a < 5 && b > 15); // false, because both conditions are true
// Logical Or
console.log(a > 15 || b > 15); // true, because one condition is true
console.log(a < 15 || b > 15); // true, because one condition is true
// Logical Not
console.log(!(a > 15)); // true, because a > 15 is false, and NOT operator inverts it
console.log(!(a < 15)); // false, because a < 15 is true, and NOT operator inverts it