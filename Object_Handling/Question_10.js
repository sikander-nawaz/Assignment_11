// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
// var library = [
// {
// title: 'The Road Ahead',
// author: 'Bill Gates',
// libraryID: 1254
// },{
// title: 'Walter Isaacson',
// author: 'Steve Jobs'
// libraryID: 4264
// },{
// title: 'Mockingjay: The Final Book of The Hunger Games',
// author: 'Suzanne Collins',
// libraryID: 3245
// }];

// SOLUTION

let library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs'
    // libraryId: 5998
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245
    }
];

function sortingArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i].libraryID < array[j].libraryID) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }  
    
    return array;
}

console.log(sortingArray(library));