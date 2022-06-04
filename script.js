/* eslint-disable */
// Declare the constants using the DOM manipulation
const title = document.getElementById('Book-title');
const author = document.getElementById('Book-author');
const addButton = document.getElementById('Add');

// Create a variable for holding the local data
let bosok = JSON.parse(localStorage.getItem('Book-library'));
// Check if the Local storarege is empty
if (!books) {
  books = [
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

// Create object that will get its value from the form input

// Add a book to the local storage
// Create a function for adding
function addBook() {
  const bookCollection = {
    ID: Math.floor(Math.random() * 1000000),
    Title: title.value,
    Author: author.value,
  };
  books.push(bookCollection);
  const BookList = document.querySelector('.Book-library');
  BookList.innerHTML = `${BookList.innerHTML}<div class="Book-Generate">
      <p>${bookCollection.Title}</p>
      <p>${bookCollection.Author}</p>
      <button id=${bookCollection.ID} onclick ='removeBook(${bookCollection.ID})' type = "button" >Remove</button>
      <hr>
      </div>`;
  // Store the book to the local Storage
  localStorage.setItem('Book-library', JSON.stringify(books));
}
// Add an event listener  for the add action to be performed
addButton.addEventListener('click', addBook);

// Implement the Booklist section that has to be generated
// Reference the elements
function removeBook(bookId) {
  const lib = document.getElementById(bookId);
  // lib.remove();
  books = books.filter((book) => book.ID !== Number(bookId));
  lib.parentElement.outerHTML = '';
  localStorage.setItem('Book-library', JSON.stringify(books));
}
books.forEach((element) => {
  const BookList = document.querySelector('.Book-library');
  BookList.innerHTML = `${BookList.innerHTML}<div class="Book-Generate">
    <p>${element.Title}</p>
    <p>${element.Author}</p>
    <button id=${element.ID} onclick ='removeBook(${element.ID})' type = "button" >Remove</button>
    <hr>
    </div>`;
  document.getElementById(element.ID).addEventListener('click', removeBook);
});
