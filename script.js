const targetBody = document.querySelector('body');

const createContainer = document.createElement('section');
targetBody.appendChild(createContainer);

// Adding a Book // 
const addBook = (title, author) => {
  const book = {title, author};
  bookListArray.push(book);
};