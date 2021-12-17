let myLibrary = [{title:"Green Eggs and Ham", author:"Dr.Seuss",pages:32},
{title:"Percy Jackson", author:"Rick Riordan",pages:269},];
const container = document.querySelector('.container');

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = prompt("Title name?");
    const author = prompt("Author name?");
    const pages = Number(prompt("Pages?"));
    const book = new Book(title,author,pages);
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        // const bookEl = document.createElement('div');
        // bookEl.classList.add('book');
        // bookEl.textContent = `${book.title} ${book.author} ${book.pages}`;
        // container.appendChild(bookEl);
    }); 
}

displayBooks();