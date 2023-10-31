const container = document.createElement('div');
const bookDialog = document.getElementById('book-dialog');
const openDialog = document.getElementById('open-dialog');
const dialogContainer = document.getElementById('dialog-container');
container.classList.add('container');
document.body.appendChild(container);
const myLibrary = [];

openDialog.addEventListener('click', () => {
    bookDialog.showModal();
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
        title.classList.add('book-title');
        author.classList.add('book-author');
        favoriteIcon.classList.add("material-symbols-outlined");
        favoriteIcon.textContent = "star";
        pagesIcon.innerHTML = `<span class="material-symbols-outlined">auto_stories</span>${books.pages}`;
        book.classList.add('book');
        book.appendChild(title);
        book.appendChild(author);
        bookContainer.classList.add('book-container');
        bookIcons.classList.add('book-icons');
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