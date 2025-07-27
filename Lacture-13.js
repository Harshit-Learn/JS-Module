// call() : It is a method in Js & argument ko comma(,) se seperate krte he . 
//  apply () : It is a method in Js & argument ko array([]) se seperate krte he . 
//  Bind() : Function immediatly call nahi hota he & function return krta he 
// NOTE: This ko fix krne ke liye ye  method use hota he 

// Before thses method: problem kya tha 

// const user1={
//     name:"harshit",
//     Age:23
// }
// const user2={
//     name: "ajay",
//     Age:34
// }

// function User(){
//     console.log(`Name: ${this.name} , Age: ${this.age}` )
// }

// User(); // output: Name: undefined , Age: undefined  because User function kisi objet ke ander nahi he & this ka context nahi mil rha he so solve these above problem call , apply , & bind comes in picture.


// ***************************  1. Call() **************************************

// const user1={
//     name:"harshit",
//     Age:23
// }
// const user2={
//     name: "ajay",
//     Age:34
// }

// function User123 (city , place){
//     console.log(`Name: ${this.name} , Age: ${this.Age} , City:${city} , Place: ${place}` ); // city & place use as pea parameter . please don't use this with city & place
// }

// User123.call(user1 , 'Delhi' , 'Noida');  // output: Name: harshit , Age: 23 , City:Delhi , Place: Noida
// User123.call(user2 , 'Delhi' , 'Noida');  // object2 ( for User2)


// ********************   Apply() ****************************************8

// const user1={
//     name:"harshit",
//     Age:23
// }
// const user2={
//     name: "ajay",
//     Age:34
// }

// function User123 (city , place){
//     console.log(`Name: ${this.name} , Age: ${this.Age} , City:${city} , Place: ${place}` ); // city & place use as pea parameter . please don't use this with city & place
// }

// User123.call(user1 , ['Delhi'] , ['Noida']); // Argument pass in array  Output: Name: harshit , Age: 23 , City:Delhi , Place: Noida


// Bind() 

const user1 = {
    name: "harshit",
    Age:23
}
const user2={
    name: "ajay",
    Age:34
}

function User123 (city , place){
    console.log(`Name: ${this.name} , Age: ${this.Age} , City:${city} , Place: ${place}` ); // city & place use as pea parameter . please don't use this with city & place
}

let bind= User123.bind(user1 , 'Delhi' , 'Noida'); 
bind(); // output: Name: harshit , Age: 23 , City:Delhi , Place: Noida ( only call the bind function because bind return a function & you just call it)
