class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(newBook) {
      this.books.push(newBook);
    }
  
    deleteBook(bookID) {
      this.books = this.books.filter((book) => book.ID !== Number(bookID));
    }
}

function Book(id, title, author) {
    this.ID = id;
    this.Title = title;
    this.Author = author;
}
const library=new Library();
library.books = [
    {
      ID: 1,
      Title: '400 Days',
      Author: 'Chetan Bhagat',
    },
    {
      ID: 2,
      Title: 'The Ickabog',
      Author: 'J.K Rowling',
    },
    {
      ID: 3,
      Title: 'The Christmas Pig',
      Author: 'J.K Rowling',
    },
];

const title = document.getElementById('Book-title');
const author = document.getElementById('Book-author');
const addButton = document.getElementById('Add');

function addBook() {
    //console.table(library.books);
    const book=new Book(Math.floor(Math.random() * 1000000),title.value,author.value);
    library.books.push(book);
    //console.table(library.books);
    const BookList = document.querySelector('.Book-library');
    BookList.innerHTML = `${BookList.innerHTML}<div class="Book-Generate">
        <p>${book.Title}</p>
        <p>${book.Author}</p>
        <button id=${book.ID} onclick ='removeBook(${book.ID})' type = "button" >Remove</button>
        <hr>
        </div>`;
    // Store the book to the local Storage
    localStorage.setItem('Book-library', JSON.stringify(library.books));
}
 
// Add an event listener  for the add action to be performed
addButton.addEventListener('click', addBook);
// Implement the Booklist section that has to be generated
// Reference the elements
function removeBook(bookId) {
    const lib = document.getElementById(bookId);
    // lib.remove();
    console.table(library.books);
    library.deleteBook(bookId);
    console.table(library.books);
    lib.parentElement.outerHTML = '';
    localStorage.setItem('Book-library', JSON.stringify(library.books));
}
  