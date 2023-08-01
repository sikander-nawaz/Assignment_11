// 16. Write a JavaScript function to get a copy of the object where the keys have become the value and the values the keys.

// SOLUTION

let obj = {
    name : "ali",
    age : 23,
    edu : "BSCS",
    semester : 8
};

let array = Object.entries(obj);
let valueKey = [];

for (let index = 0; index < array.length; index++) {
    let empty = [];
    let a = array[index][0];
    let b = array[index][1];
    empty.push(b, a);
    valueKey.push(empty);
};

console.log(valueKey);