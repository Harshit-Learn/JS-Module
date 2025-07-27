// spread & Rest operator

// 1. Spread Operator : means: Expand ,    to break the individual element of any iterable ( array , object or string)

const arr = [ 1 , 2, 3 , "Harsh"];
const [a,b,c,d]= arr;
console.log( a) // 1  Destructure

const copy = [...arr];
console.log(copy); // output: [ 1, 2, 3, 'Harsh' ]

// Merg

const arr1 = [1,2,3,4];
const arr2 = [ 5,6,78];
const copy1 = [...arr1 , ...arr2];
console.log(copy1)

// Function Argument

function sum(a,b,c){
    return a+b+c;
}

const num = [1,2,3];
console.log(sum(...num)); //6:  ... operator break the array in individual 

// object

let person = {
    name:"harsh",
    p:2
}

let person2={
    city:" Noiad",
    place:"Delhi"
}

const obj = {...person , ...person2};
console.log(obj)


// ********************** Reat operator : collect *****************************

const arr3=[4,5,6,7,8,9];
const [z,s,...pum]= arr3; // rest(...) use as collect
console .log(z)
console .log(s)
console .log(pum)

