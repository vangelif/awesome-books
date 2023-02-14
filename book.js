// initialize the book
class Book {
  constructor() {
    this.booksList = this.getBookFromStorage() || [];
  }
  // add books

  // remove books

  // update storage

  // get book from storage
  getBookFromStorage() {
    return JSON.parse(localStorage.getItem('storage-book'));
  }
}
