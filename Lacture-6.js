// CLOSURE IN JS

//Lexical Scope: An inner function can access variables from its outer function.
// Closure: A function that retains access to its lexical scope, even when the function is executed outside that scope.

function create(){
    let  count = 0;
    return function (){
        count++;
        return count;

    };
}

const counter= create();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3   //      counter is a function returned by create().
//To get the incremented value, you need to call counter() each time.
// console.log(counter) prints the function definition, not its result. 
// console.log(counter()) prints the incremented count.
