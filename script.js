let bookListArray = [];

const submitButton = document.getElementById("add");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
const form = document.getElementById("form");
const error = document.getElementById("error");

const updateLocalStorage = (data) => {
  localStorage.setItem('storage-book', JSON.stringify(data));  
} 

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('storage-book'));
}

// Display Book List with author and remove button // person 2
const displayBooks = () => {
  displayBookList.innerHTML = ``;
  bookListArray?.forEach((book) => {
    const bookItem = document.createElement("tbody");
    bookItem.innerHTML = `
      <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="remove" id=${book.title}>Remove</button>
      <div>
      <hr/>`;
    displayBookList.appendChild(bookItem);
  });
};

const initialize = () => {  
  bookListArray = getLocalStorage() || [];
  // console.log(bookListArray)
  displayBooks();
}

// Adding a Book //
const addBook = (title, author) => {
  const book = { title, author };
  const checkBooks = bookListArray.find((book) => book.title === title);
  const checkAuthor = bookListArray.find((book) => book.author === author);
  if (checkBooks && checkAuthor) {
    error.innerText = "This book already exists!!";
  } else {
    error.innerHTML = "";
    bookListArray.push(book);
    updateLocalStorage(bookListArray);
    displayBooks();
  }
};

const displayBookList = document.getElementById("table");

error.innerHTML = "";
initialize();

const deleteBook = (title) => {
  bookListArray = bookListArray.filter((it) => it.title !== title);
  updateLocalStorage(bookListArray);
  displayBooks();
};

// Document listener for removing book
document.addEventListener("click", (e) => {
  const deleteButton = e.target.closest(".remove");
  if (deleteButton) {
    deleteBook(deleteButton.id);
  }
});

//add book from form
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (bookTitle.value.length === 0 || author.value.length === 0) {
    error.innerText = "Fields cannot be empty!";
  } else {
    addBook(bookTitle.value, author.value);
    form.reset();
  }
});