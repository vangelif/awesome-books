let bookListArray = [];

const targetBody = document.querySelector('body');

// Adding a Book // 
const addBook = (title, author) => {
  const book = {title, author};
  bookListArray.push(book);
  
displayBooks();
};

// person 2
const displayBookList = document.getElementById('table');

// Display Book List with author and remove button // person 2
const displayBooks = () => {
  displayBookList.innerHTML = ``;
  bookListArray.forEach((book) => {
    const bookItem = document.createElement('tbody');
    bookItem.innerHTML = `
      <tr><td>${book.title}</td></tr>
      <tr><td>${book.author}</td></tr>
      <tr><td><button class="remove" onclick="removeBook('${book.title}')">Remove</button></td> </tr>
      <hr>`;
    displayBookList.appendChild(bookItem);
  });
};

displayBooks();