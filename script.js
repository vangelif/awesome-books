const bookTable = document.querySelector('#book-table');

let bookList = [
    {   
        key: 1,
        title: 'Anna Karenyna',
        author: 'Leo Tolstoy'
    },
    {
        key: 2,
        title: 'Histories',
        author: 'Herodotus'
    },
    {
        key: 3,
        title: 'The name of the rose',
        author: 'Umberto Eco'
    }
];

//display books
function displayBooks(bookList) {
    // bookTable.innerHTML = '';
    bookList.forEach(book => {
        bookTable.insertAdjacentHTML('afterend', `
        <tr>
            <td>Author: ${book.author}</td>
            <td>Title: ${book.title}</td>
            <td>
                <button class="removeBtn" id="${book.key}">Remove</button>
            </td>
        </tr>`);
    
    });
}

displayBooks(bookList);

//add book
function addNewBook(title,author) {
    const book = {title, author};
    bookList.push(book);
}

//delete book
function deleteBook(id) {
    // console.log(id);
    bookList = bookList.filter(it=> 
        it.key.toString()  !== id.toString()
        );
    
    // console.log(id);
    displayBooks(bookList);
}

//storing to local storage
function storeBook () {

}

//retrieving books from local storage
function getBooks(){

}

document.addEventListener('click', e => {
    const removeBtn = e.target.closest('.removeBtn');
    if(removeBtn) {
        deleteBook(removeBtn.id)
    }
})

