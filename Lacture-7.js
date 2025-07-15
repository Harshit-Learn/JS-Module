// Optional Chaining , Nullish Coaescing  & Logical OR

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

const user = {                // object
    named: "Harsh",

    prefernce : null
    
};

const city = user?.address?.city ; // you can use only with address but for safe zone we use for all
console.log(city); // output: undefined
