const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  lender: Schema.Types.ObjectId,
  imageURL: String,
})

const Book = mongoose.model('Book', bookModel)

Book.create = (book, userId, callback) => {
  const newBook = {
    title: book.title,
    owner: userId,
  }

  newBook.save(callback)
}

Book.update = (book, callback) => {
  Book.findOneAndUpdate({ _id: book._id }, book, callback)
}

Book.delete = (bookId, callback) => {
  Book.deleteOne({ _id: bookId }, callback)
}
