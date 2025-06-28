function Book(title, author, pages, read){
  if (!new.target) {
    throw Error("Must use 'new' operator when calling constructor")
  };
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  };
};

const book_1 = new Book("The Hobbit", "J.R.R Tolkien", 299, "Finished reading");

console.log(book_1.info());
