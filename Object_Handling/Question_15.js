// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// SOLUTION

let obj = {
    name : "ali",
    age : 23,
    edu : "BSCS",
    semester : 8
};

console.log(Object.entries(obj));