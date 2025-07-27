

// // 🟢 What is Prototype?
// // ✅ What
// // JavaScript me har object ke paas ek hidden property hoti hai: [[Prototype]].


// // Ye prototype ek reference hota hai kisi aur object ka, jisse wo properties and methods inherit karta hai.


// // JavaScript me ye prototype chain banata hai → agar koi property object me nahi milti, to prototype chain me upar check hota hai.



// // ✅ Example
// const person = {
//   greet() {
//     console.log("Hello!");
//   },
// };

// const student = {
//   study() {
//     console.log("Studying...");
//   },
// };

// student.__proto__ = person;

// student.greet(); // Hello!
// student.study(); // Studying...

// // Explanation:
// // student me greet() method nahi hai.


// // JavaScript __proto__ (prototype) me dekhta hai → person object me mil jaata hai.



// // ✅ Why prototype?
// // Objects ke beech code sharing (reuse) karna.


// // Memory efficient: Ek hi function sabhi objects share karte hain.


// // Dynamic extension possible.





// // 🔵 What is Inheritance?
// // ✅ What
// // Inheritance = ek object doosre object ki properties aur methods ko reuse kar sake.


// // JavaScript me inheritance prototype ke through hota hai → isi ko prototype inheritance kehte hain.



// // ✅ Example
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a sound.`);
// };

// const dog = new Animal("Dog");
// dog.speak(); // Dog makes a sound.

// // Explanation:
// // Animal ek constructor function hai.


// // speak method ko Animal.prototype par add kiya gaya hai.


// // dog object ne Animal ko inherit kiya → dog.speak() kaam karta hai.



// //✅ ES6 Class Syntax (Simplified)
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const d = new Dog("Buddy");
// d.speak(); // Buddy barks.



const person = {
    greet(){
        console.log("hello")
    }
}

const student ={
    study(){
        console.log("studying");
    }
}

student.__proto__ = person;

student.greet(); // greet , student function ke ander nahi he fir bhi run ho rha he due to proto type
student.study();