let myLibrary = [{title:"Green Eggs and Ham", author:"Dr.Seuss",pages:32,read:false}];
const container = document.querySelector('.container');
const addBtn = document.querySelector('.icon-box');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.btn--submit');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = Number(pagesInput.value);
    const read = readInput.value === "Yes" ? true : false;
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
}

function getBooksHTML() {
    return myLibrary.reduce((htmlStr,book,index) => {
        const bookHTML = `<tr>
        <td class="data number">${index + 1}</td>
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
    const tableHTML = `<div class="table-container"><table class="table">
    <thead class="table-head">
        <tr>
            <th class="data-header">#</th>
            <th class="data-header">Author</th>
            <th class="data-header">Title</th>
            <th class="data-header">Pages</th>
            <th class="data-header">Read?</th>
        </tr>
    </thead>
    <tbody>
    ${tableBodyHTML}
    </tbody>
    </table></div>`;

    container.innerHTML = tableHTML;
}

buildTable();
addBtn.addEventListener('click',(e) => {
    const form = document.querySelector('.form');
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.display = "none";
    form.style.display = "block";
    // change back to 90vh
    container.style.height = "0vh";
});

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    addBookToLibrary();
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.display = "block";
    form.style.display = "none";
    container.style.height = "90vh";
    buildTable();
});

