// In this Lacture we learn about Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code, but only for function declarations, not for variable assignments.            
//
// console.log(myVar); // undefined     
// var myVar = 5; // Variable declaration is hoisted, but assignment is not
// console.log(myVar); // 5                                                                             
//
function myFunction() {
    console.log("This is a hoisted function");
}       
myFunction(); // This works because function declarations are hoisted
// console.log(myFunction2()); // This will throw an error because myFunction2 is not hoisted
var myFunction2 = function() {
    return "This is a non-hoisted function";
}; // Function expressions are not hoisted  
// console.log(myFunction2()); // This will throw an error because myFunction2 is not hoisted
// console.log(myVar2); // This will throw an error because myVar2 is not hoisted   
var myVar2 = 10; // Variable declaration is hoisted, but assignment is not
console.log(myVar2); // 10
// console.log(myVar3); // This will throw an error because myVar3 is not hoisted       
let myVar3 = 15; // Variable declaration is not hoisted, so this will throw an error
// console.log(myVar4); // This will throw an error because myVar4 is not hoisted
const myVar4 = 20; // Variable declaration is not hoisted, so this will throw an error
// console.log(myVar5); // This will throw an error because myVar5 is not hoisted

var myVar5 = 25; // Variable declaration is hoisted, but assignment is not
console.log(myVar5); // 25


// console.log(myVar6); // This will throw an error because myVar6 is not hoisted
let myVar6 = 30; // Variable declaration is not hoisted, so this will throw an error
// console.log(myVar7); // This will throw an error because myVar7 is not hoisted
const myVar7 = 35; // Variable declaration is not hoisted, so this will throw an error
// console.log(myVar8); // This will throw an error because myVar8 is not hoisted

