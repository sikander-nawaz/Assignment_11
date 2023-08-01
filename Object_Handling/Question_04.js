// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//     var library = [
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true },

//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//     },

//     {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
//     }
//     ];

// SOLUTION

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true },

    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },

    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];

for (let index = 0; index < library.length; index++) {
    if (library[index].readingStatus === true) {
        console.log(`"${library[index].title}" by "${library[index].author}" has been read.`);
    }else{
        console.log(`"${library[index].title}" by "${library[index].author}" has not been read.`);
    }
};