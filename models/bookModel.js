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
    ref: 'User',
  },
  borrower: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  imageURL: String,
  confirmed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: {
    createdAt: 'created',
  },
})

const Book = mongoose.model('Book', bookModel)

Book.create = (title, userId, imageURL, callback) => {
  const newBook = new Book({
    title,
    owner: userId,
    imageURL,
  })

  newBook.save(callback)
}

Book.update = (book, callback) => {
  Book.findOneAndUpdate({ _id: book._id }, book, { new: true }, callback)
}

Book.delete = (bookId, callback) => {
  Book.deleteOne({ _id: bookId }, callback)
}

Book.fetchAll = (callback) => {
  Book.find({})
    .populate({ path: 'owner', select: '-password' })
    .populate({ path: 'borrower', select: '-password' })
    .sort('-created')
    .exec(callback)
}

module.exports = Book
