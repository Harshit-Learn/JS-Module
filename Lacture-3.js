// In this Lacture we learn about Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code, but only for function declarations, not for variable assignments.            
//
// console.log(myVar); // undefined     
// var myVar = 5; // Variable declaration is hoisted, but assignment is not
// console.log(myVar); // 5                                                                             
//
var a = 10;
Console.log(a); // 10node

