let myLibrary = [];/*[{title:"Green Eggs and Ham", author:"Dr.Seuss",pages:32},
{title:"Percy Jackson", author:"Rick Riordan",pages:269},];
const container = document.querySelector('.container');*/
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

function buildTable() {
    let tableBodyHTML = ``;
    if(myLibrary.length === 0) {
        tableBodyHTML = `<tr>
        <td colspan="4" class="message--empty">Nothing to display :(</td>
    </tr>;`
    }
    const tableHTML = `<table class="table">
    <thead class="table-head">
        <tr>
            <th class="data-header">Title</th>
            <th class="data-header">Author</th>
            <th class="data-header">Pages</th>
            <th class="data-header">Read?</th>
        </tr>
    </thead>
    <tbody>
    ${tableBodyHTML}
    </tbody>
    </table>`;
    container.innerHTML = tableHTML + `<form class="form" action="" method=""> 
    <h2 class="form-title">Add New Book</h2>
    <div class="form-field">
        <label for="author">Author</label>
        <input class="input" id="author" type="text" placeholder="author name">
    </div> 
    <div class="form-field">
        <label for="title">Title</label>
        <input class="input" id="title" type="text" placeholder="book title">
    </div>
    <div class="form-field">
        <label for="pages">Pages</label>
        <input class="input" id="pages" type="number" placeholder="enter total pages">
    </div>
    <div class="form-field">
        <label for="read">Read?</label>
        <select class="dropdown" id="read">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
    <button class="btn">Submit</button>
</form>
<div class="icon-box">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon--add" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
</div>`;
}

displayBooks();
buildTable();