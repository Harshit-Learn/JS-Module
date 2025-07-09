// Traditional Function vs Arrow Function : with this keyword

//  ****************** A. Normal Function **************************

// greet(); // Hoisting allows this function to be called before its declaration
// function greet (){                      // Traditional function declaration
//     console.log (" hello Harshit");
// }

 //greet(); // Outputs: hello Harshit

//  *********** Second Example of Normal Function ********************

// function cy(){
//     return "This is a normal function";
// }
// let a = cy(); // Outputs: This is a normal function
// console.log(a); // Outputs: This is a normal function


// **************** B. Arrow Function ****************************

// const greet = () =>{              // greet is the function name in Arrow Function
//     console.log("Hello harshit");
// } 
// greet(); // Outputs: Hello harshit

//  ************ Return somthing from arrow function ************************

// const abc = () => 'harshit'; {  //  return kra rhe he

//     const text = abc();
//     console.log(text); // Outputs: harshit
// }

// ****************** "this keyword" in Arrow Function vs Traditional Function ****************************

//  ************* with normal function ******************
// const user = {
//     name : " harsh",
//     sayhi : function(){
//         //console.log("Hey");
//         //console.log("Hey" , name); // reference error: name is not defined
//        console.log("Hey" , this.name ); // yha pr this user object ko refer kr rha he
//     }
// }
// //console .log(user.name); // Outputs: harsh
// user.sayhi();


// *************** With arrow function ************

// const user1 = {
//     name: " harshit",
//     sayhi : () =>{
//         //console.log("Hey");  // outputs: Hey
//           //console.log("Hey" , name); // ReferenceError: name is not defined
//          console.log("Hey" , this.name); // Outputs: Hey undefined because  in arrow function "this keyword" does not refer to the object but to the global scope or the enclosing lexical context.
//     } 
// }

// user1.sayhi();
