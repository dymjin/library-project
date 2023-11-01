const container = document.createElement('div');
const bookDialog = document.getElementById('bdialog');
const openDialog = document.getElementById('open-dialog');

const dialogContainer = document.getElementById('dialog-container');
const bookTitle = document.getElementById('btitle');
const bookAuthor = document.getElementById('bauthor');
const pageCount = document.getElementById('bpages');
const cancelBtn = document.querySelector('button[value="cancel"]');
const confirmBtn = document.getElementById('confirm-btn');

container.classList.add('container');
document.body.appendChild(container);
container.appendChild(dialogContainer);

const myLibrary = [];

openDialog.addEventListener('click', () => {
    bookDialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {
    if (pageCount.value === '' || bookAuthor.value === '' || bookTitle.value === '') {
        event.preventDefault();
    } else {
        console.log(`pagecount: ${pageCount.value}\nauthor: ${bookAuthor.value} \ntitle: ${bookTitle.value}`);
        event.preventDefault();
        addBookToLibrary(bookTitle.value, bookAuthor.value, pageCount.value, true);
        console.log(document.querySelector('.book-container'));
        bookDialog.close();
        pageCount.value = '';
        bookAuthor.value = '';
        bookTitle.value = '';
    }
})

cancelBtn.addEventListener('click', () => {
    pageCount.value = '';
    bookAuthor.value = '';
    bookTitle.value = '';
});

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = hasRead
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${hasRead}`;
    }
}

function addBookToLibrary(title, author, pages, hasRead) {
    let book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
    let bookContainer = document.createElement('div');
    let bookText = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookIcons = document.createElement('div');
    let favoriteIcon = document.createElement('span');
    let pagesIcon = document.createElement('div');

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    favoriteIcon.textContent = "star";

    bookContainer.classList.add('book-container');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookText.classList.add('book-text');

    bookIcons.classList.add('book-icons');
    favoriteIcon.classList.add("material-symbols-outlined");
    pagesIcon.innerHTML = `<span class="material-symbols-outlined">auto_stories</span>${book.pages}`;

    bookText.appendChild(bookTitle);
    bookText.appendChild(bookAuthor);
    bookIcons.appendChild(favoriteIcon);
    bookIcons.appendChild(pagesIcon);
    bookContainer.appendChild(bookText);
    bookContainer.appendChild(bookIcons);
    container.insertBefore(bookContainer, dialogContainer);
}

