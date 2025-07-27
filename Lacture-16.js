// Boolean value in js : wnat to take logical design


// Falsy value
// if(null) console.log("45");
// if(undefined) console.log("45");
// if(0) console.log("45");
// if("") console.log("45");
// output: code is not running  because all are falsy value.

// Truthy value

if(" ") console.log("45");//45
if(42) console.log("45");//45
if(1) console.log("45");//45
if([]) console.log("45");//45
if({}) console.log("45");//45
// output will 45


// c. Boolean() function

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(45));
console.log(Boolean(undefined));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));

// Output: true
false
false
true
false
true
true
true