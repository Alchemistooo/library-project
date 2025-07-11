// Array to store books in library
const myLibrary = [];

// Book object constructor
function Book(title, author, pages, read){
  if (!new.target) {
    throw Error("Must use 'new' operator when calling constructor")
  };
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  // };
};

// Creates a new book object and adds to library
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
};

// Generates the table displayed on the page
function displayBooks(array) {
  const tbody = document.querySelector("tbody");

  array.forEach(book => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (const prop in book) {
      const td = document.createElement("td");
      td.textContent = book[prop];
      tr.appendChild(td)
    };
  });
};

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 255,"Reading");
addBookToLibrary("Mistborn", "Brandon Sanderson", 1000, "Not started");

displayBooks(myLibrary);

const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#close-btn");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});