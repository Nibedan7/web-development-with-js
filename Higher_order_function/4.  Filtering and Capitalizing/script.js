let books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925},
    {title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 2015},
    {title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 2011},
    {title: "The Hunger Games", author: "Suzanne Collins", publicationYear: 2008},
    {title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", publicationYear: 1997},
    {title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", publicationYear: 2005}
  ];

let result = books.filter((book) => {
    let newBook = book;
    newBook.author = newBook.author.toUpperCase();
    return newBook.publicationYear >= 2010;
});
console.log(result);


books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925},
    {title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 2015},
    {title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 2011},
    {title: "The Hunger Games", author: "Suzanne Collins", publicationYear: 2008},
    {title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", publicationYear: 1997},
    {title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", publicationYear: 2005}
  ];

let resultBetter = books.filter((book) => book.publicationYear>=2010).map((book) => ({title: book.title, author: book.author.toUpperCase(), publicationYear: book.publicationYear}))
console.log(resultBetter);