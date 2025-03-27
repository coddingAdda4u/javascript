// Use const for variables that will not change.
// Const is a block variable it means it cannot be accessible outside the block.
// Value of const variables cannot be reassigned

// Syntax 
// const variable_name = value;

// Assigning const variables
const name = "Alex";
const age = 30;
console.log(name," ",age)
// Reassign value
name = "Steve";
age = 26;
console.log(name," ",age) // error, couse const variables vaalues cannot be reassigned
// const block scope
{
    const userName = "Hypen";
}
console.log(userName) // error, cause of variable block scope
