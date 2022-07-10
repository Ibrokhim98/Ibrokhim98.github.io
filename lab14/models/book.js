let books = [];

module.exports = class Book {
  constructor(id, title, isbn, pdate, author) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.pdate = pdate;
    this.author = author;
  }

  save() {
    if (this.id) {
      const index = books.findIndex((p) => p.id === this.id);
      if (index > -1) {
        books.splice(index, 1, this);
        return this;
      }
    }
    this.id = Math.random().toString();
    books.push(this);
    return this;
  }

  // update() {
  //   const index = books.findIndex((p) => p.id === this.id);
  //   if (index > -1) {
  //     books.splice(index, 1, this);
  //     return this;
  //   } else {
  //     throw new Error("NOT Found");
  //   }
  // }

  static fetchAll() {
    return books;
  }

  static findById(bookId) {
    const index = books.findIndex((p) => p.id === bookId);
    if (index > -1) {
      return books[index];
    } else {
      throw new Error("NOT Found");
    }
  }

  static deleteById(bookId) {
    const index = books.findIndex((p) => p.id === bookId);
    if (index > -1) {
      books = books.filter((p) => p.id !== bookId);
    } else {
      throw new Error("NOT Found");
    }
  }
};
