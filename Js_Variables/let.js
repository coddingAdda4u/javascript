// Use let for variables that will change.
// Let is a block variable it means it cannot be accessible outside the block.
// Value of let variables can be reassigned

// Syntax 
// let variable_name = value;

// Assigning let variables
let name = "Alex";
let age = 30;
console.log(name," ",age)
// Reassign value
name = "Steve";
age = 26;
console.log(name," ",age)
// let block scope
{
    let userName = "Hypen";
}
console.log(userName) // error, cause of variable block scope
