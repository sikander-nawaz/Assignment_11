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

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
     
console.log(library.sort((a, b) => a.libraryID - b.libraryID));  // Got a new point