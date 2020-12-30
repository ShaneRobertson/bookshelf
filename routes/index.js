const apiRouter = require('express').Router();
require('dotenv').config()
const {API_KEY} =  process.env
const URL = "https://www.googleapis.com/books/v1/volumes?"
const axios = require('axios')

const {
  getAllBooks,
  createBook
} = require('../db')

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

apiRouter.post('/books', async (req, res, next) => {
  const {title, author, description, image, rating, rating_count} = req.body
  try {
    const newBook = await createBook(title, author, description, image, rating, rating_count) 
    console.log('heres the newest Book', newBook)
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

module.exports = apiRouter;
