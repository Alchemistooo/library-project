// Array to store books in library
const myLibrary = [];

// Book object constructor
function Book(title, author, pages, status){
  if (!new.target) {
    throw Error("Must use 'new' operator when calling constructor")
  };
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

// Creates a new book object and adds to library
function addBookToLibrary(title, author, pages, status) {
  let book = new Book(title, author, pages, status);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
};

// Generates the table displayed on the page
function displayBooks(array) {
  const tbody = document.querySelector("tbody");

  array.forEach(book => {
    const tr = document.createElement("tr");
    
    tr.setAttribute("data-book-id", book.id);
    tbody.appendChild(tr);
    
    for (const prop in book) {
      const td = document.createElement("td");
      td.textContent = book[prop];
      tr.appendChild(td)
    };
    
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-btn");
    deleteButton.setAttribute("class", "modify-btns");
    deleteButton.textContent = "Remove";
    tr.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.setAttribute("id", "edit-btn");
    editButton.setAttribute("class", "modify-btns");
    editButton.textContent = "Change status";
    tr.appendChild(editButton);
  });
};

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 255,"Reading");
addBookToLibrary("Mistborn", "Brandon Sanderson", 1000, "Not started");
displayBooks(myLibrary);

const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").value;

  addBookToLibrary(title, author, pages, status);
  displayBooks(myLibrary);
});
