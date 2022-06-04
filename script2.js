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
const library = new Library();
library.books = JSON.parse(localStorage.getItem('Book-library'));
if (!library.books) {
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
}

const title = document.getElementById('Book-title');
const author = document.getElementById('Book-author');
const addButton = document.getElementById('Add');
function appendBookCard(book) {
  const BookList = document.querySelector('.Book-library');

  BookList.innerHTML = `${BookList.innerHTML}<div class="Book-Generate">
          <p>"${book.Title}"</p> 
          <p>By ${book.Author}</p>
          <button id=${book.ID} onclick ='removeBook(${book.ID})' type = "button" >Remove</button>
          </div>`;
}
function addBook() {
  const book = new Book(Math.floor(Math.random() * 1000000), title.value, author.value);
  library.addBook(book);

  appendBookCard(book);
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

  library.deleteBook(bookId);
  lib.parentElement.outerHTML = '';
  localStorage.setItem('Book-library', JSON.stringify(library.books));
}
library.books.forEach((element) => {
  appendBookCard(element);
  document.getElementById(element.ID).addEventListener('click', removeBook);
});
window.onload = () => {
 
  
  setDate();
};ffor
// eslint-disable-next-line no-unused-vars
function displaySection(section) {
  const sectionList = document.getElementById('Book-library');
  const sectionForm = document.getElementById('form');
  const sectionContact = document.getElementById('contact');
  const heading = document.getElementById('title');

  switch (section) {
    case 'Book-library':
      sectionList.style.display = 'block';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'none';
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'form':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'block';
      sectionContact.style.display = 'none';
      heading.innerHTML = 'Add a New Book';
      break;

    case 'contact':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'block';
      heading.innerHTML = 'Contact Information';
      break;

    default: break;
  }
}
function setDate() {
  const date = document.getElementById('date');
  // eslint-disable-next-line no-undef
  const { DateTime } = luxon;

  date.innerHTML = DateTime.now().toFormat('LLL dd yyyy, t');
}



  