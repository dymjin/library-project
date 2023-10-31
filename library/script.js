const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const myLibrary = [];

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
    myLibrary.forEach((items) => {
        let itemContainer = document.createElement('div');
        let item = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        item.textContent = `${items.info()}`;
        itemContainer.appendChild(item);
        itemContainer.classList.add('item-container');
        container.appendChild(itemContainer);
    });
}

addBookToLibrary('Heello', "Ur mom", 244, true);
addBookToLibrary('X', "Ur dad", 2, true);
addBookToLibrary('Yees', "no", 242444, false);
displayBooks();