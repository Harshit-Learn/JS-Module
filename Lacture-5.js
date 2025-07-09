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

const greet = () =>{              // greet is the function name in Arrow Function
    console.log("Hello harshit");
} 
greet(); // Outputs: Hello harshit

//  ************ Return somthing from arrow function ************************
const abc = () => 'harshit'; {  //  return kra rhe he

    const text = abc();
    console.log(text); // Outputs: harshit
}
