// 1. Optional Chaining , Nullish Coaescing  & Logical OR

// const user = {                // object
//     named: "Harsh",
//     address : {              // object under object ( nested object)
//         city: "Delhi",
//         pincode: "274302"
//     },
//     prefernce : null
    
// };

// const city = user.address.city;
// console.log(city); // output: Delhi

// In Above code , if  we remove the address object & access the city then an error is coming so to tackel this type of  error we use optional chaining(?)

// const user = {                // object
//     named: "Harsh",

//     prefernce : null
    
// };

// const city = user.address.city;
// console.log(city); // output: TypeError: Cannot read properties of undefined (reading 'city')

//usecase : In case of API call to fetch the data/properties agar result nahi atat he to browser pr faltu ka error deta he to solve these problem, we use (?)

// const user = {                // object
//     named: "Harsh",

//     prefernce : null
    
// };

// const city = user?.address?.city ; // you can use only with address but for safe zone we use for all
// console.log(city); // output: undefined

// ***********************************************************************************************************

// 2. Nullish Coalesing

// let x = null ?? "Default";
// console.log(x); // Default

// let y = undefined ?? "fallback";
// console.log(y); // fallback

// let z = " " ?? "Hello";
// console.log(z); // " "  it is not null & not undefined
// let a = 0 ?? 7;
// console.log(a); // 0

//***********************************************************************************

// 3. Logical Operator
// Falsy Value ( false , o , " " , nul , undefined)

// let a= 4 || 4;
// console.log(a); // 4

// let b= false || "h1";
// console.log(b); // h1

// let c = 0 || "h2";
// console.log(c); // h2

// let d= null || "h3";
// console.log(d); //h3

let e= " " || "h4";
console.log(e); // " " truthy
let z = " " ?? "Hello";
console.log(z); // " "

// let f= undefined || "h5";
// console.log(f);

// let g= "hello" || "some";
// console.log(g);




