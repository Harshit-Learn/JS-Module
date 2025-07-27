// set & map in js 
// History: before ES6 (2015)

// JS ha sthe Array & object but these has some limitations
// i> objet use only string / symbol as key.
// ii> Array has the duplicate elememt
//iii> There no clean way to store unique elememt or use complex key

//so , that'why set & map comes is picture

// 1. Set (): unique valre collection ( Array)

const myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);
console.log(myset.has(1)) // true
console.log(myset.delete(3)) // Set(2) { 1, 2 }
console.log(myset) // Set(3) { 1, 2, 3 }
console.log(myset) // Set(3) { 1, 2, 3 }

// ******************** Map(): Built-in object that hold key-value pair  where key can be any type not just string.

const myMap = new Map();

// Set key-value pairs
myMap.set("name", "Harshit");
myMap.set("age", 25);
myMap.set(1, "one");
myMap.set(true, "yes");

// Get values
console.log("Name:", myMap.get("name"));  // Harshit
console.log("Age:", myMap.get("age"));    // 25
console.log("Boolean true:", myMap.get(true)); // yes

// Loop through map
console.log("Map entries:");
for (let [key, value] of myMap) {
  console.log(key, "=>", value);
}

// Map size
console.log("Map size:", myMap.size); // 4

// output: Name: Harshit
// Age: 25
// Boolean true: yes
// Map entries:
// name => Harshit
// age => 25
// 1 => one
// true => yes
// Map size: 4