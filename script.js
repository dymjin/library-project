const container = document.createElement('div');
const bookDialog = document.getElementById('bdialog');
const openDialog = document.getElementById('open-dialog');

const dialogContainer = document.getElementById('dialog-container');
const bookTitle = document.getElementById('btitle');
const bookAuthor = document.getElementById('bauthor');
const pageCount = document.getElementById('bpages');
const cancelBtn = document.querySelector('button[value="cancel"]');
const confirmBtn = document.getElementById('confirm-btn');
const hasRead = document.getElementById('readBool');

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
        addBookToLibrary(bookTitle.value, bookAuthor.value, pageCount.value, hasRead.checked);
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
    console.log(hasRead.checked);


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
    let pagesContainer = document.createElement('div');
    let pagesIcon = document.createElement('span');
    let removeIcon = document.createElement('span');
    let readStatus = document.createElement('span')

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    favoriteIcon.textContent = "star";
    pagesIcon.textContent = 'auto_stories';
    pagesContainer.textContent = `${book.pages}`;
    removeIcon.textContent = "close";
    readStatus.textContent = "book_2"

    bookContainer.classList.add('book-container');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookText.classList.add('book-text');

    readStatus.classList.add('material-symbols-outlined')
    removeIcon.classList.add("material-symbols-outlined");
    bookIcons.classList.add('book-icons');
    favoriteIcon.classList.add("material-symbols-outlined");
    pagesIcon.classList.add('material-symbols-outlined');

    bookText.appendChild(bookTitle);
    bookText.appendChild(bookAuthor);

    pagesContainer.appendChild(pagesIcon);
    bookIcons.appendChild(pagesContainer);
    bookIcons.appendChild(favoriteIcon);
    bookIcons.appendChild(removeIcon);
    bookIcons.appendChild(readStatus);

    bookContainer.appendChild(bookText);
    bookContainer.appendChild(bookIcons);
    bookContainer.setAttribute("data", `${myLibrary.indexOf(book)}`);

    container.insertBefore(bookContainer, dialogContainer);

    readStatus.addEventListener('click', () => {
        if (book.read) {
            readStatus.textContent = "book_3";
            book.read = false;
        } else {
            readStatus.textContent = "book_2";
            book.read = true;
        }
    })

    removeIcon.addEventListener("click", () => {
        myLibrary.splice(bookContainer.getAttribute('data'), 1);
        container.removeChild(bookContainer);
    });
}