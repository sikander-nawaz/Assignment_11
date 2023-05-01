// 7. Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// SOLUTION

function getSubsets(str) {
    const subsets = [];
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
  
    return subsets;
  }

console.log(getSubsets("dog"));