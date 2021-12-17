let myLibrary = [{author:'a',title:'a',pages:1,read:true},
{author:'a',title:'a',pages:1,read:false}];
const container = document.querySelector('.container');
const addBtn = document.querySelector('.icon-box');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.btn--submit');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const checkMarkIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon--read" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>`;
const minusIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon--read" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
</svg>`;

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
        const bookHTML = `<tr data-index=${index}>
        <td class="data number">${index + 1}</td>
        <td class="data">${book.author}</td>
        <td class="data">${book.title}</td>
        <td class="data">${book.pages}</td>
        ${book.read ? `<td class="data read did-read">
        ${checkMarkIcon}</td>` : `<td class="data read not-read">${minusIcon}</td>`}
        <td class="data"><div class="option"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg><div></td>
        <td class="data"><div class="option"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg></div></td>
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
            <th class="data-header">Delete</th>
            <th class="data-header">Edit</th>
        </tr>
    </thead>
    <tbody>
    ${tableBodyHTML}
    </tbody>
    </table></div>`;

    container.innerHTML = tableHTML;
}

function switchToTable() {
    authorInput.value = pagesInput.value = titleInput.value = ``;
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.display = "flex";
    form.style.display = "none";
    container.style.height = "90vh";
}

function switchToForm(e) {
    e.stopPropagation();
    const form = document.querySelector('.form');
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.display = "none";
    form.style.display = "block";
    container.style.height = "0vh";
}

buildTable();

document.body.addEventListener('click', (e) => {
    const form = document.querySelector('.form');
    if(form.style.display === "") return;
    const isFormSelected = e.target.closest('.form');
    if(!isFormSelected) {
        switchToTable();
    }
});

container.addEventListener('click', (e) => {
    e.stopPropagation();
    const readContainer = e.target.closest('.read');
    if(!readContainer) return;
    const rowIndex = e.target.closest('tr').dataset.index;
    myLibrary[rowIndex].read = !myLibrary[rowIndex].read;
    if(readContainer.classList.contains('did-read')) {
        readContainer.innerHTML = minusIcon;
    } else {
        readContainer.innerHTML = checkMarkIcon;
    }
    readContainer.classList.toggle('did-read');
    readContainer.classList.toggle('not-read');

});

addBtn.addEventListener('click',switchToForm);

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    addBookToLibrary();
    switchToTable();
    buildTable();
});
