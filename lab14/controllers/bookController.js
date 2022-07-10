const Book = require("../models/book");

exports.getBooks = (req, res, next) => {
  res.status(200).json(Book.fetchAll());
};

exports.getBookById = (req, res, next) => {
  res.status(200).json(Book.findById(req.params.bookId));
};
// id, title, ISBN, publishedDate, author
exports.save = (req, res, next) => {
  const book = req.body;
  const savedBook = new Book(
    book.id,
    book.title,
    book.isbn,
    book.pdate,
    book.author
  ).save();
  res.redirect("/");
};

exports.update = (req, res, next) => {
  const book = req.body;
  const updatedBook = new Book(
    req.params.bookId,
    book.title,
    book.isbn,
    book.pdate,
    book.author
  ).update();
  res.status(200).json(updatedBook);
};

exports.deleteById = (req, res, next) => {
  Book.deleteById(req.params.bookId);
  res.status(200).end();
};
