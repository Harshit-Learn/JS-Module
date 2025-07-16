// Shallow & Deep copy
// copy the Array & object 

// shallow: JavaScript me jab hum kisi object ya array ko copy karte hain, hum do tarike se kar sakte hain:

const orig={
    name:"harshit",
    address: {
        city: "delhi"
    }
};
//console.log( orig.name); // harshit
//console.log( orig.address.city); // delhi

// const copy = {... orig};
// copy.name =  "amit";
// copy.address.city = " mumbai";

// console.log( orig.name); //     harshit
// console.log( orig.address.city); // mumbai,  because  Agar object/array me nested object hai, wo reference se copy hota hai, alag memory nahi milti.

// *******************************************************************************************************************

// 2. Deep copy : Deep copy me nested object ya array bhi alag memory me copy ho jata hai, isliye original me koi change nahi hota.

const original = {
  name: "Harshit",
  address: {
    city: "Delhi"
  }
};

const copy = JSON.parse(JSON.stringify(original));

copy.name = "Amit";
copy.address.city = "Mumbai";

console.log(original.name); // Harshit ✅
console.log(original.address.city); // Delhi ✅

