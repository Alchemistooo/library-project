const myLibrary = [];

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

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
};

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

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 255,"reading");
addBookToLibrary("Mistborn", "Brandon Sanderson", 1000, "not read");

displayBooks(myLibrary);