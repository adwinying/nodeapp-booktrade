const Book = require('../models/bookModel')

const sendErr = (err, res) => {
  res.json({
    success: false,
    message: err.message,
  })
}

const listAllBooks = (req, res) => {
  Book.fetchAll((err, books) => {
    if (err) return sendErr(err, res)

    res.json({
      success: true,
      books,
    })
  })
}

const createBook = (req, res) => {
  Book.create(req.body.title, req.user._id, (err, book) => {
    if (err) return sendErr(err, res)

    res.json({
      success: true,
      book,
    })
  })
}

const updateBook = (req, res) => {
  const targetBook = {
    _id: req.body._id,
    title: req.body.title,
    owner: req.body.owner,
    lender: req.body.lender,
    imageURL: req.body.imageURL,
    confirmed: req.body.confirmed,
  }

  Book.update(targetBook, (err, book) => {
    if (err) return sendErr(err, res)

    res.json({
      success: true,
      book,
    })
  })
}

module.exports = {
  listAllBooks,
  createBook,
  updateBook,
}
