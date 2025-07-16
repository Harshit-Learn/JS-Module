// Destructuring in JS

// Syntax for Array

// const arr = [v1, v2 , v3];
// const [a, b , c ] = arr;
// console .log (a); // v1
// console .log (b); // v2
// console .log (c); // v3

// // skip
// const arr1 = [v1, v2 , v3];
// const [x,  , z ] = arr1; 
// console .log (x); // v1
// console .log (z); // v3

// // Default
// const arr2 = [v1, v2 , v3];
// const [p ,  q=4 ] = arr1; 
// console .log (p); // v1
// console .log (q); // 4

// Example

// const arr = [1, 2, , 5];
//const [a, b,c,d]= arr;
//console.log(a , b , c , d ); // 1 2 3 4 5 

// skip
// const [ a , , d] = arr;
// console.log(a); // 1
// console.log(d); // 4

// Default
// const [ a , h=19 , g=56 ] = arr;
// console.log(a); // 1
// console.log(h); // 2 because second element is there on array but if second element is not there then h=19 was print
// console.log(g); // 56 , because third element is not there on array  so g = 56
// console.log(g); // 56 , 


//************************************************************************************************************************

// Syntax for object

// const obj = {key1: value1, key2 : val2};
// const{key1 , key2} = obj;
// console.log ( key1);

const obj = { name: "harsh" , age: "25" , pin: 274302 };
const { name , age , pin}=  obj ;

console.log ( name , age  , pin ); // harsh , 25 , 274302
console.log(name);
console.log(age);
