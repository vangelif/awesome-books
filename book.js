// initialize the book
class Book {
  constructor() {
    this.booksList = this.getBookFromStorage() || [];
  }

  // add books
  addBook(author, title){
    let updatedBook = [
      ...this.booksList,
      {author, title}
    ];
    this.updateStorage(updatedBook);
  }

  // remove books
  removeBook(title){
    let updatedBook = this.booksList.filter((it) => it.title !== title);
    this.updateStorage(updatedBook);
  }

  // Get books
  getBook(){
    return this.booksList;
  }

  // update storage
  updateStorage(data){
    localStorage.setItem('storage-book', JSON.stringify(data));
    this.booksList = data;
  }

  // get book from storage
  getBookFromStorage() {
    return JSON.parse(localStorage.getItem('storage-book'));
  }
}
