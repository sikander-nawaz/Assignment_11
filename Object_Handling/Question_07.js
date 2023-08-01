// 7. Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// SOLUTION

// let str = "dog";
// let empty = [];
// for (let index = 0; index < str.length; index++) {
//     empty.push(str[index])
//     empty.push(str[index] + str[index + 1])
// }

// empty.splice(2, 0, "dog");
// empty.pop();
// console.log(empty);


let str1 = "dog";
let empty = [];
for (i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
        // console.log(i);
        // console.log(j);
        empty.push(str1.substring(i, j))
    }
};

console.log(empty);