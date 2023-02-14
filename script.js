const targetBody = document.querySelector('body');

const createContainer = document.createElement('section');
createContainer.innerHTML = `<h1>Awesome Books</h1>`;
targetBody.appendChild(createContainer);

////////// Book Form ///////// 
const createForm = document.createElement('form');
createForm.id = 'form'
createForm.innerHTML = `
<input id="book-title" type="text" placeholder="Title"><br><br>
<input id="author" type="name" placeholder="Author"><br><br>
<button type="submit">Add</button>`;

createContainer.appendChild(createForm);

// Adding a Book // 
const addBook = (title, author) => {
  const book = {title, author};
  bookListArray.push(book);
};