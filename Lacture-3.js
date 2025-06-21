// Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code, but only for function declarations, not for variable assignments.    

// 1. Example of variable hoisting var
// var x; // Variable declaration (hoisted)
// var x = 10; // Variable declaration
// console.log(x); // Outputs: 10


// 2.let variable hoisting

// Case 1: Using `let` before declaration (will throw an error)
// let y; // Variable declaration (hoisted, but not initialized)       
// y = 20; // Variable assignment
// console.log(y); // Outputs: 20

// console.log(y); // Outputs: 20
// let y; // Variable declaration (hoisted, but not initialized)       
// y = 20; // Variable assignment


// 3.Example of function hoisting


// heet(); // Outputs: This is a function declaration
// function heet() {
//     console.log("This is a function declaration");
// }

// // heet(); // Outputs: This is a function declaration

// 4. Function with var Hoisting

greet(); // Outputs: errror: greet is not defined
var a = function greet(){
    console.log("This is a function declaration with var");
}

// greet(); // Outputs: This is a function declaration with var