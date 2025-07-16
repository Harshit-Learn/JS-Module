// Array

//syntax

// const arr = ["harsh" , 34 , 0 , null , ]; // syntax
// console.log( arr[0]);
// console.log( arr[1]);
// console.log( arr[2]);
// console.log( arr[3]);

// const arr1 = new Array( 5 , 4, 3); // with new 
// console.log( arr1);

// // Arrays Mrthods

// // 1. push ( ) : add from end & pop (): remove from end

// const arr2 = [1 ,2,3,{name:"harshit"}];
// arr2.push(4); // push 
// console.log(arr2); // [ 1,2,3,..., 4]

// //pop()

// const arr3 = [1 ,2,3,{name:"harshit"}];
// arr2.pop(4); // push 
// console.log(arr3);

// 2. shift() : remove from start  & unshift ( ) : add from start

// const arr4 = [ 1,4,"name"];
// arr4.shift(); // [ 4, 'name' ]
// arr4.unshift(23); // [ 23, 4, 'name' ]
// console.log(arr4);

// 3. map() : make new arrar , apply function on each element

// const arr5 = [1,2,3,4];
// const multiply= arr5.map(n => n*5); // using arrow function
// console.log(multiply);

//4. filter() : Return new array & condition ke basis pr element ko filter krta he

// const arr6 = [3,4,5,6,7];
// const even = arr6.filter(n => n%2==0);
// console.log(even); // [4,6]

// 5. Reduce()

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10

// 6 . find () & findIndex();

// const num = [ 23,45,1,9];
// //const find = num.find(n => n>10) // 23
// const find = num.findIndex(n => n>10) // o
// console.log(find);

// 7.  includes() : check element is include or not & return true / false

// const num = [ 23,45,1,9];
// const inc = num.includes(2);
// console.log(inc);

// 8. some() : any one element is satisfy the condition then return true/false
// every() : all element should be satisfy the condition

// const arr= [2,10, 12, 14];
// //const some= arr.some(n=> n>90);
// const some= arr.every(n=> n%2==0); // true
// console.log(some);

// 9. sort ()

// const arr= [2,10, 12,4,0,7, 14];
// //const sort = arr.sort() // [ 0 , 2,10, 12,4,7, 14]
// const sort = arr.sort((a,b) => a-b);
// console.log( sort); // [0,  2,  4, 7, 10, 12, 14]

// 10 . splice() & slice()

// const arr = [1,2,3,4];
// const spli= arr.splice(1,2); // 
// console.log(spli); // doubt

// const arr1 = [1,2,3,4];
// const spli1= arr.slice(1,3); // 
// console.log(spli1); // doubt

// 11. flat()

// const arr = [1, [2, [3]]];
// console.log(arr.flat()); // [1, 2, [3]]
// console.log(arr.flat(2)); // [1, 2, 3]

const a= ["hello" , "boys"];
const v = a.join('');
console.log(v);



