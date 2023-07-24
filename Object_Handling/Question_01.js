// 1. Write a JavaScript program to list the properties of a JavaScript object.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name, sclass, rollno

// SOLUTION

const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};

for (const key in student) {
    console.log(key);
};