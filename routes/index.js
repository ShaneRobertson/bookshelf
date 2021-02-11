const apiRouter = require('express').Router();
require('dotenv').config()
const {API_KEY} =  process.env
const URL = "https://www.googleapis.com/books/v1/volumes?"
const axios = require('axios')

const {
  getAllBooks,
  createBook,
  deleteBook,
  getBooksByAuthor
} = require('../db');



apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});


apiRouter.get('/books', async (req, res, next) => {
  try {
    const books = await getAllBooks()
    res.send(books)
  } catch (error) {
    throw error
  }
})

apiRouter.get('/books/:authorName', async (req, res, next) => {
  const {authorName} = req.params

  try {
    const booksByAuthor = await getBooksByAuthor(authorName)
    res.send(booksByAuthor)
  } catch (error) {
    throw error
  }
})

apiRouter.post('/books', async (req, res, next) => {
  const {volume_info, title, author, description, image, rating, rating_count} = req.body
  try {
    const newBook = await createBook(volume_info, title, author, description, image, rating, rating_count) 
    res.send(newBook)
  } catch (error) {
    throw error
  }
})

apiRouter.get('/google/:queryStr', async (req, res, next) =>{
  const {queryStr} = req.params

  try {
    const {data} = await axios.get(`${URL}q=${queryStr}&key=${API_KEY}`)
    res.send(data.items)
  } catch (error) {
    throw error
  }
})

apiRouter.delete('/books/:book_id', async (req, res, next) => {
const {book_id} = req.params
try {
  const deletedBook = await deleteBook(book_id)
  res.send(deletedBook)
} catch (error) {
  throw error 
}
})


module.exports = apiRouter;
