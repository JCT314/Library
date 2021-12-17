let myLibrary = [{title:"Green Eggs and Ham", author:"Dr.Seuss",pages:32,read:false},
{title:"Percy Jackson", author:"Rick Riordan",pages:269,read:true},];
const container = document.querySelector('.container');

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = prompt("Title name?");
    const author = prompt("Author name?");
    const pages = Number(prompt("Pages?"));
    const book = new Book(title,author,pages);
    myLibrary.push(book);
}

function getBooksHTML() {
    return myLibrary.reduce((htmlStr,book) => {
        const bookHTML = `<tr>
        <td class="data">${book.author}</td>
        <td class="data">${book.title}</td>
        <td class="data">${book.pages}</td>
        ${book.read ? `<td class="data read">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon--read" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg></td>` : `<td class="data not-read icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon--read" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
        </svg></td>`}
        </tr>`;
        return htmlStr + bookHTML;
    },''); 
}

function buildTable() {
    let tableBodyHTML = ``;
    if(myLibrary.length === 0) {
        tableBodyHTML = `<tr>
        <td colspan="4" class="message--empty">Nothing to display :(</td>
    </tr>;`
    } else {
        tableBodyHTML = getBooksHTML();
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

    const formHTML = `<form class="form" action="" method=""> 
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
    container.innerHTML = tableHTML + formHTML;
}

buildTable();