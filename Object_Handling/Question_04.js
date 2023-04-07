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

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true 
    },
        
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

for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const bookInfo = library.title + ' by ' + library.author;

    if (book.readingStatus === true) {
        console.log(`${book.title} by ${book.author} has been readed`);
    }else if (book.readingStatus === false) {
        console.log(`${book.title} by ${book.author} has not been readed`);
    }
    
}