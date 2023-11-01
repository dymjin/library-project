const container = document.createElement('div');
const bookDialog = document.getElementById('book-dialog');
const openDialog = document.getElementById('open-dialog');
const confirmBtn = document.getElementById('confirm-btn');
const dialogContainer = document.getElementById('dialog-container');
const pageCount = document.getElementById('pages');
const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('book-title');


container.classList.add('container');
document.body.appendChild(container);

const myLibrary = [];

openDialog.addEventListener('click', () => {
    bookDialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // addBookToLibrary();
    console.log(pageCount.value);
    bookDialog.close();
})

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
    myLibrary.push(new Book(title, author, pages, hasRead));
}

function displayBooks() {
    myLibrary.forEach((books) => {
        let bookContainer = document.createElement('div');
        let book = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let bookIcons = document.createElement('div');
        let favoriteIcon = document.createElement('span');
        let pagesIcon = document.createElement('div');

        title.textContent = `${books.title}`;
        author.textContent = `${books.author}`;
        favoriteIcon.textContent = "star";
        pagesIcon.innerHTML = `<span class="material-symbols-outlined">auto_stories</span>${books.pages}`;

        title.classList.add('book-title');
        author.classList.add('book-author');
        favoriteIcon.classList.add("material-symbols-outlined");
        book.classList.add('book');
        bookContainer.classList.add('book-container');
        bookIcons.classList.add('book-icons');

        book.appendChild(title);
        book.appendChild(author);

        bookIcons.appendChild(favoriteIcon);
        bookIcons.appendChild(pagesIcon);
        bookContainer.appendChild(book);
        bookContainer.appendChild(bookIcons);
        container.appendChild(bookContainer);
        container.appendChild(dialogContainer);
    });
}

addBookToLibrary('Heello', "Ur mom", 244, true);
addBookToLibrary('X', "Ur dad", 2, true);
addBookToLibrary('Yees', "no", 242444, false);
displayBooks();