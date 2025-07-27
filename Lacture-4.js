// Var : Redeclare ,  reassign & Hoisted( resut: undefined).

// console.log(a) // Outputs: undefined
// var a=10; // initialize
// var a=20; //Redeclare
// console.log(a) // Outputs: 20


// var a=10; // initialize
//  a=20; //reassign
// console.log(a) // Outputs: 20


// ***** let : Redeclare ( not) ,  reassign( yes) & Hoisted( resut: reference error due to TDZ).


// let a=10; // initialize
// let a=20; //Redeclare
// console.log(a); // Outputs: erroe


// let  a=10; // initialize
//  a=20; //reassign
// console.log(a) // Outputs: 20

// const  : Redeclare ( not) ,  reassign( not) & Hoisted( resut: reference error due to TDZ).

// const a = 6;
// //const a = 8; // error 
// a = 8 //  Assignment to constant variable.
// console.log(a)


